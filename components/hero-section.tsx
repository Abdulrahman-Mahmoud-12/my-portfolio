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

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6 pt-24 lg:flex-row lg:items-center lg:gap-16">
        {/* Left content */}
        <div className="flex-1 text-left">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Abdelrahman Mahmoud
          </h1>

          <p className="mb-6 text-xl font-light italic text-muted-foreground md:text-2xl lg:text-3xl">
            {'"Intelligence isn\'t coded, it\'s learned."'}
          </p>

          <div className="mb-6 h-10 text-xl md:text-2xl">
            <TypingAnimation />
          </div>

          <p className="mb-10 max-w-xl text-base leading-relaxed text-muted-foreground">
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

        {/* Right: Profile image */}
        <div className="flex shrink-0 items-center justify-center">
          <div className="profile-glow relative h-64 w-64 overflow-hidden rounded-full border-2 border-primary/30 md:h-80 md:w-80 lg:h-96 lg:w-96">
            <Image
              src="/images/profile.jpg"
              alt="Abdelrahman Mahmoud - AI and Machine Learning Engineer"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
