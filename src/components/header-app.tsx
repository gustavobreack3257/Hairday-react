import { Typography } from "./typography";

interface HeaderAppProps {
  title: string;
  description: string;
}
export function HeaderApp({ title, description }: HeaderAppProps) {
  return (
    <header className="flex flex-col gap-1">
      <Typography>{title}</Typography>
      <Typography as="strong" variant="header-description">
        {description}
      </Typography>
    </header>
  );
}
