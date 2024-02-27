import { useForm } from "react-hook-form";
import { useEffect } from "react"
import { formData, formDataAdd, formNext } from "../store";
import FormButtons from "../FormButtons";

interface NameSurnameProps {
	index: number;
}

export default function Note({ index }: NameSurnameProps) {

	const { register, handleSubmit, setValue, formState: { errors } } = useForm({
		defaultValues: {
			note: formData.value?.note || ""
		}
	});

	const onSubmit = async (data: any) => {
		// Save to atom (is it needed?)
		formDataAdd("note", data.note);

		// Send the form data
		await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				"subject": "Přihláška na oslavu",
				"from_name": "petr50.cz",
				"Jméno": formData.value?.firstName,
				"Příjmení": formData.value?.lastName,
				"Přijde": formData.value?.coming == "true" ? "Ano" : "Ne",
				"Vegan": formData.value?.vegan == "true" ? "Ano" : "Ne",
				"Přespí": formData.value?.sleepover == "true" ? "Ano" : "Ne",
				"Pije alkohol": formData.value?.alcohol == "true" ? "Ano" : "Ne",
				"Potřebuje zaparkovat": formData.value?.parking == "true" ? "Ano" : "Ne",
				"Poznámka": data.note,
				"access_key": "baf4a06a-f1ae-446d-b563-cbb06e8b7486"
			}),
		});

		// Go to next step
		formNext(index)
	}

	useEffect(() => {
		setValue("note", formData.value?.note || "");
	}, [formData.value?.note]);

	return (
		<form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
			<div className="flex flex-col gap-2">
				<label htmlFor="" className="text-lg uppercase font-bold">Poznámka:</label>
				<textarea
					className="px-6 py-3 text-black text-lg placeholder-slate-500 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
					placeholder="Poznámka"
					{...register("note", {
						minLength: {
							value: 10,
							message: "Zadej prosím platnou poznámku o délce alespoň 10 znaků."
						},
					})}
				/>
				{errors.note && <p className="text-sm">{errors.note.message}</p>}
			</div>
			<FormButtons index={index} />
		</form>
	)
}