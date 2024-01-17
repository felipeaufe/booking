interface IconProps {
  style?: 'solid' | 'regular' | 'light' | 'duotone' | 'thin';
  icon: string;
}

export function Icon({ style = 'solid', icon }: IconProps) {
  return <i className={`fa-${style} fa-${icon}`}></i>;
}
