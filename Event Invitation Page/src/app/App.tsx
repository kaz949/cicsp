import { useState, useEffect, useRef } from "react";
import { Globe, ChevronDown, ArrowRight, MapPin, Calendar, Menu, X, ExternalLink } from "lucide-react";
import RecepacaoImg from "../imports/Recepcao.png";
import WorkTextureImg from "../imports/GettyImages-2225986495.jpg";
import CicAuditorioImg from "../imports/ChatGPT_Image_Jul_17__2026_at_09_31_36_AM.png";
import CicEraImg from "../imports/Screenshot_2026-07-17_at_09.38.38.png";
import WhySpImg from "../imports/GettyImages-1441534535_2.png";
import WorkShapeImg from "../imports/Screenshot_2026-07-17_at_09.38.38-2.png";
import RealityImg from "../imports/Screenshot_2026-07-17_at_09.38.38-03.png";

/* ─────────────────────────────────────────────
   Accenture SVG logos (inline, no img tag)
───────────────────────────────────────────── */
function AccLogoWhite({ height = 28 }: { height?: number }) {
  const w = height * (163.2 / 43);
  return (
    <svg viewBox="0 0 163.2 43" height={height} width={w} xmlns="http://www.w3.org/2000/svg" aria-label="Accenture">
      <polygon fill="#A100FF" points="95.1,12 104.5,8.5 95.1,4.9 95.1,0 111.2,6.5 111.2,10.5 95.1,17" />
      <path fill="#FFFFFF" d="M6.2,43C2.8,43,0,41.3,0,37.5v-0.2c0-4.6,4-6.2,8.9-6.2h2.3v-0.9c0-1.9-0.8-3-2.8-3c-1.8,0-2.7,1-2.8,2.4h-5c0.4-4.2,3.7-6.2,8.1-6.2c4.5,0,7.8,1.9,7.8,6.6v12.6h-5.1v-2.2C10.4,41.8,8.7,43,6.2,43z M11.2,36.4v-1.8H9.1c-2.6,0-3.9,0.7-3.9,2.4v0.2c0,1.3,0.8,2.2,2.6,2.2C9.6,39.3,11.2,38.3,11.2,36.4z M28.4,43c-5.2,0-9-3.2-9-9.6v-0.3c0-6.4,4-9.8,9-9.8c4.3,0,7.8,2.2,8.2,7.1h-5c-0.3-1.8-1.3-3-3.1-3c-2.2,0-3.8,1.8-3.8,5.5v0.6c0,3.8,1.4,5.5,3.8,5.5c1.8,0,3.1-1.3,3.4-3.4h4.8C36.4,40,33.5,43,28.4,43z M48,43c-5.2,0-9-3.2-9-9.6v-0.3c0-6.4,4-9.8,9-9.8c4.3,0,7.8,2.2,8.2,7.1h-5c-0.3-1.8-1.3-3-3.1-3c-2.2,0-3.8,1.8-3.8,5.5v0.6c0,3.8,1.4,5.5,3.8,5.5c1.8,0,3.1-1.3,3.4-3.4h4.8C56,40,53.1,43,48,43z M67.7,43c-5.4,0-9.1-3.2-9.1-9.5v-0.4c0-6.3,3.9-9.8,9-9.8c4.7,0,8.6,2.6,8.6,8.9v2.3H63.9c0.2,3.4,1.7,4.7,3.9,4.7c2,0,3.1-1.1,3.5-2.4h4.9C75.6,40.3,72.6,43,67.7,43z M64,31H71c-0.1-2.8-1.4-4-3.5-4C65.9,27.1,64.4,28,64,31z M79.4,23.8h5.3v2.8c0.9-1.8,2.8-3.2,5.7-3.2c3.4,0,5.7,2.1,5.7,6.6v12.6h-5.3V30.8c0-2.2-0.9-3.2-2.8-3.2c-1.8,0-3.3,1.1-3.3,3.5v11.5h-5.3V23.8z M105.8,18.1v5.7h3.6v3.9h-3.6v8.9c0,1.4,0.6,2.1,1.9,2.1c0.8,0,1.3-0.1,1.8-0.3v4.1c-0.6,0.2-1.7,0.4-3,0.4c-4.1,0-6-1.9-6-5.7v-9.5h-2.2v-3.9h2.2v-3.5L105.8,18.1z M129.2,42.6H124v-2.8c-0.9,1.8-2.7,3.2-5.5,3.2c-3.4,0-5.9-2.1-5.9-6.5V23.8h5.3v12c0,2.2,0.9,3.2,2.7,3.2c1.8,0,3.3-1.2,3.3-3.5V23.8h5.3V42.6z M133.1,23.8h5.3v3.5c1.1-2.5,2.9-3.7,5.7-3.7v5.2c-3.6,0-5.7,1.1-5.7,4.2v9.7h-5.3V23.8z M154.8,43c-5.4,0-9.1-3.2-9.1-9.5v-0.4c0-6.3,3.9-9.8,9-9.8c4.7,0,8.6,2.6,8.6,8.9v2.3h-12.2c0.2,3.4,1.7,4.7,3.9,4.7c2,0,3.1-1.1,3.5-2.4h4.9C162.6,40.3,159.7,43,154.8,43z M151,31h7.1c-0.1-2.8-1.4-4-3.5-4C153,27.1,151.5,28,151,31z" />
    </svg>
  );
}

function AccGT({ height = 28 }: { height?: number }) {
  return (
    <svg viewBox="0 0 328.0399 360" height={height} width={height * (328.04 / 360)} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <polygon fill="#7500C0" points="0,360 328.0399,226.9993 328.0399,133.0008 0,0 0,93.9987 212.1184,180 0,266.0013" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Types & data
───────────────────────────────────────────── */
type Lang = "es-la" | "en-us" | "es-ar" | "es-co" | "pt-br";

const LANGUAGES: { code: Lang; label: string; short: string; flag: string }[] = [
  { code: "es-la", label: "Español (LATAM)", short: "ES-LA", flag: "🌎" },
  { code: "en-us", label: "English (US)", short: "EN-US", flag: "🇺🇸" },
  { code: "es-ar", label: "Español (Argentina)", short: "ES-AR", flag: "🇦🇷" },
  { code: "es-co", label: "Español (Colombia)", short: "ES-CO", flag: "🇨🇴" },
  { code: "pt-br", label: "Português (Brasil)", short: "PT-BR", flag: "🇧🇷" },
];

interface Content {
  saveTheDate: string;
  headline1: string;
  headline2: string;
  subheadline: string;
  date: string;
  location: string;
  heroParagraph: string;
  heroParagraph2: string;
  ctaConfirm: string;
  ctaLearnMore: string;
  cicLabel: string;
  cicSubtitle: string;
  cicIntro1: string;
  cicIntro2: string;
  cicIntro3: string;
  cicIntro4: string;
  cicIntro5: string;
  cicTitle: string;
  cicBody1: string;
  cicBody2: string;
  cicBody3: string;
  cicBody4: string;
  cicEra: string;
  cicEraBody: string;
  cicAbout1: string;
  cicAbout2: string;
  whyLabel: string;
  whyTitle: string;
  whyBody1: string;
  whyBody2a: string;
  whyBody2b: string;
  workLabel: string;
  workTitle: string;
  workBody1: string;
  workBody2: string;
  workBody3: string;
  realityLabel: string;
  realityTitle: string;
  realityBody: string;
  themesLabel: string;
  themes: string[];
  closingTitle: string;
  closingBody: string;
  closingCta: string;
  venueLabel: string;
  venueTitle: string;
  venueAddress1: string;
  venueAddress2: string;
  venueParking: string;
  navAbout: string;
  navWhy: string;
  navWork: string;
  navThemes: string;
  navVenue: string;
}

const CONTENT: Record<Lang, Content> = {
  "pt-br": {
    saveTheDate: "Reserve sua data",
    headline1: "Connected",
    headline2: "Innovation Center",
    subheadline: "Executive Decision Experiences",
    date: "27 de agosto, 2026",
    location: "Accenture CIC · São Paulo",
    heroParagraph: "O Connected Innovation Center reúne executivos, especialistas, conhecimento profundo das indústrias e capacidades tecnológicas para transformar conhecimento em decisões de negócio.",
    heroParagraph2: "No dia 27 de agosto, o Connected Innovation Center da Accenture receberá um grupo de executivos da indústria financeira da América Latina em uma experiência dedicada às decisões que reinventam a indústria bancária.",
    ctaConfirm: "Confirme sua presença",
    ctaLearnMore: "Saiba mais",
    cicLabel: "Sobre o CIC",
    cicSubtitle: "Executive Decision Experiences",
    cicIntro1: "No dia 27 de agosto, o Connected Innovation Center da Accenture receberá um grupo de executivos da indústria financeira da América Latina em uma experiência dedicada às decisões que reinventam a indústria bancária.",
    cicIntro2: "Inteligência artificial, plataformas, meios de pagamento, modernização tecnológica, desenvolvimento de software e novos modelos operacionais estarão presentes no encontro.",
    cicIntro3: "Vamos discutir como líderes transformam essas possibilidades em vantagem competitiva.",
    cicIntro4: "Cada encontro no CIC conecta visão de indústria, experiências concretas, especialistas da Accenture e dinâmicas colaborativas que ampliam a qualidade do julgamento executivo.",
    cicIntro5: "Nas próximas páginas, você conhecerá por que São Paulo se tornou um dos lugares mais relevantes para discutir o futuro da indústria financeira e como o Connected Innovation Center apoia líderes em momentos de transformação acelerada.",
    cicTitle: "Esse é o papel do Connected Innovation Center (CIC) da Accenture, em São Paulo.",
    cicBody1: "A inteligência artificial tornou real novos modelos operacionais, agentes inteligentes, plataformas, arquiteturas tecnológicas e formas inéditas de interação com clientes, pilares de transformação que passaram a fazer parte da reinvenção das instituições financeiras.",
    cicBody2: "O desafio passou a ser decidir como utilizar a tecnologia para construir vantagem competitiva.",
    cicBody3: "Quais capacidades merecem investimento? Quais iniciativas devem ganhar escala? Como modernizar plataformas críticas? De que forma a IA pode transformar operações, meios de pagamento, desenvolvimento de software, atendimento ao cliente e novos modelos de negócio?",
    cicBody4: "Essas decisões exigem contexto, experiência, conhecimento da indústria e capacidade de conectar tendências às prioridades específicas de cada organização.",
    cicEra: "A era das decisões",
    cicEraBody: "O CIC foi concebido para apoiar líderes diante de decisões complexas em momentos de transformação acelerada.",
    cicAbout1: "Cada encontro reúne especialistas da Accenture, conhecimento acumulado em diferentes setores, casos concretos de transformação e tecnologias que redefinem a competitividade.",
    cicAbout2: "Em vez de falar de inovação, o CIC cria as condições para que executivos compreendam profundamente os desafios que enfrentam, avaliem alternativas e tenham clareza sobre as decisões que definirão o futuro de seus negócios.",
    whyLabel: "Por que São Paulo?",
    whyTitle: "Poucos mercados transformaram seu sistema financeiro com a velocidade observada no Brasil.",
    whyBody1: "Pagamentos instantâneos em escala nacional, Open Finance, bancos digitais, modernização de plataformas, novas arquiteturas de customer service e aplicações de inteligência artificial fizeram do país uma referência internacional em transformação financeira.",
    whyBody2a: "Ao longo dessa trajetória, a Accenture participou das iniciativas mais relevantes do setor, acumulando experiência singular sobre como essa reinvenção ocorre.",
    whyBody2b: "Para executivos da América Latina, o CIC oferece acesso aos aprendizados estratégicos construídos ao lado das principais instituições financeiras da região e permite que as soluções sejam vividas.",
    workLabel: "Work & Shape",
    workTitle: "O CIC se abre para uma experiência estruturada de construção de decisões.",
    workBody1: "Mais do que workshop, o Work & Shape reúne lideranças em torno de questões estratégicas reais e promove conversas que dificilmente ocorrem no dia a dia das organizações.",
    workBody2: "Cada sessão combina narrativas executivas, perspectivas da indústria, casos concretos, capacidades tecnológicas da Accenture e dinâmicas colaborativas cuidadosamente desenhadas para testar hipóteses, confrontar prioridades e ampliar a qualidade do julgamento executivo.",
    workBody3: "Mais do que consenso, o resultado esperado é clareza sobre as decisões que realmente importam.",
    realityLabel: "Uma experiência construída para a sua realidade",
    realityTitle: "Cada encontro é personalizado de acordo com os desafios estratégicos de cada organização.",
    realityBody: "Em 27 de agosto, o CIC se abre para clientes interessados em temas conectados às decisões que as instituições financeiras precisam tomar:",
    themesLabel: "Temas da agenda",
    themes: [
      "Inteligência Artificial Agêntica aplicada ao setor financeiro",
      "Modernização de plataformas e arquitetura tecnológica",
      "Transformação do ciclo de vida de desenvolvimento de software",
      "Customer service inteligente",
      "Operações orientadas por IA",
      "Meios de pagamento",
      "Dados e plataformas digitais",
      "Novos modelos de negócio para a indústria financeira",
    ],
    closingTitle: "Toda transformação começa por uma decisão.",
    closingBody: "O Connected Innovation Center foi concebido para assegurar decisões tomadas com clareza, profundidade e confiança.",
    closingCta: "Esperamos recebê-lo no dia 27 de agosto.",
    venueLabel: "Local",
    venueTitle: "Connected Innovation Center — Accenture em São Paulo",
    venueAddress1: "Av. das Nações Unidas 14.401 – 12º Andar",
    venueAddress2: "Edifício Parque da Cidade – Torre Paineira",
    venueParking: "Estacionamento disponível",
    navAbout: "Sobre",
    navWhy: "São Paulo",
    navWork: "Work & Shape",
    navThemes: "Temas",
    navVenue: "Local",
  },
  "en-us": {
    saveTheDate: "Save the Date",
    headline1: "Connected",
    headline2: "Innovation Center",
    subheadline: "Executive Decision Experiences",
    date: "August 27, 2026",
    location: "Accenture CIC · São Paulo",
    heroParagraph: "The Connected Innovation Center brings together executives, specialists, deep industry knowledge and technological capabilities to transform knowledge into business decisions.",
    heroParagraph2: "On August 27, the Accenture Connected Innovation Center will host a group of financial industry executives from Latin America in an experience dedicated to the decisions that are reinventing the banking industry.",
    ctaConfirm: "Confirm your attendance",
    ctaLearnMore: "Learn more",
    cicLabel: "About the CIC",
    cicSubtitle: "Executive Decision Experiences",
    cicIntro1: "On August 27, the Accenture Connected Innovation Center will host a group of financial industry executives from Latin America in an experience dedicated to the decisions that are reinventing the banking industry.",
    cicIntro2: "Artificial intelligence, platforms, payment systems, technology modernization, software development and new operational models will all be part of the conversation.",
    cicIntro3: "We will discuss how leaders transform these possibilities into competitive advantage.",
    cicIntro4: "Each CIC session connects industry vision, concrete experiences, Accenture experts and collaborative dynamics that enhance the quality of executive judgment.",
    cicIntro5: "In the following pages, you will learn why São Paulo has become one of the most relevant places to discuss the future of the financial industry and how the Connected Innovation Center supports leaders in moments of accelerated transformation.",
    cicTitle: "This is the role of the Connected Innovation Center (CIC) by Accenture, in São Paulo.",
    cicBody1: "Artificial intelligence has made real new operational models, intelligent agents, platforms, technological architectures and unprecedented forms of customer interaction, transformation pillars that have become part of the reinvention of financial institutions.",
    cicBody2: "The challenge is now deciding how to use technology to build competitive advantage.",
    cicBody3: "Which capabilities deserve investment? Which initiatives should scale? How to modernize critical platforms? How can AI transform operations, payments, software development, customer service and new business models?",
    cicBody4: "These decisions require context, experience, industry knowledge and the ability to connect trends to the specific priorities of each organization.",
    cicEra: "The era of decisions",
    cicEraBody: "The CIC was designed to support leaders facing complex decisions in moments of accelerated transformation.",
    cicAbout1: "Each session brings together Accenture specialists, knowledge accumulated across different sectors, concrete transformation cases and technologies that redefine competitiveness.",
    cicAbout2: "Rather than talking about innovation, the CIC creates the conditions for executives to deeply understand the challenges they face, evaluate alternatives and gain clarity on the decisions that will define the future of their businesses.",
    whyLabel: "Why São Paulo?",
    whyTitle: "Few markets have transformed their financial system with the speed observed in Brazil.",
    whyBody1: "Instant payments at national scale, Open Finance, digital banks, platform modernization, new customer service architectures and artificial intelligence applications have made the country an international reference in financial transformation.",
    whyBody2a: "Throughout this trajectory, Accenture participated in the most relevant initiatives in the sector, accumulating singular experience on how this reinvention occurs.",
    whyBody2b: "For Latin American executives, the CIC offers access to strategic learnings built alongside the leading financial institutions of the region, allowing solutions to be truly experienced.",
    workLabel: "Work & Shape",
    workTitle: "The CIC opens for a structured experience of decision-making.",
    workBody1: "More than a workshop, Work & Shape brings leaders together around real strategic questions and promotes conversations that rarely happen in the day-to-day of organizations.",
    workBody2: "Each session combines executive narratives, industry perspectives, concrete cases, Accenture technological capabilities and carefully designed collaborative dynamics to test hypotheses, confront priorities and amplify the quality of executive judgment.",
    workBody3: "More than consensus, the expected outcome is clarity about the decisions that truly matter.",
    realityLabel: "An experience built for your reality",
    realityTitle: "Each session is personalized according to the strategic challenges of each organization.",
    realityBody: "On August 27, the CIC opens to clients interested in themes connected to the decisions that financial institutions need to make:",
    themesLabel: "Agenda themes",
    themes: [
      "Agentic Artificial Intelligence applied to the financial sector",
      "Platform modernization and technology architecture",
      "Software development lifecycle transformation",
      "Intelligent customer service",
      "AI-driven operations",
      "Payment systems",
      "Data and digital platforms",
      "New business models for the financial industry",
    ],
    closingTitle: "Every transformation begins with a decision.",
    closingBody: "The Connected Innovation Center was designed to ensure decisions made with clarity, depth and confidence.",
    closingCta: "We look forward to welcoming you on August 27.",
    venueLabel: "Venue",
    venueTitle: "Connected Innovation Center — Accenture in São Paulo",
    venueAddress1: "Av. das Nações Unidas 14,401 – 12th Floor",
    venueAddress2: "Edifício Parque da Cidade – Torre Paineira",
    venueParking: "Parking available",
    navAbout: "About",
    navWhy: "São Paulo",
    navWork: "Work & Shape",
    navThemes: "Themes",
    navVenue: "Venue",
  },
  "es-la": {
    saveTheDate: "Reserva tu fecha",
    headline1: "Connected",
    headline2: "Innovation Center",
    subheadline: "Executive Decision Experiences",
    date: "27 de agosto, 2026",
    location: "Accenture CIC · São Paulo",
    heroParagraph: "El Connected Innovation Center reúne ejecutivos, especialistas, conocimiento profundo de las industrias y capacidades tecnológicas para transformar conocimiento en decisiones de negocio.",
    heroParagraph2: "El 27 de agosto, el Connected Innovation Center de Accenture recibirá a un grupo de ejecutivos de la industria financiera de América Latina en una experiencia dedicada a las decisiones que reinventan la industria bancaria.",
    ctaConfirm: "Confirma tu asistencia",
    ctaLearnMore: "Conocer más",
    cicLabel: "Sobre el CIC",
    cicSubtitle: "Executive Decision Experiences",
    cicIntro1: "El 27 de agosto, el Connected Innovation Center de Accenture recibirá a un grupo de ejecutivos de la industria financiera de América Latina en una experiencia dedicada a las decisiones que reinventan la industria bancaria.",
    cicIntro2: "Inteligencia artificial, plataformas, medios de pago, modernización tecnológica, desarrollo de software y nuevos modelos operacionales estarán presentes en el encuentro.",
    cicIntro3: "Vamos a discutir cómo los líderes transforman estas posibilidades en ventaja competitiva.",
    cicIntro4: "Cada encuentro en el CIC conecta visión de industria, experiencias concretas, especialistas de Accenture y dinámicas colaborativas que amplían la calidad del juicio ejecutivo.",
    cicIntro5: "En las próximas páginas, conocerás por qué São Paulo se ha convertido en uno de los lugares más relevantes para discutir el futuro de la industria financiera y cómo el Connected Innovation Center apoya a los líderes en momentos de transformación acelerada.",
    cicTitle: "Ese es el papel del Connected Innovation Center (CIC) de Accenture, en São Paulo.",
    cicBody1: "La inteligencia artificial ha vuelto real los nuevos modelos operacionales, agentes inteligentes, plataformas, arquitecturas tecnológicas y formas inéditas de interacción con clientes, pilares de transformación que pasaron a ser parte de la reinvención de las instituciones financieras.",
    cicBody2: "El desafío ahora es decidir cómo utilizar la tecnología para construir ventaja competitiva.",
    cicBody3: "¿Qué capacidades merecen inversión? ¿Qué iniciativas deben ganar escala? ¿Cómo modernizar plataformas críticas? ¿De qué forma la IA puede transformar operaciones, medios de pago, desarrollo de software, atención al cliente y nuevos modelos de negocio?",
    cicBody4: "Esas decisiones exigen contexto, experiencia, conocimiento de la industria y capacidad de conectar tendencias a las prioridades específicas de cada organización.",
    cicEra: "La era de las decisiones",
    cicEraBody: "El CIC fue concebido para apoyar a los líderes ante decisiones complejas en momentos de transformación acelerada.",
    cicAbout1: "Cada encuentro reúne especialistas de Accenture, conocimiento acumulado en diferentes sectores, casos concretos de transformación y tecnologías que redefinen la competitividad.",
    cicAbout2: "En lugar de hablar de innovación, el CIC crea las condiciones para que los ejecutivos comprendan profundamente los desafíos que enfrentan, evalúen alternativas y tengan claridad sobre las decisiones que definirán el futuro de sus negocios.",
    whyLabel: "¿Por qué São Paulo?",
    whyTitle: "Pocos mercados transformaron su sistema financiero con la velocidad observada en Brasil.",
    whyBody1: "Pagos instantáneos a escala nacional, Open Finance, bancos digitales, modernización de plataformas, nuevas arquitecturas de customer service y aplicaciones de inteligencia artificial convirtieron al país en una referencia internacional en transformación financiera.",
    whyBody2a: "A lo largo de esta trayectoria, Accenture participó de las iniciativas más relevantes del sector, acumulando experiencia singular sobre cómo ocurre esta reinvención.",
    whyBody2b: "Para ejecutivos de América Latina, el CIC ofrece acceso a los aprendizajes estratégicos construidos junto a las principales instituciones financieras de la región y permite que las soluciones sean vividas.",
    workLabel: "Work & Shape",
    workTitle: "El CIC se abre para una experiencia estructurada de construcción de decisiones.",
    workBody1: "Más que un workshop, el Work & Shape reúne liderazgos en torno a preguntas estratégicas reales y promueve conversaciones que difícilmente ocurren en el día a día de las organizaciones.",
    workBody2: "Cada sesión combina narrativas ejecutivas, perspectivas de la industria, casos concretos, capacidades tecnológicas de Accenture y dinámicas colaborativas cuidadosamente diseñadas para testear hipótesis, confrontar prioridades y ampliar la calidad del juicio ejecutivo.",
    workBody3: "Más que consenso, el resultado esperado es claridad sobre las decisiones que realmente importan.",
    realityLabel: "Una experiencia construida para tu realidad",
    realityTitle: "Cada encuentro es personalizado de acuerdo con los desafíos estratégicos de cada organización.",
    realityBody: "El 27 de agosto, el CIC se abre para clientes interesados en temas conectados a las decisiones que las instituciones financieras necesitan tomar:",
    themesLabel: "Temas de la agenda",
    themes: [
      "Inteligencia Artificial Agéntica aplicada al sector financiero",
      "Modernización de plataformas y arquitectura tecnológica",
      "Transformación del ciclo de vida de desarrollo de software",
      "Customer service inteligente",
      "Operaciones orientadas por IA",
      "Medios de pago",
      "Datos y plataformas digitales",
      "Nuevos modelos de negocio para la industria financiera",
    ],
    closingTitle: "Toda transformación comienza por una decisión.",
    closingBody: "El Connected Innovation Center fue concebido para asegurar decisiones tomadas con claridad, profundidad y confianza.",
    closingCta: "Esperamos recibirte el 27 de agosto.",
    venueLabel: "Lugar",
    venueTitle: "Connected Innovation Center — Accenture en São Paulo",
    venueAddress1: "Av. das Nações Unidas 14.401 – Piso 12",
    venueAddress2: "Edifício Parque da Cidade – Torre Paineira",
    venueParking: "Estacionamiento disponible",
    navAbout: "Acerca",
    navWhy: "São Paulo",
    navWork: "Work & Shape",
    navThemes: "Temas",
    navVenue: "Lugar",
  },
  "es-ar": {
    saveTheDate: "Reservá tu fecha",
    headline1: "Connected",
    headline2: "Innovation Center",
    subheadline: "Executive Decision Experiences",
    date: "27 de agosto, 2026",
    location: "Accenture CIC · São Paulo",
    heroParagraph: "El Connected Innovation Center reúne ejecutivos, especialistas, conocimiento profundo de las industrias y capacidades tecnológicas para transformar conocimiento en decisiones de negocio.",
    heroParagraph2: "El 27 de agosto, el Connected Innovation Center de Accenture recibirá a un grupo de ejecutivos de la industria financiera de América Latina en una experiencia dedicada a las decisiones que reinventan la industria bancaria.",
    ctaConfirm: "Confirmá tu asistencia",
    ctaLearnMore: "Conocer más",
    cicLabel: "Sobre el CIC",
    cicSubtitle: "Executive Decision Experiences",
    cicIntro1: "El 27 de agosto, el Connected Innovation Center de Accenture recibirá a un grupo de ejecutivos de la industria financiera de América Latina en una experiencia dedicada a las decisiones que reinventan la industria bancaria.",
    cicIntro2: "Inteligencia artificial, plataformas, medios de pago, modernización tecnológica, desarrollo de software y nuevos modelos operacionales estarán presentes en el encuentro.",
    cicIntro3: "Vamos a discutir cómo los líderes transforman estas posibilidades en ventaja competitiva.",
    cicIntro4: "Cada encuentro en el CIC conecta visión de industria, experiencias concretas, especialistas de Accenture y dinámicas colaborativas que amplían la calidad del juicio ejecutivo.",
    cicIntro5: "En las próximas páginas, vas a conocer por qué São Paulo se convirtió en uno de los lugares más relevantes para discutir el futuro de la industria financiera y cómo el Connected Innovation Center apoya a los líderes en momentos de transformación acelerada.",
    cicTitle: "Ese es el papel del Connected Innovation Center (CIC) de Accenture, en São Paulo.",
    cicBody1: "La inteligencia artificial volvió real los nuevos modelos operacionales, agentes inteligentes, plataformas, arquitecturas tecnológicas y formas inéditas de interacción con clientes, pilares de transformación que pasaron a ser parte de la reinvención de las instituciones financieras.",
    cicBody2: "El desafío pasó a ser decidir cómo utilizar la tecnología para construir ventaja competitiva.",
    cicBody3: "¿Qué capacidades merecen inversión? ¿Qué iniciativas deben ganar escala? ¿Cómo modernizar plataformas críticas? ¿De qué forma la IA puede transformar operaciones, medios de pago, desarrollo de software, atención al cliente y nuevos modelos de negocio?",
    cicBody4: "Esas decisiones exigen contexto, experiencia, conocimiento de la industria y capacidad de conectar tendencias a las prioridades específicas de cada organización.",
    cicEra: "La era de las decisiones",
    cicEraBody: "El CIC fue concebido para apoyar a los líderes ante decisiones complejas en momentos de transformación acelerada.",
    cicAbout1: "Cada encuentro reúne especialistas de Accenture, conocimiento acumulado en diferentes sectores, casos concretos de transformación y tecnologías que redefinen la competitividad.",
    cicAbout2: "En lugar de hablar de innovación, el CIC crea las condiciones para que los ejecutivos comprendan profundamente los desafíos que enfrentan, evalúen alternativas y tengan claridad sobre las decisiones que definirán el futuro de sus negocios.",
    whyLabel: "¿Por qué São Paulo?",
    whyTitle: "Pocos mercados transformaron su sistema financiero con la velocidad observada en Brasil.",
    whyBody1: "Pagos instantáneos a escala nacional, Open Finance, bancos digitales, modernización de plataformas, nuevas arquitecturas de customer service y aplicaciones de inteligencia artificial hicieron del país una referencia internacional en transformación financiera.",
    whyBody2a: "A lo largo de esa trayectoria, Accenture participó de las iniciativas más relevantes del sector, acumulando experiencia singular sobre cómo ocurre esta reinvención.",
    whyBody2b: "Para ejecutivos de América Latina, el CIC ofrece acceso a los aprendizajes estratégicos construidos junto a las principales instituciones financieras de la región y permite que las soluciones sean vividas.",
    workLabel: "Work & Shape",
    workTitle: "El CIC se abre para una experiencia estructurada de construcción de decisiones.",
    workBody1: "Más que un workshop, el Work & Shape reúne liderazgos en torno a preguntas estratégicas reales y promueve conversaciones que difícilmente ocurren en el día a día de las organizaciones.",
    workBody2: "Cada sesión combina narrativas ejecutivas, perspectivas de la industria, casos concretos, capacidades tecnológicas de Accenture y dinámicas colaborativas cuidadosamente diseñadas para testear hipótesis, confrontar prioridades y ampliar la calidad del juicio ejecutivo.",
    workBody3: "Más que consenso, el resultado esperado es claridad sobre las decisiones que realmente importan.",
    realityLabel: "Una experiencia construida para tu realidad",
    realityTitle: "Cada encuentro es personalizado de acuerdo con los desafíos estratégicos de cada organización.",
    realityBody: "El 27 de agosto, el CIC se abre para clientes interesados en temas conectados a las decisiones que las instituciones financieras necesitan tomar:",
    themesLabel: "Temas de la agenda",
    themes: [
      "Inteligencia Artificial Agéntica aplicada al sector financiero",
      "Modernización de plataformas y arquitectura tecnológica",
      "Transformación del ciclo de vida de desarrollo de software",
      "Customer service inteligente",
      "Operaciones orientadas por IA",
      "Medios de pago",
      "Datos y plataformas digitales",
      "Nuevos modelos de negocio para la industria financiera",
    ],
    closingTitle: "Toda transformación comienza por una decisión.",
    closingBody: "El Connected Innovation Center fue concebido para asegurar decisiones tomadas con claridad, profundidad y confianza.",
    closingCta: "Esperamos recibirte el 27 de agosto.",
    venueLabel: "Lugar",
    venueTitle: "Connected Innovation Center — Accenture en São Paulo",
    venueAddress1: "Av. das Nações Unidas 14.401 – Piso 12",
    venueAddress2: "Edifício Parque da Cidade – Torre Paineira",
    venueParking: "Estacionamiento disponible",
    navAbout: "Sobre",
    navWhy: "São Paulo",
    navWork: "Work & Shape",
    navThemes: "Temas",
    navVenue: "Lugar",
  },
  "es-co": {
    saveTheDate: "Reserva tu fecha",
    headline1: "Connected",
    headline2: "Innovation Center",
    subheadline: "Executive Decision Experiences",
    date: "27 de agosto, 2026",
    location: "Accenture CIC · São Paulo",
    heroParagraph: "El Connected Innovation Center reúne ejecutivos, especialistas, conocimiento profundo de las industrias y capacidades tecnológicas para transformar conocimiento en decisiones de negocio.",
    heroParagraph2: "El 27 de agosto, el Connected Innovation Center de Accenture recibirá a un grupo de ejecutivos de la industria financiera de América Latina en una experiencia dedicada a las decisiones que reinventan la industria bancaria.",
    ctaConfirm: "Confirma tu asistencia",
    ctaLearnMore: "Conocer más",
    cicLabel: "Sobre el CIC",
    cicSubtitle: "Executive Decision Experiences",
    cicIntro1: "El 27 de agosto, el Connected Innovation Center de Accenture recibirá a un grupo de ejecutivos de la industria financiera de América Latina en una experiencia dedicada a las decisiones que reinventan la industria bancaria.",
    cicIntro2: "Inteligencia artificial, plataformas, medios de pago, modernización tecnológica, desarrollo de software y nuevos modelos operacionales estarán presentes en el encuentro.",
    cicIntro3: "Vamos a discutir cómo los líderes transforman estas posibilidades en ventaja competitiva.",
    cicIntro4: "Cada encuentro en el CIC conecta visión de industria, experiencias concretas, especialistas de Accenture y dinámicas colaborativas que amplían la calidad del juicio ejecutivo.",
    cicIntro5: "En las siguientes páginas, conocerá por qué São Paulo se ha convertido en uno de los lugares más relevantes para discutir el futuro de la industria financiera y cómo el Connected Innovation Center apoya a los líderes en momentos de transformación acelerada.",
    cicTitle: "Ese es el papel del Connected Innovation Center (CIC) de Accenture, en São Paulo.",
    cicBody1: "La inteligencia artificial ha hecho real los nuevos modelos operacionales, agentes inteligentes, plataformas, arquitecturas tecnológicas y formas inéditas de interacción con clientes, pilares de transformación que pasaron a ser parte de la reinvención de las instituciones financieras.",
    cicBody2: "El desafío ahora es decidir cómo utilizar la tecnología para construir ventaja competitiva.",
    cicBody3: "¿Qué capacidades merecen inversión? ¿Qué iniciativas deben ganar escala? ¿Cómo modernizar plataformas críticas? ¿De qué forma la IA puede transformar operaciones, medios de pago, desarrollo de software, atención al cliente y nuevos modelos de negocio?",
    cicBody4: "Esas decisiones exigen contexto, experiencia, conocimiento de la industria y capacidad de conectar tendencias a las prioridades específicas de cada organización.",
    cicEra: "La era de las decisiones",
    cicEraBody: "El CIC fue concebido para apoyar a los líderes ante decisiones complejas en momentos de transformación acelerada.",
    cicAbout1: "Cada encuentro reúne especialistas de Accenture, conocimiento acumulado en diferentes sectores, casos concretos de transformación y tecnologías que redefinen la competitividad.",
    cicAbout2: "En lugar de hablar de innovación, el CIC crea las condiciones para que los ejecutivos comprendan profundamente los desafíos que enfrentan, evalúen alternativas y tengan claridad sobre las decisiones que definirán el futuro de sus negocios.",
    whyLabel: "¿Por qué São Paulo?",
    whyTitle: "Pocos mercados han transformado su sistema financiero con la velocidad observada en Brasil.",
    whyBody1: "Pagos instantáneos a escala nacional, Open Finance, bancos digitales, modernización de plataformas, nuevas arquitecturas de customer service y aplicaciones de inteligencia artificial han convertido al país en una referencia internacional en transformación financiera.",
    whyBody2a: "A lo largo de esta trayectoria, Accenture participó de las iniciativas más relevantes del sector, acumulando experiencia singular sobre cómo ocurre esta reinvención.",
    whyBody2b: "Para ejecutivos de América Latina, el CIC ofrece acceso a los aprendizajes estratégicos construidos junto a las principales instituciones financieras de la región y permite que las soluciones sean vividas.",
    workLabel: "Work & Shape",
    workTitle: "El CIC se abre para una experiencia estructurada de construcción de decisiones.",
    workBody1: "Más que un workshop, el Work & Shape reúne liderazgos en torno a preguntas estratégicas reales y promueve conversaciones que difícilmente ocurren en el día a día de las organizaciones.",
    workBody2: "Cada sesión combina narrativas ejecutivas, perspectivas de la industria, casos concretos, capacidades tecnológicas de Accenture y dinámicas colaborativas cuidadosamente diseñadas para testear hipótesis, confrontar prioridades y ampliar la calidad del juicio ejecutivo.",
    workBody3: "Más que consenso, el resultado esperado es claridad sobre las decisiones que realmente importan.",
    realityLabel: "Una experiencia construida para tu realidad",
    realityTitle: "Cada encuentro es personalizado de acuerdo con los desafíos estratégicos de cada organización.",
    realityBody: "El 27 de agosto, el CIC abre sus puertas para clientes interesados en temas conectados a las decisiones que las instituciones financieras necesitan tomar:",
    themesLabel: "Temas de la agenda",
    themes: [
      "Inteligencia Artificial Agéntica aplicada al sector financiero",
      "Modernización de plataformas y arquitectura tecnológica",
      "Transformación del ciclo de vida de desarrollo de software",
      "Customer service inteligente",
      "Operaciones orientadas por IA",
      "Medios de pago",
      "Datos y plataformas digitales",
      "Nuevos modelos de negocio para la industria financiera",
    ],
    closingTitle: "Toda transformación comienza por una decisión.",
    closingBody: "El Connected Innovation Center fue concebido para asegurar decisiones tomadas con claridad, profundidad y confianza.",
    closingCta: "Esperamos recibirte el 27 de agosto.",
    venueLabel: "Sede",
    venueTitle: "Connected Innovation Center — Accenture en São Paulo",
    venueAddress1: "Av. das Nações Unidas 14.401 – Piso 12",
    venueAddress2: "Edifício Parque da Cidade – Torre Paineira",
    venueParking: "Parqueadero disponible",
    navAbout: "Acerca",
    navWhy: "São Paulo",
    navWork: "Work & Shape",
    navThemes: "Temas",
    navVenue: "Sede",
  },
};

/* ─────────────────────────────────────────────
   Microsoft Forms URL (replace with actual)
───────────────────────────────────────────── */
const FORMS_URL = "https://forms.office.com/r/THuTcz2YZe";

/* ─────────────────────────────────────────────
   Section images (Unsplash)
───────────────────────────────────────────── */
const SECTION_IMAGES = {
  hero: "https://images.unsplash.com/photo-1781156215497-d061d7969a29?w=1920&h=1080&fit=crop&auto=format",
  cic1: "https://images.unsplash.com/photo-1764810815228-b7f9432eec5c?w=900&h=1100&fit=crop&auto=format",
  cic2: "https://images.unsplash.com/photo-1676275774895-7fbba85dce94?w=1200&h=800&fit=crop&auto=format",
  cic3: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?w=1200&h=800&fit=crop&auto=format",
  why: "https://images.unsplash.com/photo-1572894234976-d961418c709d?w=900&h=1100&fit=crop&auto=format",
  work: "https://images.unsplash.com/photo-1623652554515-91c833e3080e?w=900&h=1100&fit=crop&auto=format",
  themes: "https://images.unsplash.com/photo-1644088379091-d574269d422f?w=900&h=1100&fit=crop&auto=format",
  venue: "https://images.unsplash.com/photo-1646153114001-495dfb56506d?w=900&h=1100&fit=crop&auto=format",
};

/* ─────────────────────────────────────────────
   Ken Burns + image settle keyframes
───────────────────────────────────────────── */
const KB_STYLES = `
  @keyframes kb1 {
    0%   { transform: scale(1.06) translate(1.5%, 1%); }
    100% { transform: scale(1.16) translate(-1.5%, -1%); }
  }
  @keyframes kb2 {
    0%   { transform: scale(1.14) translate(-2%, -0.5%); }
    100% { transform: scale(1.05) translate(1.5%, 1.5%); }
  }
  @keyframes kb3 {
    0%   { transform: scale(1.08) translate(0%, 1.5%); }
    100% { transform: scale(1.18) translate(1%, -1.5%); }
  }

  /* One-shot settle: image "lands" as section enters viewport */
  @keyframes imgSettle {
    from { transform: scale(1.07); box-shadow: none; }
    to   { transform: scale(1.00); box-shadow: 0 20px 56px rgba(0,0,0,0.65); }
  }

  /* Scroll-driven version for supported browsers */
  @supports (animation-timeline: view()) {
    .img-settle {
      animation: imgSettle linear both;
      animation-timeline: view();
      animation-range: entry 0% entry 75%;
      will-change: transform, box-shadow;
    }
  }
  /* Fallback: smooth entrance animation once rendered */
  @supports not (animation-timeline: view()) {
    .img-settle {
      animation: imgSettle 1.1s cubic-bezier(0.22, 1, 0.36, 1) both;
    }
  }

  /* ── Mobile layout ── */
  @media (max-width: 767px) {
    .hero-content {
      padding-left: 1.5rem !important;
      padding-right: 1.5rem !important;
      padding-bottom: 4rem !important;
    }
    .sticky-grid {
      display: flex !important;
      flex-direction: column !important;
      gap: 40px !important;
      padding-left: 1.5rem !important;
      padding-right: 1.5rem !important;
    }
    .sticky-grid > .sticky-img-col {
      position: static !important;
    }
    .sticky-img-col > .img-settle {
      aspect-ratio: 3/2 !important;
    }
    .themes-grid {
      grid-template-columns: 1fr !important;
    }
    .closing-pad {
      padding-left: 1.5rem !important;
      padding-right: 1.5rem !important;
    }
    .footer-pad {
      padding-left: 1.5rem !important;
      padding-right: 1.5rem !important;
    }
    .closing-venue-grid {
      grid-template-columns: 1fr !important;
      padding-left: 1.5rem !important;
      padding-right: 1.5rem !important;
      gap: 60px !important;
    }
    .venue-col {
      border-left: none !important;
      padding-left: 0 !important;
      border-top: 1px solid rgba(255,255,255,0.07) !important;
      padding-top: 48px !important;
    }
    .work-section-inner {
      padding-left: 1.5rem !important;
      padding-right: 1.5rem !important;
    }
  }
`;

function KBStyles() {
  return <style dangerouslySetInnerHTML={{ __html: KB_STYLES }} />;
}

/* ─────────────────────────────────────────────
   Shared styles
───────────────────────────────────────────── */
const body: React.CSSProperties = {
  fontSize: "clamp(14px,1.05vw,17px)",
  color: "rgba(255,255,255,0.62)",
  lineHeight: 1.78,
};

const ROOT: React.CSSProperties = {
  background: "#000",
  color: "#fff",
  minHeight: "100vh",
  overflowX: "hidden",
  fontFamily: "'Inter','Helvetica Neue',Helvetica,Arial,sans-serif",
};

/* ─────────────────────────────────────────────
   StickyImageSection: text + sticky image, alternating sides
   img-settle on wrapper (scale), Ken Burns on img (translate+scale)
───────────────────────────────────────────── */
function StickyImageSection({
  id,
  children,
  imgSrc,
  imgAlt,
  padTop = 120,
  padBottom = 120,
  dark = false,
  kbVariant = "kb1",
  flip = false,
  opacity = 0.88,
  aspect = "4/5",
}: {
  id?: string;
  children: React.ReactNode;
  imgSrc: string;
  imgAlt: string;
  padTop?: number;
  padBottom?: number;
  dark?: boolean;
  kbVariant?: "kb1" | "kb2" | "kb3";
  flip?: boolean;
  opacity?: number;
  aspect?: string;
}) {
  const textCol = <div style={{ minWidth: 0 }}>{children}</div>;
  const imgCol = (
    <div
      className="sticky-img-col"
      style={{ position: "sticky", top: 96, alignSelf: "start" }}
    >
      {/* img-settle: scroll-driven scale. Ken Burns is on the inner img — separate transforms */}
      <div
        className="img-settle"
        style={{ overflow: "hidden", aspectRatio: aspect, background: "#111" }}
      >
        <img
          src={imgSrc}
          alt={imgAlt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity,
            display: "block",
            animation: `${kbVariant} 22s ease-in-out infinite alternate`,
            transformOrigin: "center center",
          }}
        />
      </div>
    </div>
  );

  return (
    <section
      id={id}
      style={{ background: dark ? "#060606" : "#000", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div
        className="sticky-grid"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: `${padTop}px 4rem ${padBottom}px`,
          display: "grid",
          gridTemplateColumns: flip ? "400px 1fr" : "1fr 400px",
          gap: 80,
          alignItems: "start",
        }}
      >
        {flip ? <>{imgCol}{textCol}</> : <>{textCol}{imgCol}</>}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Main App
───────────────────────────────────────────── */
export default function App() {
  const [lang, setLang] = useState<Lang>("es-la");
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const c = CONTENT[lang];
  const currentLang = LANGUAGES.find((l) => l.code === lang)!;

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    if (!langOpen) return;
    const close = () => setLangOpen(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [langOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={ROOT}>
      <KBStyles />
      {/* ── NAV ── */}
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          background: scrolled ? "rgba(0,0,0,0.96)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "all 0.3s",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 4rem",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a href="https://www.accenture.com/br-pt/about/accenture-innovation/connected-innovation-centers" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center" }}>
            <AccLogoWhite height={22} />
          </a>

          {/* Desktop nav links */}
          <nav style={{ display: "flex", gap: 24, alignItems: "center" }} className="hidden md:flex">
            {[
              { id: "cic",    label: c.navAbout },
              { id: "why",    label: c.navWhy },
              { id: "work",   label: c.navWork },
              { id: "themes", label: c.navThemes },
              { id: "venue",  label: c.navVenue },
            ].map((lnk) => (
              <NavBtn key={lnk.id} onClick={() => scrollTo(lnk.id)}>{lnk.label}</NavBtn>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* Language dropdown */}
            <div style={{ position: "relative" }} onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  fontSize: 12, color: "rgba(255,255,255,0.5)",
                  background: "none", border: "none", cursor: "pointer", padding: "6px 8px",
                }}
              >
                <Globe style={{ width: 13, height: 13 }} />
                <span className="hidden lg:block">{currentLang.flag} {currentLang.label}</span>
                <span className="block lg:hidden" style={{ fontSize: 11 }}>{currentLang.flag} {currentLang.short}</span>
                <ChevronDown style={{ width: 11, height: 11, transition: "0.2s", transform: langOpen ? "rotate(180deg)" : "none" }} />
              </button>
              {langOpen && (
                <div style={{
                  position: "absolute", right: 0, top: "calc(100% + 4px)",
                  background: "#111", border: "1px solid rgba(255,255,255,0.09)",
                  minWidth: 220, zIndex: 100,
                }}>
                  {LANGUAGES.map((l) => (
                    <LangOption key={l.code} active={lang === l.code} onClick={() => { setLang(l.code); setLangOpen(false); }}>
                      {l.flag} {l.label}
                    </LangOption>
                  ))}
                </div>
              )}
            </div>

            {/* CTA — Microsoft Forms link */}
            <a
              href={FORMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex"
              style={{
                alignItems: "center", gap: 8,
                background: "#a100ff", color: "#fff",
                padding: "10px 20px",
                fontSize: 11, letterSpacing: "0.13em", textTransform: "uppercase", fontWeight: 600,
                textDecoration: "none", whiteSpace: "nowrap",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#8800dd")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#a100ff")}
            >
              {c.ctaConfirm}
            </a>

            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 8 }}>
              {menuOpen ? <X style={{ width: 20, height: 20 }} /> : <Menu style={{ width: 20, height: 20 }} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.07)", padding: "24px 24px 32px" }}>
            {[
              { id: "cic",    label: c.navAbout },
              { id: "why",    label: c.navWhy },
              { id: "work",   label: c.navWork },
              { id: "themes", label: c.navThemes },
              { id: "venue",  label: c.navVenue },
            ].map((lnk) => (
              <button key={lnk.id} onClick={() => scrollTo(lnk.id)}
                style={{ display: "block", width: "100%", textAlign: "left", padding: "12px 0", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", background: "none", border: "none", borderBottom: "1px solid rgba(255,255,255,0.06)", cursor: "pointer" }}>
                {lnk.label}
              </button>
            ))}
            <a href={FORMS_URL} target="_blank" rel="noopener noreferrer"
              style={{ display: "block", marginTop: 20, width: "100%", background: "#a100ff", color: "#fff", padding: 14, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600, textAlign: "center", textDecoration: "none" }}>
              {c.ctaConfirm}
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", overflow: "hidden" }}>
        {/* Background: real CIC reception photo */}
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src={RecepacaoImg}
            alt="Recepção Connected Innovation Center — Accenture São Paulo"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", animation: "kb1 24s ease-in-out infinite alternate", transformOrigin: "center center" }}
          />
          {/* gradient: transparent top → solid black bottom so text is readable */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #000 0%, rgba(0,0,0,0.72) 45%, rgba(0,0,0,0.15) 100%)" }} />
        </div>
        {/* left purple bar */}
        <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: "100%", background: "#7500C0" }} />

        <div className="hero-content" style={{ position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", width: "100%", padding: "0 4rem 7rem" }}>
          {/* Save the date badge */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 36 }}>
            <AccGT height={14} />
            <span style={{ color: "#fff", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" }}>{c.saveTheDate}</span>
          </div>

          {/* Headline — all caps, oversized */}
          <h1 style={{ fontSize: "clamp(48px,8.5vw,112px)", fontWeight: 800, lineHeight: 0.92, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#fff", margin: 0 }}>
            {c.headline1}
          </h1>
          <h1 style={{ fontSize: "clamp(48px,8.5vw,112px)", fontWeight: 800, lineHeight: 0.92, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#fff", marginBottom: 18 }}>
            {c.headline2}
          </h1>

          {/* Subtitle */}
          <p style={{ fontSize: "clamp(13px,1.05vw,16px)", fontStyle: "italic", color: "rgba(255,255,255,0.45)", marginBottom: 36, letterSpacing: "0.05em" }}>
            {c.subheadline}
          </p>

          {/* Single intro paragraph */}
          <p style={{ ...body, maxWidth: 520, marginBottom: 48 }}>{c.heroParagraph}</p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <ConfirmLink href={FORMS_URL}>{c.ctaConfirm} <ExternalLink style={{ width: 13, height: 13 }} /></ConfirmLink>
            <GhostBtn onClick={() => scrollTo("cic")}>{c.ctaLearnMore}</GhostBtn>
          </div>
        </div>
      </section>

      {/* ── CIC / ABOUT — bloco 1: label + intro + imagem direita ── */}
      <StickyImageSection
        id="cic"
        imgSrc={CicAuditorioImg}
        imgAlt="Auditório Connected Innovation Center — Accenture São Paulo"
        kbVariant="kb1"
        padBottom={60}
        aspect="3/5"
      >
        <SectionLabel>{c.cicLabel}</SectionLabel>
        <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#fff", margin: "20px 0 36px" }}>
          {c.cicSubtitle}
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <p style={body}>{c.cicIntro1}</p>
          <p style={{ ...body, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{c.cicIntro2}</p>
          <p style={{ ...body, color: "#fff", fontWeight: 700, fontSize: "clamp(15px,1.2vw,18px)" }}>{c.cicIntro3}</p>
          <p style={body}>{c.cicIntro4}</p>
          <p style={{ ...body, color: "rgba(255,255,255,0.4)", fontStyle: "italic" }}>{c.cicIntro5}</p>
        </div>
      </StickyImageSection>

      {/* ── CIC — bloco 2: "A era das decisões" + imagem esquerda (flip) ── */}
      <StickyImageSection
        imgSrc={CicEraImg}
        imgAlt="Parede de LED — Connected Innovation Center Accenture"
        kbVariant="kb2"
        dark
        flip
        padTop={60}
        padBottom={120}
      >
        <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a100ff", marginBottom: 20 }}>{c.cicEra}</p>
        <h3 style={{ fontSize: "clamp(20px,2.4vw,34px)", fontWeight: 700, lineHeight: 1.2, color: "#fff", marginBottom: 36 }}>{c.cicEraBody}</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <p style={body}>{c.cicAbout1}</p>
          <p style={body}>{c.cicAbout2}</p>
        </div>
      </StickyImageSection>

      {/* ── WHY SÃO PAULO — imagem direita ── */}
      <StickyImageSection
        id="why"
        imgSrc={WhySpImg}
        imgAlt="São Paulo — vista aérea"
        kbVariant="kb3"
      >
        <SectionLabel>{c.whyLabel}</SectionLabel>
        <h2 style={{ fontSize: "clamp(20px,2.4vw,36px)", fontWeight: 700, lineHeight: 1.2, color: "#fff", margin: "28px 0 36px" }}>{c.whyTitle}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <p style={body}>{c.whyBody1}</p>
          <p style={body}>{c.whyBody2a}</p>
          <p style={body}>{c.whyBody2b}</p>
        </div>
      </StickyImageSection>

      {/* ── WORK & SHAPE — purple, imagem esquerda (flip) ── */}
      <section id="work" style={{ background: `#450072 url(${WorkTextureImg}) center/cover no-repeat`, backgroundBlendMode: "multiply" }}>
        <div
          className="sticky-grid work-section-inner"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "120px 4rem 120px",
            display: "grid",
            gridTemplateColumns: "400px 1fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          {/* Image left — settle + Ken Burns */}
          <div className="sticky-img-col" style={{ position: "sticky", top: 96, alignSelf: "start" }}>
            <div className="img-settle" style={{ overflow: "hidden", aspectRatio: "4/5", background: "rgba(0,0,0,0.25)" }}>
              <img src={WorkShapeImg} alt="Espaço colaborativo — Work & Shape CIC Accenture"
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.72, display: "block", mixBlendMode: "multiply",
                  animation: "kb1 22s ease-in-out infinite alternate", transformOrigin: "center center" }} />
            </div>
          </div>
          {/* Text right */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
              <div style={{ height: 1, width: 32, background: "rgba(255,255,255,0.35)" }} />
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" }}>{c.workLabel}</span>
            </div>
            <h2 style={{ fontSize: "clamp(22px,2.8vw,44px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.015em", color: "#fff", marginBottom: 24 }}>{c.workTitle}</h2>
            <p style={{ fontSize: "clamp(14px,1.1vw,17px)", color: "rgba(255,255,255,0.88)", lineHeight: 1.78 }}>{c.workBody1}</p>
            <div style={{ marginTop: 40, borderTop: "1px solid rgba(255,255,255,0.2)" }}>
              {[c.workBody2, c.workBody3].map((txt, i) => (
                <div key={i} style={{ display: "flex", gap: 20, padding: "24px 0", borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
                  <span style={{ fontFamily: "monospace", fontSize: 10, color: "rgba(255,255,255,0.4)", paddingTop: 3, flexShrink: 0 }}>{String(i + 1).padStart(2, "0")}</span>
                  <p style={{ fontSize: "clamp(13px,1vw,15px)", color: "#fff", lineHeight: 1.7 }}>{txt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THEMES / REALITY — imagem direita ── */}
      <StickyImageSection
        id="themes"
        imgSrc={RealityImg}
        imgAlt="Auditório CIC — experiência executiva"
        kbVariant="kb2"
        padBottom={80}
        aspect="3/5"
        dark
      >
        <SectionLabel>{c.realityLabel}</SectionLabel>
        <h2 style={{ fontSize: "clamp(20px,2.4vw,36px)", fontWeight: 700, lineHeight: 1.2, color: "#fff", margin: "28px 0 16px" }}>{c.realityTitle}</h2>
        <p style={{ ...body, marginBottom: 40 }}>{c.realityBody}</p>
        <div className="themes-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(255,255,255,0.07)" }}>
          {c.themes.map((theme, i) => (
            <ThemeCard key={i} index={i} label={theme} />
          ))}
        </div>
      </StickyImageSection>

      {/* ── CLOSING + VENUE lado a lado ── */}
      <section id="venue" style={{ background: "#060606", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div
          className="closing-venue-grid"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "120px 4rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          {/* Esquerda: closing statement */}
          <div>
            <h2 style={{ fontSize: "clamp(28px,4vw,68px)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.025em", color: "#fff", marginBottom: 28 }}>{c.closingTitle}</h2>
            <p style={{ ...body, fontSize: "clamp(14px,1.2vw,18px)", marginBottom: 40 }}>{c.closingBody}</p>
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 48 }}>
              <div style={{ height: 1, width: 36, background: "#a100ff", flexShrink: 0 }} />
              <p style={{ fontSize: "clamp(13px,1.1vw,17px)", color: "#fff", fontWeight: 600 }}>{c.closingCta}</p>
            </div>
            <ConfirmLink href={FORMS_URL}>{c.ctaConfirm} <ExternalLink style={{ width: 13, height: 13 }} /></ConfirmLink>
          </div>

          {/* Direita: venue */}
          <div style={{ borderLeft: "1px solid rgba(255,255,255,0.07)", paddingLeft: 80 }} className="venue-col">
            <SectionLabel>{c.venueLabel}</SectionLabel>
            <h2 style={{ fontSize: "clamp(20px,2.4vw,36px)", fontWeight: 700, lineHeight: 1.2, color: "#fff", margin: "28px 0 36px" }}>{c.venueTitle}</h2>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
              <MapPin style={{ width: 14, height: 14, color: "#a100ff", marginTop: 2, flexShrink: 0 }} />
              <div>
                <p style={{ color: "#fff", fontSize: 15, lineHeight: 1.7 }}>{c.venueAddress1}</p>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>{c.venueAddress2}</p>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, marginTop: 6 }}>{c.venueParking}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "36px 4rem" }}>
        <div className="footer-pad" style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <AccLogoWhite height={20} />
            <div style={{ width: 1, height: 18, background: "rgba(255,255,255,0.12)" }} />
            <span style={{ color: "rgba(255,255,255,0.28)", fontSize: 11 }}>Connected Innovation Center</span>
          </div>
          <p style={{ color: "rgba(255,255,255,0.18)", fontSize: 11 }}>© 2026 Accenture. São Paulo, Brasil.</p>
        </div>
      </footer>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Micro-components
───────────────────────────────────────────── */
function SectionLabel({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      {icon}
      <span style={{ color: "#a100ff", fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" }}>{children}</span>
    </div>
  );
}

function MetaTag({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      {icon}
      <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{children}</span>
    </div>
  );
}

function NavBtn({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: hov ? "#fff" : "rgba(255,255,255,0.45)", background: "none", border: "none", cursor: "pointer", fontWeight: 500, transition: "color 0.2s" }}>
      {children}
    </button>
  );
}

function LangOption({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ width: "100%", textAlign: "left", display: "flex", alignItems: "center", gap: 10, padding: "11px 16px", fontSize: 13, color: active ? "#a100ff" : "rgba(255,255,255,0.65)", background: hov ? "rgba(255,255,255,0.04)" : "none", border: "none", borderLeft: active ? "2px solid #a100ff" : "2px solid transparent", cursor: "pointer" }}>
      {children}
    </button>
  );
}

function ConfirmLink({ children, href }: { children: React.ReactNode; href: string }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: "inline-flex", alignItems: "center", gap: 10, background: hov ? "#8800dd" : "#a100ff", color: "#fff", padding: "16px 32px", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600, textDecoration: "none", transition: "background 0.2s" }}>
      {children}
    </a>
  );
}

function GhostBtn({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: "flex", alignItems: "center", gap: 10, background: "transparent", color: hov ? "#fff" : "rgba(255,255,255,0.65)", border: `1px solid ${hov ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.22)"}`, padding: "16px 32px", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500, cursor: "pointer", transition: "all 0.2s" }}>
      {children}
    </button>
  );
}

function ThemeCard({ index, label }: { index: number; label: string }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: hov ? "#0d0d0d" : "#000", padding: "28px 24px", transition: "background 0.2s", cursor: "default" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
        <span style={{ fontFamily: "monospace", fontSize: 10, color: "#a100ff", letterSpacing: "0.1em" }}>{String(index + 1).padStart(2, "0")}</span>
        <ArrowRight style={{ width: 13, height: 13, color: hov ? "#a100ff" : "rgba(255,255,255,0.1)", transform: hov ? "translateX(3px)" : "none", transition: "all 0.2s" }} />
      </div>
      <p style={{ fontSize: 13, fontWeight: 500, color: "#fff", lineHeight: 1.5 }}>{label}</p>
    </div>
  );
}
