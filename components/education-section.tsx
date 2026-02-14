import SectionHeading from "./section-heading"

export default function EducationSection() {
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Education" />

        <div className="max-w-3xl">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-foreground">
              Bachelor of Electrical & Electronic Engineering
            </h3>
            <p className="mt-1 text-sm font-medium text-foreground/80">
              Major: Computer Science & Engineering
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Menofia University
            </p>

            <div className="mt-4 flex items-center gap-2">
              <span className="rounded-md bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                GPA: 3.57
              </span>
            </div>

            <div className="mt-5">
              <h4 className="mb-3 text-sm font-medium text-foreground/80">
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Artificial Intelligence",
                  "Data Structures & Algorithms",
                  "Computer Vision",
                  "Operating Systems",
                  "Software Engineering",
                  "Databases",
                ].map((course) => (
                  <span
                    key={course}
                    className="rounded-md border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
