export type Locale = "pt" | "en"

export const dictionary = {
  pt: {
    nav: {
      services: "Serviços",
      process: "Processo",
      work: "Portfólio",
      pricing: "Preços",
      contact: "Contacto",
      cta: "Iniciar projeto",
    },
    hero: {
      status: "DISPONÍVEL PARA NOVOS PROJETOS",
      est: "EST. 2024 — PORTUGAL",
      title1: "Landing pages",
      title2: "que fazem o seu",
      title3: "negócio escalar",
      subtitle:
        "A WebSkale desenha e desenvolve landing pages profissionais e intuitivas. Elevamos a presença do seu negócio no mercado com sites rápidos, responsivos e feitos para converter.",
      ctaPrimary: "Começar agora",
      ctaSecondary: "Ver trabalhos",
      metric1: "Projetos entregues",
      metric2: "Tempo médio de entrega",
      metric3: "Satisfação de clientes",
      metric1v: "40+",
      metric2v: "14 dias",
      metric3v: "100%",
    },
    marquee: [
      "DESIGN",
      "DESENVOLVIMENTO",
      "PERFORMANCE",
      "RESPONSIVO",
      "SEO",
      "CONVERSÃO",
    ],
    services: {
      label: "// SERVIÇOS",
      title: "O que fazemos pelo seu negócio",
      subtitle:
        "Soluções completas de web, do conceito ao lançamento, com foco em resultados reais.",
      items: [
        {
          id: "01",
          title: "Landing Pages",
          desc: "Páginas de alta conversão desenhadas à medida do seu negócio e do seu público.",
        },
        {
          id: "02",
          title: "Web Design",
          desc: "Interfaces modernas e intuitivas que transmitem profissionalismo e confiança.",
        },
        {
          id: "03",
          title: "Desenvolvimento",
          desc: "Código limpo e otimizado, sites rápidos e preparados para qualquer dispositivo.",
        },
        {
          id: "04",
          title: "SEO & Performance",
          desc: "Otimização técnica para o seu site aparecer e carregar em segundos.",
        },
        {
          id: "05",
          title: "Manutenção",
          desc: "Acompanhamento contínuo, atualizações e suporte técnico dedicado.",
        },
        {
          id: "06",
          title: "Branding Digital",
          desc: "Identidade visual coerente que destaca a sua marca da concorrência.",
        },
      ],
    },
    process: {
      label: "// PROCESSO",
      title: "Como trabalhamos",
      subtitle: "Um processo transparente e comprovado, do briefing à entrega.",
      steps: [
        {
          id: "01",
          title: "Briefing",
          desc: "Ouvimos o seu negócio, objetivos e público-alvo para definir a estratégia certa.",
        },
        {
          id: "02",
          title: "Design",
          desc: "Criamos o protótipo visual, com foco na experiência e na sua identidade de marca.",
        },
        {
          id: "03",
          title: "Desenvolvimento",
          desc: "Transformamos o design em código, rápido, responsivo e otimizado.",
        },
        {
          id: "04",
          title: "Entrega & Lançamento",
          desc: "Publicamos o site, garantimos que tudo funciona e damos suporte.",
        },
      ],
    },
    work: {
      label: "// PORTFÓLIO",
      title: "Trabalhos selecionados",
      subtitle: "Alguns dos projetos que ajudámos a crescer.",
      viewProject: "Ver projeto",
      items: [
        { title: "Nova Studio", category: "Estúdio Criativo", year: "2024" },
        { title: "Atlas Fitness", category: "Ginásio & Bem-estar", year: "2024" },
        { title: "Verde Café", category: "Restauração", year: "2023" },
        { title: "Orbit Tech", category: "Startup SaaS", year: "2024" },
      ],
    },
    pricing: {
      label: "// PREÇOS",
      title: "Planos simples e transparentes",
      subtitle: "Escolha o plano ideal para a fase do seu negócio.",
      popular: "MAIS POPULAR",
      cta: "Escolher plano",
      period: "/ projeto",
      plans: [
        {
          name: "Essencial",
          price: "€490",
          desc: "Para quem precisa de presença online rápida.",
          features: [
            "Landing page de 1 página",
            "Design responsivo",
            "Formulário de contacto",
            "Otimização SEO básica",
            "Entrega em 7 dias",
          ],
        },
        {
          name: "Profissional",
          price: "€990",
          desc: "A escolha ideal para negócios em crescimento.",
          features: [
            "Até 5 secções personalizadas",
            "Design premium à medida",
            "Animações e interações",
            "SEO avançado + Analytics",
            "Integração com redes sociais",
            "Suporte de 30 dias",
          ],
        },
        {
          name: "Escala",
          price: "Sob consulta",
          desc: "Solução completa para máxima presença.",
          features: [
            "Site multipágina",
            "Estratégia de conversão",
            "Copywriting profissional",
            "Integrações avançadas",
            "Manutenção mensal",
            "Suporte prioritário",
          ],
        },
      ],
    },
    testimonials: {
      label: "// TESTEMUNHOS",
      title: "O que dizem os nossos clientes",
      items: [
        {
          quote:
            "A WebSkale transformou completamente a imagem do nosso negócio. O site é profissional, rápido e as vendas aumentaram.",
          name: "Ana Ribeiro",
          role: "Fundadora, Nova Studio",
        },
        {
          quote:
            "Processo impecável do início ao fim. Entregaram exatamente o que prometeram, dentro do prazo.",
          name: "Miguel Costa",
          role: "CEO, Orbit Tech",
        },
        {
          quote:
            "Finalmente um site à altura da nossa marca. Recomendo a qualquer negócio que queira crescer online.",
          name: "Sofia Marques",
          role: "Gerente, Verde Café",
        },
      ],
    },
    contact: {
      label: "// CONTACTO",
      title: "Vamos escalar o seu negócio",
      subtitle:
        "Conte-nos sobre o seu projeto. Respondemos em menos de 24 horas.",
      name: "Nome",
      namePlaceholder: "O seu nome",
      email: "Email",
      emailPlaceholder: "o.seu@email.com",
      message: "Mensagem",
      messagePlaceholder: "Fale-nos do seu projeto...",
      send: "Enviar mensagem",
      sent: "Mensagem enviada!",
      or: "Ou escreva diretamente para",
    },
    footer: {
      tagline: "Landing pages que fazem o seu negócio escalar.",
      rights: "Todos os direitos reservados.",
      nav: "Navegação",
      social: "Redes",
    },
  },
  en: {
    nav: {
      services: "Services",
      process: "Process",
      work: "Work",
      pricing: "Pricing",
      contact: "Contact",
      cta: "Start project",
    },
    hero: {
      status: "AVAILABLE FOR NEW PROJECTS",
      est: "EST. 2024 — PORTUGAL",
      title1: "Landing pages",
      title2: "that make your",
      title3: "business scale",
      subtitle:
        "WebSkale designs and builds professional, intuitive landing pages. We elevate your business presence in the market with fast, responsive sites built to convert.",
      ctaPrimary: "Get started",
      ctaSecondary: "View work",
      metric1: "Projects delivered",
      metric2: "Average delivery time",
      metric3: "Client satisfaction",
      metric1v: "40+",
      metric2v: "14 days",
      metric3v: "100%",
    },
    marquee: [
      "DESIGN",
      "DEVELOPMENT",
      "PERFORMANCE",
      "RESPONSIVE",
      "SEO",
      "CONVERSION",
    ],
    services: {
      label: "// SERVICES",
      title: "What we do for your business",
      subtitle:
        "Complete web solutions, from concept to launch, focused on real results.",
      items: [
        {
          id: "01",
          title: "Landing Pages",
          desc: "High-converting pages tailored to your business and your audience.",
        },
        {
          id: "02",
          title: "Web Design",
          desc: "Modern, intuitive interfaces that convey professionalism and trust.",
        },
        {
          id: "03",
          title: "Development",
          desc: "Clean, optimized code — fast sites ready for any device.",
        },
        {
          id: "04",
          title: "SEO & Performance",
          desc: "Technical optimization so your site ranks and loads in seconds.",
        },
        {
          id: "05",
          title: "Maintenance",
          desc: "Continuous monitoring, updates and dedicated technical support.",
        },
        {
          id: "06",
          title: "Digital Branding",
          desc: "Cohesive visual identity that sets your brand apart from the competition.",
        },
      ],
    },
    process: {
      label: "// PROCESS",
      title: "How we work",
      subtitle: "A transparent, proven process, from briefing to delivery.",
      steps: [
        {
          id: "01",
          title: "Briefing",
          desc: "We listen to your business, goals and audience to define the right strategy.",
        },
        {
          id: "02",
          title: "Design",
          desc: "We craft the visual prototype, focused on experience and your brand identity.",
        },
        {
          id: "03",
          title: "Development",
          desc: "We turn design into code — fast, responsive and optimized.",
        },
        {
          id: "04",
          title: "Delivery & Launch",
          desc: "We publish the site, make sure everything works and provide support.",
        },
      ],
    },
    work: {
      label: "// WORK",
      title: "Selected work",
      subtitle: "Some of the projects we helped grow.",
      viewProject: "View project",
      items: [
        { title: "Nova Studio", category: "Creative Studio", year: "2024" },
        { title: "Atlas Fitness", category: "Gym & Wellness", year: "2024" },
        { title: "Verde Café", category: "Hospitality", year: "2023" },
        { title: "Orbit Tech", category: "SaaS Startup", year: "2024" },
      ],
    },
    pricing: {
      label: "// PRICING",
      title: "Simple, transparent plans",
      subtitle: "Choose the plan that fits your business stage.",
      popular: "MOST POPULAR",
      cta: "Choose plan",
      period: "/ project",
      plans: [
        {
          name: "Essential",
          price: "€490",
          desc: "For those who need a fast online presence.",
          features: [
            "Single-page landing",
            "Responsive design",
            "Contact form",
            "Basic SEO optimization",
            "7-day delivery",
          ],
        },
        {
          name: "Professional",
          price: "€990",
          desc: "The ideal choice for growing businesses.",
          features: [
            "Up to 5 custom sections",
            "Premium tailored design",
            "Animations and interactions",
            "Advanced SEO + Analytics",
            "Social media integration",
            "30-day support",
          ],
        },
        {
          name: "Scale",
          price: "Custom",
          desc: "Complete solution for maximum presence.",
          features: [
            "Multi-page website",
            "Conversion strategy",
            "Professional copywriting",
            "Advanced integrations",
            "Monthly maintenance",
            "Priority support",
          ],
        },
      ],
    },
    testimonials: {
      label: "// TESTIMONIALS",
      title: "What our clients say",
      items: [
        {
          quote:
            "WebSkale completely transformed our business image. The site is professional, fast, and sales went up.",
          name: "Ana Ribeiro",
          role: "Founder, Nova Studio",
        },
        {
          quote:
            "Flawless process from start to finish. They delivered exactly what they promised, on time.",
          name: "Miguel Costa",
          role: "CEO, Orbit Tech",
        },
        {
          quote:
            "Finally a site worthy of our brand. I recommend it to any business that wants to grow online.",
          name: "Sofia Marques",
          role: "Manager, Verde Café",
        },
      ],
    },
    contact: {
      label: "// CONTACT",
      title: "Let's scale your business",
      subtitle: "Tell us about your project. We reply in under 24 hours.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      message: "Message",
      messagePlaceholder: "Tell us about your project...",
      send: "Send message",
      sent: "Message sent!",
      or: "Or write directly to",
    },
    footer: {
      tagline: "Landing pages that make your business scale.",
      rights: "All rights reserved.",
      nav: "Navigation",
      social: "Social",
    },
  },
} as const

export type Dictionary = (typeof dictionary)[Locale]
