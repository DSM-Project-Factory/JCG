/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { HTMLAttributes } from 'react'
import { IconName, IconSet, colors, colorsKeyOfType } from 'constant'

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  name: IconName
  size?: number
  color?: colorsKeyOfType
  clickable?: boolean
}

export const Icon = ({ name, size, color, clickable, ...props }: Props) => {
  return (
    <svg
      height={size ?? 24}
      viewBox={IconSet[name].viewBox}
      fill={color && colors[color]}
      xmlns="http://www.w3.org/2000/svg"
      css={{ cursor: clickable ? 'pointer' : 'default' }}
      {...props}
    >
      <path d={IconSet[name].path} />
    </svg>
  )
}
