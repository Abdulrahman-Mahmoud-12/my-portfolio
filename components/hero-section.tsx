import TypingAnimation from "./typing-animation"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="ai-grid-bg relative flex min-h-screen items-center" id="hero">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -left-40 bottom-1/4 h-[400px] w-[400px] rounded-full bg-primary/3 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start gap-10 px-6 pt-24">
        {/* Profile image at top */}
        <div className="flex shrink-0 items-center justify-start">
          <div className="profile-glow relative h-56 w-56 overflow-hidden rounded-full border-2 border-primary/30 md:h-72 md:w-72 lg:h-80 lg:w-80">
            <Image
              src="/images/profile.jpg"
              alt="Abdelrahman Mahmoud - AI and Machine Learning Engineer"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Name - smaller, blue accent */}
        <p className="text-xl font-semibold tracking-wide text-primary md:text-2xl">
          Abdelrahman Mahmoud
        </p>

        {/* Quote - large bold headline */}
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          <span className="block">{"Intelligence isn't coded,"}</span>
          <span className="block">{"it's learned."}</span>
        </h1>

        <div className="h-10 text-xl md:text-2xl">
          <TypingAnimation />
        </div>

        <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
          AI-focused Computer Science and Engineering student specializing in
          Machine Learning, Computer Vision, and intelligent system
          development. Passionate about transforming data into scalable,
          real-world AI solutions.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href="/Abdelrahman-Mahmoud_CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
