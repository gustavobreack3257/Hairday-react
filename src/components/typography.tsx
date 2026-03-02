import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const typographyVariants = tv({
  base: "text-gray-100",
  variants: {
    variant: {
      "header-title": "title-lg font-bold",
      "header-description": "text-Sm text-gray-300 font-normal",
      "section-title": "",
      "section-description": "",
    },
  },
  defaultVariants: {
    variant: "header-title",
  },
});

interface TypographyProps extends VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
}

export function Typography({
  as: Component = "h1",
  className,
  children,
  variant,
  ...props
}: TypographyProps) {
  return (
    <Component
      className={typographyVariants({ variant, className })}
      {...props}
    >
      {children}
    </Component>
  );
}
