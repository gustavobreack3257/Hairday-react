import { CaretDownIcon, CalendarBlankIcon } from "@phosphor-icons/react";
import { Typography } from "../typography";

type DropdownSelectProps = {
  labelTitle: string;
  icon?: boolean;
};
export function DropdownSelect({
  icon = false,
  labelTitle,
}: DropdownSelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <Typography as="label" variant="label-title">
        {labelTitle}
      </Typography>
      <button
        type="button"
        className="flex h-12 min-w-84 w-full justify-between items-baseline p-3 border-gray-500 border-2 rounded-lg"
      >
        <div className="flex items-center gap-2">
          <CalendarBlankIcon className="text-yellow" />
          <Typography as="strong" variant="data-text">
            03/3/2026
          </Typography>
        </div>
        {icon && <CaretDownIcon className="text-gray-300" />}
      </button>
    </div>
  );
}
