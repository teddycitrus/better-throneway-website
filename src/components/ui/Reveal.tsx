'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const EDITORIAL_EASE = [0.22, 1, 0.36, 1] as const

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 26 },
  down: { x: 0, y: -26 },
  left: { x: 36, y: 0 },
  right: { x: -36, y: 0 },
  none: { x: 0, y: 0 },
}

interface RevealProps {
  children: ReactNode
  className?: string
  direction?: Direction
  delay?: number
  duration?: number
  once?: boolean
}

/**
 * Restrained editorial reveal — a short, crisp slide-and-fade used
 * site-wide for a consistent magazine cadence. No blur, no drama.
 */
export default function Reveal({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  once = true,
}: RevealProps) {
  const { x, y } = offset[direction]

  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: EDITORIAL_EASE },
    },
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Editorial image reveal — the picture settles in with a soft fade and
 * a slight scale-down. Uses the same proven in-view mechanism as Reveal
 * (single observer, no clip) so it can never leave the image hidden.
 * Wrap it around a fixed-size box (the child defines its own height).
 */
export function ImageReveal({
  children,
  className,
  delay = 0,
  once = true,
}: {
  children: ReactNode
  className?: string
  delay?: number
  once?: boolean
}) {
  const variants: Variants = {
    hidden: { opacity: 0, scale: 1.06 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.1, delay, ease: EDITORIAL_EASE },
    },
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
    >
      {children}
    </motion.div>
  )
}

export { EDITORIAL_EASE }
