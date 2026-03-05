import {
  CaretDownIcon,
  CalendarBlankIcon,
  UserSquareIcon,
} from "@phosphor-icons/react";
import { Typography } from "../typography";
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "flex justify-between items-center p-3 border-gray-500 border-2 rounded-lg",
  variants: {
    size: {
      small: "max-w-xs",
      normal: "w-full",
    },
    icon: {
      calendar: "",
      client: "",
    },
  },
  defaultVariants: {
    size: "normal",
    icon: "calendar",
  },
});
type DropdownSelectProps = {
  label: string;
  caretIcon?: boolean;
  date?: string;
} & VariantProps<typeof buttonVariants>;
export function DropdownSelect({
  size,
  icon,
  label,
  caretIcon,
  date,
  ...props
}: DropdownSelectProps) {
  const iconStyle = "text-yellow h-4 w-4";
  return (
    <div className="flex flex-col gap-2">
      <Typography as="label" variant="label-title">
        {label}
      </Typography>
      <button
        type="button"
        className={buttonVariants({ size, icon })}
        {...props}
      >
        <div className="flex items-center gap-2">
          {icon === "calendar" && <CalendarBlankIcon className={iconStyle} />}
          {icon === "client" && <UserSquareIcon className={iconStyle} />}
          <Typography as="strong" variant="data-text">
            {date}
          </Typography>
        </div>

        {caretIcon && <CaretDownIcon className="text-gray-300 h-4 w-4" />}
      </button>
    </div>
  );
}
