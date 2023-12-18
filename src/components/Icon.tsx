/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { HTMLAttributes } from 'react'
import { IconName, IconSet } from 'constant'

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  name: IconName
  size?: number
  color?: string
  clickable?: boolean
}

export const Icon = ({ name, size, color, clickable, ...props }: Props) => {
  return (
    <svg
      height={size ?? 24}
      viewBox={IconSet[name].viewBox}
      fill={color && `var(${color})`}
      xmlns="http://www.w3.org/2000/svg"
      css={{ cursor: clickable ? 'pointer' : 'default' }}
      {...props}
    >
      <path d={IconSet[name].path} />
    </svg>
  )
}
