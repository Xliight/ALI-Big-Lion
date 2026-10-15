import {
  Activity,
  ArrowRight,
  Bot,
  Code,
  Linkedin,
  PlayCircle,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const experiences = [
  {
    id: 1,
    icon: Bot,
    title: "AI Engineer — Symfony Builder",
    company: "Sofrecom Maroc (Feb. 2026 - Present) · Final-Year Project",
    highlights: [
      "Developed Symfony Builder, a generative AI assistant that automates the creation and configuration of Symfony applications compliant with Orange's PHP ecosystem.",
      "Designed a RAG pipeline and a multi-agent architecture for bundle recommendation and automatic configuration generation.",
      "Optimized incremental synchronization, cutting update time from 2 hours to 14 minutes.",
    ],
    tags: [
      "Python",
      "FastAPI",
      "React",
      "Node.js",
      "LangChain",
      "LangGraph",
      "Qdrant",
      "PostgreSQL",
      "GitLab",
      "LLMs",
    ],
    videoUrl: "https://drive.google.com/file/d/1bo691SPbo_fJnDljsNURjLaa4SVmAPtj/view?usp=sharing",
  },
  {
    id: 2,
    icon: Activity,
    title: "DevOps Cloud Engineer — Observability",
    company: "Sofrecom Maroc (Jun. - Sep. 2025) · Internship",
    highlights: [
      "Analyzed and optimized applications in a cloud environment and set up performance monitoring.",
      "Integrated a complete observability architecture to improve visibility and traceability of distributed services.",
      "Deployed and configured the observability stack in a containerized environment.",
      "Built Grafana dashboards and alerts to track system and application metrics.",
    ],
    tags: ["OpenTelemetry", "Prometheus", "Jaeger", "Loki", "Grafana", "Docker"],
  },
  {
    id: 3,
    icon: Code,
    title: "Full-Stack PHP Developer — HR Management App",
    company: "MATNUHPV (Jul. - Aug. 2024) · Internship",
    highlights: [
      "Developed a Laravel application to manage work and salary certificate requests.",
      "Implemented secure authentication, role-based dashboards, and real-time request tracking.",
      "Designed and implemented the relational database for users and requests.",
      "Built ergonomic interfaces to simplify data entry and case follow-up.",
    ],
    tags: ["PHP", "Laravel", "MySQL", "HTML", "CSS"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          label="Work"
          title="Professional"
          highlight="Experience"
          description={
            <>
              Key achievements focused on{" "}
              <strong className="text-foreground font-semibold">
                Generative AI, Multi-Agent Systems, and Observability
              </strong>{" "}
              from my professional experience, including my final engineering
              project.
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className="group glass rounded-3xl overflow-hidden text-left transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-40 overflow-hidden bg-linear-to-br from-primary/25 via-accent/15 to-transparent flex items-center justify-center">
                <exp.icon
                  className="h-16 w-16 text-primary transition-transform duration-700 group-hover:scale-110"
                  strokeWidth={1.5}
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent opacity-80" />
              </div>

              <div className="p-6 md:p-7 flex flex-col flex-1">
                <p className="text-primary text-sm font-semibold mb-2">
                  {exp.company}
                </p>
                <h3 className="text-xl font-bold mb-3">{exp.title}</h3>
                <ul className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1 space-y-2 list-disc pl-4 marker:text-primary">
                  {exp.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {exp.videoUrl && (
                  <a
                    href={exp.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline mt-5 w-fit"
                  >
                    <PlayCircle className="h-4 w-4" />
                    Watch Demo Video
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/mohamed-ali-chafia-952709270/?isSelfProfile=true"
          >
            <Linkedin size={16} />
            View My LinkedIn
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
