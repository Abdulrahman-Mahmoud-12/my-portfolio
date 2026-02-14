import SectionHeading from "./section-heading"

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Experience" />

        <div className="max-w-3xl">
          {/* Timeline item */}
          <div className="timeline-line relative pl-8">
            {/* Dot */}
            <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background" />

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-1 flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-semibold text-foreground">
                  AI & Data Science Intern
                </h3>
                <span className="rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Current
                </span>
              </div>

              <p className="mb-1 text-sm font-medium text-foreground/80">
                Digital Egypt Pioneers &mdash; Microsoft ML Engineer Track
              </p>
              <p className="mb-4 text-sm text-muted-foreground">
                December 2025 &ndash; Present
              </p>

              <ul className="space-y-2">
                {[
                  "Applied full ML workflows using Python",
                  "Built and evaluated ML and DL models for Computer Vision and NLP tasks",
                  "Performed preprocessing, visualization, and feature engineering",
                  "Gained hands-on exposure to Azure AI Services",
                  "Explored MLOps fundamentals and model lifecycle practices",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
