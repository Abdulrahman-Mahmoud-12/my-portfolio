import SectionHeading from "./section-heading"

const certifications = [
  {
    title: "Generative AI Training",
    issuer: "NVIDIA Deep Learning Institute",
  },
  {
    title: "Complete Data Science, ML, DL & NLP Bootcamp",
    issuer: "Udemy -- Krish Naik",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI -- Andrew Ng.",
  },
  {
    title: "Python Programming",
    issuer: "FreeCodeCamp",
  },
]

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Certifications" />

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="card-hover flex items-start gap-4 rounded-xl border border-border bg-card p-5"
            >
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <svg
                  className="h-5 w-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {cert.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
