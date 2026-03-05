import { Typography } from "./typography";

interface HeaderAppProps {
  title: string;
  description: string;
}
export function HeaderApp({ title, description }: HeaderAppProps) {
  return (
    <header className="flex flex-col gap-1 bg-amber-300">
      <Typography as="h1">{title}</Typography>
      <Typography as="span" variant="header-description">
        {description}
      </Typography>
    </header>
  );
}
