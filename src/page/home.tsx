import { AppointmentForm } from "../components/appointment-form";
import { Typography } from "../components/typography";

export function Home() {
  return (
    <div className="grid grid-cols-[1fr_2fr] h-full bg-blue-600">
      <article className="flex flex-col h-full p-20 gap-6 bg-gray-700">
        <header className="flex flex-col gap-1">
          <Typography>Agende um atendimento</Typography>
          <Typography as="strong" variant="header-description">
            Selecione data, horário e informe o nome do cliente para criar o
            agendamento
          </Typography>
        </header>

        <AppointmentForm />
      </article>
      <div className="flex flex-col bg-amber-600"></div>
    </div>
  );
}
