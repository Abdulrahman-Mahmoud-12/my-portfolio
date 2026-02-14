import SectionHeading from "./section-heading"

const projects = [
  {
    title: "MRI Brain Tumor Detection System",
    description:
      "AI-powered computer vision system detecting brain tumors from MRI images using YOLOv8 and deployed with an interactive Streamlit interface.",
    technologies: ["Python", "YOLOv8", "OpenCV", "Streamlit"],
    highlights: [
      "Tumor region detection",
      "Tumor type identification",
      "Real-time bounding box visualization",
      "Interactive graphical interface",
    ],
    github: "https://github.com/Abdulrahman-Mahmoud-12/MRI-Brain-Tumor-Detection",
  },
  {
    title: "Car Showroom Management & Sales Analysis System",
    description:
      "Python-based data-driven showroom management and analytics system using structured JSON storage and Pandas-based analysis.",
    technologies: ["Python", "Pandas", "JSON"],
    highlights: [
      "Inventory tracking",
      "Customer data management",
      "Sales analysis logic",
      "Data processing pipeline",
    ],
    github: "https://github.com/Abdulrahman-Mahmoud-12/car-showroom-system",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Projects"
          subtitle="Selected projects demonstrating applied AI and data engineering capabilities."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="card-hover flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mb-6 flex-1">
                <h4 className="mb-2 text-sm font-medium text-foreground/80">
                  Key Highlights
                </h4>
                <ul className="space-y-1.5">
                  {project.highlights.map((item) => (
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

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
