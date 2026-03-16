import SectionHeading from "./section-heading"
import Image from "next/image"

const services = [
  {
    title: "AI Model Development",
    description:
      "Build machine learning and deep learning models for prediction, classification, and intelligent decision-making.",
    includes: [
      "Classification models",
      "Regression models",
      "Deep learning pipelines",
      "Model fine-tuning",
      "Evaluation & validation",
    ],
    image: "/images/service-ai-model.png",
  },
  {
    title: "Computer Vision Solutions",
    description:
      "Develop intelligent systems that can see, analyze, and interpret visual data for automation and insights.",
    includes: [
      "Image classification",
      "Object detection",
      "Image segmentation",
      "Visual inspection",
      "Real-time processing",
    ],
    image: "/images/service-cv.png",
  },
  {
    title: "Data Analysis & Predictive Modeling",
    description:
      "Turn raw data into insights and predictive systems that support smarter, data-driven decisions.",
    includes: [
      "Data cleaning",
      "Exploratory analysis (EDA)",
      "Predictive modeling",
      "Classification & regression",
      "Model validation",
    ],
    image: "/images/service-data.png",
  },
  {
    title: "Custom AI Research Implementation",
    description:
      "Implement and adapt research-based AI models from papers and repositories for technical experimentation.",
    includes: [
      "Paper implementation",
      "Repository customization",
      "Benchmark testing",
      "Training setup",
      "Proof-of-concept builds",
    ],
    image: "/images/service-research.png",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Services"
          subtitle="AI and Machine Learning services tailored to solve real-world problems."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-hover flex flex-col overflow-hidden rounded-xl border border-border bg-card"
            >
              {/* Service Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <div className="flex-1">
                  <h4 className="mb-2 text-sm font-medium text-foreground/80">
                    Includes
                  </h4>
                  <ul className="space-y-1.5">
                    {service.includes.map((item) => (
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
          ))}
        </div>
      </div>
    </section>
  )
}
