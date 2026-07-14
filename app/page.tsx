"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { whatsappUrl, type WhatsappTopic } from "@/components/whatsapp";

const solutions: {
  id: string;
  title: string;
  description: string;
  label: string;
  topic: WhatsappTopic;
}[] = [
  {
    id: "01",
    title: "Atrair mais clientes",
    description:
      "Estratégia, posicionamento e marketing para gerar oportunidades reais.",
    label: "Marketing & Growth",
    topic: "clientes",
  },
  {
    id: "02",
    title: "Automatizar atendimento",
    description:
      "IA e processos para atender melhor, mais rápido e em escala.",
    label: "IA & Automação",
    topic: "automacao",
  },
  {
    id: "03",
    title: "Criar um site",
    description:
      "Presença digital premium, rápida e preparada para converter.",
    label: "Web & Conversão",
    topic: "site",
  },
  {
    id: "04",
    title: "Criar minha marca",
    description:
      "Nome, identidade visual e posicionamento para ser reconhecido.",
    label: "Branding",
    topic: "marca",
  },
  {
    id: "05",
    title: "Registrar minha marca",
    description:
      "Proteção estratégica com acompanhamento especializado.",
    label: "Proteção de Marca",
    topic: "registro",
  },
  {
    id: "06",
    title: "Ainda não sei por onde começar",
    description:
      "Explique seu momento. A Dani ajuda a encontrar o melhor caminho.",
    label: "Direcionamento",
    topic: "duvida",
  },
];

function WhatsAppLink({
  topic,
  className,
  children,
}: {
  topic: WhatsappTopic;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={whatsappUrl(topic)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.23], [0, 110]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1.02, 1.09]);

  return (
    <>
      <div className="grain" aria-hidden="true" />

      <header className="siteHeader">
        <a href="#inicio" className="brand">
          <Image
            src="/assets/a7one-logo.png"
            alt="A7 One — Marketing Growth AI"
            width={760}
            height={280}
            priority
          />
        </a>

        <nav aria-label="Navegação principal">
          <a href="#visao">Visão</a>
          <a href="#solucoes">Soluções</a>
          <a href="#experiencia">Experiência</a>
          <a href="#alz">AlZap</a>
        </nav>

        <WhatsAppLink topic="geral" className="headerCta">
          Falar com a Dani <span>↗</span>
        </WhatsAppLink>
      </header>

      <main>
        <section id="inicio" className="hero">
          <motion.div
            className="heroImage"
            style={{ y: heroY, scale: heroScale }}
          />
          <div className="heroOverlay" />

          <div className="heroContent">
            <motion.div
              className="eyebrow"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span />
              ESTRATÉGIA • TECNOLOGIA • INTELIGÊNCIA ARTIFICIAL
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08 }}
            >
              Você não precisa de
              <br />
              <em>mais uma agência.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18 }}
            >
              Você precisa da empresa certa para acelerar a próxima fase do
              seu negócio.
            </motion.p>

            <motion.div
              className="heroActions"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28 }}
            >
              <a href="#solucoes" className="btn primary">
                Escolher meu próximo passo
              </a>
              <WhatsAppLink topic="geral" className="btn glass">
                Falar com a Dani
              </WhatsAppLink>
            </motion.div>

            <motion.div
              className="heroProof"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              <span>Marketing</span>
              <i />
              <span>Growth</span>
              <i />
              <span>IA aplicada</span>
              <i />
              <span>Execução</span>
            </motion.div>
          </div>

          <div className="heroMark">A7</div>
          <div className="scrollCue">
            DESCUBRA <span>↓</span>
          </div>
        </section>

        <section id="visao" className="manifesto">
          <Reveal className="manifestoArt">
            <Image
              src="/assets/campaign-concept.jpg"
              alt="Conceito visual A7 One — Toda empresa cresce duas vezes"
              width={1536}
              height={2048}
            />
          </Reveal>

          <Reveal className="manifestoCopy" delay={0.08}>
            <div className="sectionNumber">01 / VISÃO</div>
            <h2>Toda empresa cresce duas vezes.</h2>

            <div className="visionLines">
              <div>
                <span>01</span>
                <strong>Primeiro na visão.</strong>
              </div>
              <div>
                <span>02</span>
                <strong>Depois nos resultados.</strong>
              </div>
            </div>

            <p>
              Estratégia clareia. Tecnologia acelera. Inteligência artificial
              potencializa. Empresas extraordinárias não crescem por acaso.
            </p>
          </Reveal>
        </section>

        <section id="solucoes" className="solutions">
          <div className="solutionsHead">
            <Reveal>
              <div className="sectionNumber">02 / PRÓXIMO PASSO</div>
              <h2>O que sua empresa precisa resolver agora?</h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p>
                Escolha um caminho. A Dani entende o cenário e direciona você
                para a solução mais adequada.
              </p>
            </Reveal>
          </div>

          <div className="solutionsList">
            {solutions.map((solution, index) => (
              <Reveal key={solution.id} delay={index * 0.05}>
                <a
                  href={whatsappUrl(solution.topic)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`solutionRow ${
                    solution.id === "06" ? "highlighted" : ""
                  }`}
                >
                  <span className="solutionIndex">{solution.id}</span>
                  <div>
                    <h3>{solution.title}</h3>
                    <p>{solution.description}</p>
                  </div>
                  <b>{solution.label}</b>
                  <span className="arrow">↗</span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="experiencia" className="experience">
          <Reveal className="experienceCopy">
            <div className="sectionNumber">03 / EXPERIÊNCIA</div>
            <h2>
              Menos formulário.
              <br />
              <em>Mais conversa.</em>
            </h2>
            <p>
              Você escolhe o que precisa e começa uma conversa imediata. Sem
              cadastro. Sem espera. Sem perder tempo explicando tudo do zero.
            </p>

            <div className="experiencePoints">
              <div>
                <span>01</span>
                <strong>Atendimento inteligente e personalizado</strong>
              </div>
              <div>
                <span>02</span>
                <strong>Estratégia e tecnologia conectadas</strong>
              </div>
              <div>
                <span>03</span>
                <strong>Direcionamento para a solução certa</strong>
              </div>
              <div>
                <span>04</span>
                <strong>Disponível quando você precisar</strong>
              </div>
            </div>
          </Reveal>

          <Reveal className="conversationStage" delay={0.1}>
            <div className="conversationShell">
              <div className="conversationTop">
                <span />
                <span />
                <span />
                <small>A7 ONE / CONVERSA</small>
              </div>

              <div className="bubble bubbleUser">
                Quero criar um site para minha empresa.
              </div>

              <div className="daniResponse">
                <small>DANI</small>
                <div className="bubble bubbleDani">
                  Perfeito. Vou entender seu projeto para indicar a melhor
                  solução da A7 One.
                </div>
                <div className="typing">
                  <i />
                  <i />
                  <i />
                </div>
              </div>

              <div className="contextTag">contexto entendido</div>
            </div>
          </Reveal>
        </section>

        <section className="pillars">
          {[
            ["01", "Estratégia", "Entender antes de executar."],
            ["02", "Tecnologia", "Automatizar para ganhar velocidade."],
            [
              "03",
              "Inteligência Artificial",
              "Transformar atendimento e decisão.",
            ],
          ].map(([id, title, description], index) => (
            <Reveal key={id} className="pillar" delay={index * 0.08}>
              <span>{id}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </Reveal>
          ))}
        </section>

        <section id="alz" className="alz">
          <div className="alzLight" />
          <Reveal>
            <div className="alzBadge">ALZAP</div>
            <h2>
              Enquanto você dorme,
              <br />a IA continua atendendo.
            </h2>
            <p>
              A mesma lógica de atendimento inteligente pode funcionar na sua
              empresa 24 horas por dia.
            </p>
            <WhatsAppLink topic="automacao" className="btn primary">
              Conhecer o AlZap
            </WhatsAppLink>
          </Reveal>
        </section>

        <section className="finalCta">
          <Reveal>
            <div className="sectionNumber">04 / PRÓXIMO MOVIMENTO</div>
            <h2>Vamos encontrar o próximo passo da sua empresa.</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <WhatsAppLink topic="geral" className="roundCta">
              Falar com a Dani <span>↗</span>
            </WhatsAppLink>
          </Reveal>
        </section>
      </main>

      <footer>
        <Image
          src="/assets/a7one-logo.png"
          alt="A7 One"
          width={760}
          height={280}
        />
        <a href="mailto:contato@a7one.com.br">contato@a7one.com.br</a>
        <div className="social">
          <a
            href="https://www.instagram.com/a7one.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/a7one/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <small>© 2026 A7 One. Marketing • Growth • AI</small>
      </footer>
    </>
  );
}
