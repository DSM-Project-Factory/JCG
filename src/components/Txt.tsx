/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { HTMLMotionProps, motion } from 'framer-motion'

interface Props extends HTMLMotionProps<'span'> {
  typography?: 'h1' | 'h2' | 'h3' | 'p1' | 'p2' | 'p3' | 'p4'
  color?: string
  clickable?: boolean
  lineHeight?: number
}

export const Txt = ({ typography = 'p3', color = '--white', clickable = false, lineHeight = 1.6, ...props }: Props) => {
  return (
    <motion.span
      css={{
        margin: 0,
        padding: 0,
        color: `var(${color})`,
        lineHeight: lineHeight,
        cursor: clickable ? 'pointer' : 'auto',
        pointerEvents: 'none',
        ...TYPOGRAPHY[typography],
      }}
      {...props}
    />
  )
}

const TYPOGRAPHY = {
  h1: {
    fontSize: '40px',
    fontWeight: 700,
  },
  h2: {
    fontSize: '32px',
    fontWeight: 600,
  },
  h3: {
    fontSize: '20px',
    fontWeight: 600,
  },
  p1: {
    fontSize: '24px',
    fontWeight: 500,
  },
  p2: {
    fontSize: '16px',
    fontWeight: 600,
  },
  p3: {
    fontSize: '16px',
    fontWeight: 400,
  },
  p4: {
    fontSize: '14px',
    fontWeight: 400,
  },
}
