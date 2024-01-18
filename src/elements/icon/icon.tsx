interface IconProps {
  readonly weight?: "solid" | "regular" | "light" | "duotone" | "thin";
  readonly icon: string;
}

export function Icon({ weight = "solid", icon }: IconProps) {
  return <i className={`fa-${weight} fa-${icon}`} />;
}
