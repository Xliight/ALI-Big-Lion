import { Award, GraduationCap } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const education = [
  {
    school: "École Marocaine des Sciences de l'Ingénieur (EMSI) — Rabat",
    degree: "Engineering Degree, MIAGE option — Computer Science & Networks",
    period: "2021 - 2026",
  },
  {
    school: "Groupe Scolaire Privé Harmonie — Rabat",
    degree: "Baccalaureate in Physics & Chemistry (French option)",
    period: "2019 - 2020",
  },
];

const certificates = [
  { name: "Machine Learning with Python", issuer: "IBM (Coursera)" },
  { name: "Docker, Kubernetes & OpenShift", issuer: "IBM (Coursera)" },
  { name: "Virtual Networks in Azure", issuer: "Whizlabs (Coursera)" },
  {
    name: "The Unix Workbench",
    issuer: "Johns Hopkins University (Coursera)",
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="section-padding relative">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          label="Education"
          title="Education &"
          highlight="Certifications"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="grid gap-4">
            {education.map((item) => (
              <div
                key={item.school}
                className="group glass rounded-2xl p-6 text-left transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 p-3 rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-primary text-sm font-semibold mb-1">
                      {item.period}
                    </p>
                    <h4 className="font-semibold text-lg mb-2">
                      {item.school}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.degree}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificates.map((cert) => (
              <div
                key={cert.name}
                className="group glass rounded-2xl p-5 text-left transition-all duration-300 hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="p-2.5 w-fit rounded-xl bg-primary/10 text-primary mb-4 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Award className="h-5 w-5" />
                </div>
                <h4 className="font-semibold mb-1">{cert.name}</h4>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
