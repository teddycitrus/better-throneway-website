'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const REVERENT_EASE = [0.16, 1, 0.3, 1] as const

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 44 },
  down: { x: 0, y: -44 },
  left: { x: 56, y: 0 },
  right: { x: -56, y: 0 },
  none: { x: 0, y: 0 },
}

interface RevealProps {
  children: ReactNode
  className?: string
  direction?: Direction
  delay?: number
  duration?: number
  /** Adds a slow blur-in for a dreamlike, reverent entrance */
  blur?: boolean
  once?: boolean
}

/**
 * Slow, reverent scroll reveal used across the site for a cohesive
 * cinematic cadence. Honours prefers-reduced-motion via Framer's defaults.
 */
export default function Reveal({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 1.1,
  blur = false,
  once = true,
}: RevealProps) {
  const { x, y } = offset[direction]

  const variants: Variants = {
    hidden: { opacity: 0, x, y, filter: blur ? 'blur(14px)' : 'blur(0px)' },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration, delay, ease: REVERENT_EASE },
    },
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.25 }}
    >
      {children}
    </motion.div>
  )
}

export { REVERENT_EASE }
