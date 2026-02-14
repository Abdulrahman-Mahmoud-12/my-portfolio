"use client"

import { useEffect, useState, useRef } from "react"

const metrics = [
  { label: "AI Projects", value: 3, suffix: "+" },
  { label: "AI Trainings", value: 3, suffix: "+" },
  { label: "Years in AI Learning", value: 2, suffix: "+" },
  { label: "GPA", value: 3.57, suffix: "", isDecimal: true },
]

function AnimatedCounter({
  target,
  suffix,
  isDecimal,
}: {
  target: number
  suffix: string
  isDecimal?: boolean
}) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 1500
          const steps = 40
          const stepTime = duration / steps
          let current = 0

          const timer = setInterval(() => {
            current += 1
            if (current >= steps) {
              setCount(target)
              clearInterval(timer)
            } else {
              const progress = current / steps
              const eased = 1 - Math.pow(1 - progress, 3)
              setCount(isDecimal ? parseFloat((eased * target).toFixed(2)) : Math.round(eased * target))
            }
          }, stepTime)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, hasAnimated, isDecimal])

  return (
    <div ref={ref} className="text-4xl font-bold text-foreground md:text-5xl">
      {isDecimal ? count.toFixed(2) : count}
      <span className="text-primary">{suffix}</span>
    </div>
  )
}

export default function MetricsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 rounded-xl border border-border bg-card p-8 md:grid-cols-4 md:p-12">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <AnimatedCounter
                target={metric.value}
                suffix={metric.suffix}
                isDecimal={metric.isDecimal}
              />
              <p className="mt-2 text-sm text-muted-foreground">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
