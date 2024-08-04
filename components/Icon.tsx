// components/Icon.tsx
import React from "react";
import IconTypes from "lucide-react";

interface IconProps {
  icon: React.ComponentType<any>;
  size?: number;
  color?: string;
  className?: any;
}

const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  size = 24,
  color = "currentColor",
}) => {
  return <IconComponent size={size} color={color} />;
};

export default Icon;
