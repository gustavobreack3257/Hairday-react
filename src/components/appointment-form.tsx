import { DropdownSelect } from "./dropdown-select/dropdown-select";
export function AppointmentForm() {
  return (
    <div>
      <form>
        <div className="flex">
          <DropdownSelect labelTitle="Data" icon />
        </div>
      </form>
    </div>
  );
}
