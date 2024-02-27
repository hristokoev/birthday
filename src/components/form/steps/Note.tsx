import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import { formData, formDataAdd, formNext, formJump } from "../store";
import FormButtons from "../FormButtons";

interface NameSurnameProps {
	index: number;
}

export default function Note({ index }: NameSurnameProps) {

	const [loading, setLoading] = useState(false);

	const { register, handleSubmit, setValue, formState: { errors } } = useForm({
		defaultValues: {
			note: formData.value?.note || ""
		}
	});

	const onSubmit = async (data: any) => {

		setLoading(true);

		// Save to atom (is it needed?)
		formDataAdd("note", data.note);

		const postData = async () => {
			try {
				// Send the form data
				const response = await fetch("https://api.web3forms.com/submit", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						"subject": "Dotazník na oslavu",
						"from_name": "petr50.cz",
						"Jméno": formData.value?.firstName,
						"Příjmení": formData.value?.lastName,
						"Přijde": formData.value?.coming == "true" ? "Ano" : "Ne",
						"Vegan": formData.value?.vegan == "true" ? "Ano" : "Ne",
						"Přespí": formData.value?.sleepover == "true" ? "Ano" : "Ne",
						"Pije alkohol": formData.value?.alcohol == "true" ? "Ano" : "Ne",
						"Potřebuje zaparkovat": formData.value?.parking == "true" ? "Ano" : "Ne",
						"Poznámka": data.note,
						"access_key": "2d36914d-3a66-410c-b148-ff576994a715"
					}),
				});

				if (!response.ok) {
					formJump(8);
				} else {
					formNext(index);
				}

				// Assuming the server responds with JSON
				const responseData = await response.json();
				return responseData;
			} catch (error) {
				formJump(8);
				throw error;
			}
		}

		postData().finally(() => {
			setLoading(false);
		});
		
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
			<FormButtons index={index} loading={loading} />
		</form>
	)
}