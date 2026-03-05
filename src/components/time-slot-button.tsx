import { Typography } from "./typography";
import type React from "react";

type TimeSlotSelectProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  time: string;
  selected: boolean;
};
export function TimeSlotButton({
  time,
  selected = false,
  ...props
}: TimeSlotSelectProps) {
  return (
    <button
      type="button"
      className={`h-10 w-20 border border-gray-500 bg-gray-600 rounded-lg hover:bg-gray-500 active:border-yellow ${selected && "border-yellow"}`}
      {...props}
    >
      {selected ? (
        <Typography as="p" variant="data-text" className="text-yellow">
          {time}
        </Typography>
      ) : (
        <Typography as="p" variant="data-text">
          {time}
        </Typography>
      )}
    </button>
  );
}
