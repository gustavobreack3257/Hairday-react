import { useState } from "react";
import { DropdownSelect } from "./dropdown-select/dropdown-select";
import { TimeSlotButton } from "./time-slot-button";
import { Typography } from "./typography";
export function AppointmentForm() {
  const [select, setSelect] = useState(false);

  function handleSelectTime() {
    setSelect(!select);
  }
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

          <section className="flex flex-col gap-2">
            <Typography as="h2" variant="label-title">
              Horários
            </Typography>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-">
                <Typography as="h2" variant="label-description">
                  Manhã
                </Typography>
                <TimeSlotButton
                  time="9:00"
                  selected={select}
                  onClick={handleSelectTime}
                />
              </div>

              <div>
                <Typography as="h2" variant="label-description">
                  Tarde
                </Typography>
                <TimeSlotButton
                  time="13:00"
                  selected={select}
                  onClick={handleSelectTime}
                />
              </div>

              <div>
                <Typography as="h2" variant="label-description">
                  Noite
                </Typography>
                <TimeSlotButton
                  time="18:00"
                  selected={select}
                  onClick={handleSelectTime}
                />
              </div>
            </div>
          </section>

          <DropdownSelect label="Cliente" date="Helena Souza" icon="client" />
        </div>
      </form>
    </div>
  );
}
