import SectionHeading from "./section-heading"

const skillCategories = [
  {
    title: "Programming",
    items: ["Python (Advanced)", "C++", "SQL"],
  },
  {
    title: "Machine Learning & AI",
    items: [
      "Supervised & Unsupervised Learning",
      "Deep Learning: CNN, RNN",
      "YOLO Object Detection & Instance Segmentation",
      "Model Evaluation, Optimization & Hyperparameter Tuning",
      "Feature Engineering & Dimensionality Reduction",
      "Transfer Learning & Fine-tuning Pretrained Models",
    ],
  },
  {
    title: "Computer Vision",
    items: [
      "Image Classification",
      "Object Detection",
      "Segmentation",
      "OpenCV / PIL / scikit-image",
    ],
  },
  {
    title: "Data & Analysis",
    items: [
      "NumPy, Pandas, Matplotlib, Seaborn",
      "Data Cleaning",
      "EDA & Visualization",
      "Statistical Modeling",
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Jupyter Notebook",
      "Google Colab",
      "VS Code",
      "Git & GitHub",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Analytical Thinking",
      "Problem Solving",
      "Team Collaboration",
      "Fast Learning",
      "Adaptability",
      "Research & Technical Writing",
    ],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Skills"
          subtitle="A structured overview of my technical and professional competencies."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="card-hover rounded-xl border border-border bg-card p-6"
            >
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
