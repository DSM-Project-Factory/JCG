import { HTMLAttributes } from 'react';
import { IconName, IconSet } from '../constant/icons';
import colors from '../constant/colors';

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  name: IconName;
  size?: number;
  color?: string;
}

const Icon = ({ name, size, color, ...props }: Props) => {
  return (
    <svg
      height={size ?? 24}
      viewBox={IconSet[name].viewBox}
      fill={color && colors[color]}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d={IconSet[name].path} />
    </svg>
  );
};

export default Icon;
