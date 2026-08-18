import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) { 
      return NextResponse.json(
        {
          valid: false,
          error: "Email não informado.",
        },
        { status: 400 }
      )
    }

    const apiKey = process.env.ABSTRACT_API_KEY

    if (!apiKey) {
      console.error("ABSTRACT_API_KEY não encontrada.")

      return NextResponse.json(
        {
          valid: false,
          error: "Erro de configuração do servidor.",
        },
        { status: 500 }
      )
    }

    const response = await fetch(
      `https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${encodeURIComponent(email)}`
    )

    if (!response.ok) {
      const errorText = await response.text()

      console.error("Abstract API status:", response.status)
      console.error("Abstract API response:", errorText)

      return NextResponse.json(
        {
          valid: false,
          error: "Erro da Abstract API.",
          status: response.status,
          details: errorText,
        },
        { status: 500 }
      )
    }

    const data = await response.json()

    const formatValid =
      data.email_deliverability?.is_format_valid === true

    const smtpValid =
      data.email_deliverability?.is_smtp_valid === true

    const mxValid =
      data.email_deliverability?.is_mx_valid === true

    const deliverable =
      data.email_deliverability?.status === "deliverable"

    const isDisposable =
      data.is_disposable_email === true

    const valid =
      formatValid &&
      smtpValid &&
      mxValid &&
      deliverable &&
      !isDisposable

    return NextResponse.json({
      valid,
      deliverability: data.email_deliverability?.status,
      formatValid,
      smtpValid,
      mxValid,
      isDisposable,
    })
  } catch (error) {
    console.error("Erro na validação:", error)

    return NextResponse.json(
      {
        valid: false,
        error: "Erro ao verificar o email.",
      },
      { status: 500 }
    )
  }
}