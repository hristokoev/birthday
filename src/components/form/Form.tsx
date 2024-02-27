import { formIndex, formData } from "./store";
import { useStore } from "@nanostores/react";

import Boolean from "./steps/Boolean";
import NameSurname from "./steps/NameSurname";
import Note from "./steps/Note";
import Success from "./steps/messages/Success";
import Error from "./steps/messages/Error";
import NotComing from "./steps/messages/NotComing";

function Form() {

	const index = useStore(formIndex)

	const StepDisplay = [
		<NameSurname index={0} />,
		<Boolean index={1} prop="coming" text="Přijdeš?" />,
		<Boolean index={2} prop="vegan" text="Jsi vegan?" />,
		<Boolean index={3} prop="sleepover" text="Přespíš?" />,
		<Boolean index={4} prop="alcohol" text="Piješ alkohol?" />,
		<Boolean index={5} prop="parking" text="Potřebuješ zaparkovat?" />,
		<Note index={6} />,
		<Success />,
		<Error />,
		<NotComing />,
	]

	return (
		<div className="space-y-4 sm:w-2/3">
			{StepDisplay[index]}
		</div>
	)

}

export default Form;