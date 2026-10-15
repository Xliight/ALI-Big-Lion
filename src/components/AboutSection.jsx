import { Bot, Download, Languages, Server, Users } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const highlights = [
  {
    icon: Bot,
    title: "Generative AI & LLMs",
    description:
      "Designing RAG pipelines, agentic workflows, and multi-agent architectures with LangChain, LangGraph, LangSmith, MCP, and vector search.",
  },
  {
    icon: Server,
    title: "Full-Stack Development",
    description:
      "Building APIs and web applications with Python (FastAPI, Flask, Django), Java, PHP (Laravel), React, and Express.js.",
  },
  {
    icon: Users,
    title: "DevOps & Observability",
    description:
      "Containerizing and deploying services with Docker, Kubernetes, and CI/CD, and monitoring them with OpenTelemetry, Prometheus, Loki, Jaeger, and Grafana.",
  },
  {
    icon: Languages,
    title: "Languages & Soft Skills",
    description:
      "French & English (fluent), Arabic (native). Autonomous, rigorous, adaptable, and a strong team player.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader label="About" title="About" highlight="Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="glass rounded-3xl p-8 md:p-10 text-left space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Artificial Intelligence Engineer
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I'm an AI Engineer who designs and develops solutions based on
              Large Language Models, RAG pipelines, and multi-agent
              architectures. I leverage Python and generative AI technologies
              to build intelligent, performant, and scalable systems.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Currently at Sofrecom Morocco (Orange group), I'm building
              Symfony Builder, a generative AI assistant that automates the
              creation and configuration of Symfony applications. Before that,
              I worked on cloud observability and full-stack PHP development.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I'm finishing my engineering degree at EMSI Rabat (MIAGE –
              Computer Science & Networks). My goal is to deliver strong
              business value through automation and smart use of data.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-4">
              <a href="#contact" className="btn-primary">
                Get In Touch
              </a>
              <a
                href="/CV_Chafia_Mohamed_Ali.pdf"
                download="CV_Chafia_Mohamed_Ali.pdf"
                className="btn-outline"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group glass rounded-2xl p-6 text-left transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 p-3 rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
