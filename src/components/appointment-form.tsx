import { DropdownSelect } from "./dropdown-select/dropdown-select";
import { Typography } from "./typography";
export function AppointmentForm() {
  return (
    <div>
      <form>
        <div className="flex flex-col gap-8">
          <DropdownSelect
            label="Data"
            date="03/10/2026"
            icon="calendar"
            caretIcon
          />

          <Typography variant="label-title">Horários</Typography>

          <DropdownSelect label="Cliente" date="Helena Souza" icon="client" />
        </div>
      </form>
    </div>
  );
}
