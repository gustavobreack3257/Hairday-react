import { AppointmentForm } from "../components/appointment-form";
import { HeaderApp } from "../components/header-app";

export function Home() {
  return (
    <div className="grid grid-cols-[1fr_2fr] h-full">
      <article className="flex flex-col h-full p-20 gap-6 bg-gray-700">
        <HeaderApp
          title="Agende um atendimento"
          description="Selecione data, horário e informe o nome do cliente para criar o
          agendamento"
        />
        <AppointmentForm />
      </article>

      <div className="flex flex-col bg-amber-600"></div>
    </div>
  );
}
