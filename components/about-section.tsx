import SectionHeading from "./section-heading"

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="About Me" />

        <div className="max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Since the early rise of Artificial Intelligence into our daily
            lives, from intelligent machines in factories and autonomous robots
            to transformative applications like ChatGPT, I have always been
            driven by one central question:
          </p>

          <div className="space-y-2 border-l-2 border-primary/40 pl-6 italic text-foreground/80">
            <p>How does this actually work?</p>
            <p>How can a machine understand different human languages?</p>
            <p>
              How can a robot perceive its environment and make decisions?
            </p>
            <p>
              How can mathematical equations evolve into intelligence capable of
              solving real-world problems?
            </p>
          </div>

          <p>
            What began as curiosity gradually transformed into a deep passion
            for research and engineering.
          </p>

          <p>
            As I pursued my studies in Computer Science and Engineering, I
            realized that Artificial Intelligence is not simply about training
            models, it is about designing systems that can perceive, reason,
            learn, and adapt. I became deeply interested in the foundations
            behind Machine Learning, neural networks, optimization, and
            decision-making systems.
          </p>

          <p>
            This passion pushed me beyond academic requirements. I continuously
            experiment with building real AI systems, from medical image
            detection models to data-driven analytics platforms, focusing not
            only on model accuracy but also on system architecture, scalability,
            and practical deployment considerations.
          </p>

          <p className="font-medium text-foreground">
            Today, my goal is clear: To design intelligent AI systems that move
            beyond experimentation into production-ready, impactful solutions.
          </p>

          <p>
            For me, Artificial Intelligence is not just a specialization. It is
            a continuous journey of curiosity, research, and innovation.
          </p>
        </div>
      </div>
    </section>
  )
}
