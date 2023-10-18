/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { HTMLAttributes } from 'react'
import { colorsKeyOfType, colors } from 'constant'

interface Props extends HTMLAttributes<HTMLSpanElement> {
  typography?: 'h1' | 'h2' | 'h3' | 'p1' | 'p2' | 'p3' | 'p4'
  color?: colorsKeyOfType
  clickable?: boolean
}

export const Txt = ({ typography = 'p3', color = 'white', clickable = false, ...props }: Props) => {
  return (
    <span
      css={{
        margin: 0,
        padding: 0,
        color: colors[color],
        lineHeight: 1.6,
        cursor: clickable ? 'pointer' : 'auto',
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
