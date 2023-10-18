import { HTMLAttributes } from 'react'
import { IconName, IconSet, colors, colorsKeyOfType } from 'constant'

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  name: IconName
  size?: number
  color?: colorsKeyOfType
}

export const Icon = ({ name, size, color, ...props }: Props) => {
  return (
    <svg
      height={size ?? 24}
      viewBox={IconSet[name].viewBox}
      fill={color && colors[color]}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d={IconSet[name].path} />
    </svg>
  )
}
