"use client"

import { useState, useEffect, useCallback } from "react"

const titles = [
  "AI Systems Engineer",
  "Machine Learning Engineer",
  "Computer Vision Engineer",
  "Deep Learning Researcher",
  "Data Scientist",
]

export default function TypingAnimation() {
  const [displayText, setDisplayText] = useState("")
  const [titleIndex, setTitleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const tick = useCallback(() => {
    const currentTitle = titles[titleIndex]

    if (!isDeleting) {
      setDisplayText(currentTitle.substring(0, displayText.length + 1))
      if (displayText.length + 1 === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 2000)
        return
      }
    } else {
      setDisplayText(currentTitle.substring(0, displayText.length - 1))
      if (displayText.length - 1 === 0) {
        setIsDeleting(false)
        setTitleIndex((prev) => (prev + 1) % titles.length)
        return
      }
    }
  }, [displayText, titleIndex, isDeleting])

  useEffect(() => {
    const speed = isDeleting ? 40 : 80
    const timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [tick, isDeleting])

  return (
    <span className="typing-cursor font-mono text-primary">
      {displayText}
    </span>
  )
}
