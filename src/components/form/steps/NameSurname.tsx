import { useForm } from "react-hook-form";
import { useState, useEffect } from "react"
import { formData, formDataAdd, formNext } from "../store";
import FormButtons from "../FormButtons";

interface NameSurnameProps {
	index: number;
}

export default function NameSurname({ index }: NameSurnameProps) {

	const { register, handleSubmit, setValue, formState: { errors } } = useForm({
		defaultValues: {
			firstName: formData.value?.firstName || "",
			lastName: formData.value?.lastName || "",
		}
	});

	const onSubmit = (data: any) => {
		formDataAdd("firstName", data.firstName)
		formDataAdd("lastName", data.lastName)
		formNext(index)
	}

	useEffect(() => {
		setValue("firstName", formData.value?.firstName || "");
		setValue("lastName", formData.value?.lastName || "");
	}, [formData.value?.firstName, formData.value?.lastName]);

	return (
		<form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
			<div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
				<div className="flex flex-col sm:gap-2">
					<label htmlFor="" className="sm:text-lg uppercase font-bold">Jméno:</label>
					<input
						type="text"
						className="px-6 py-3 text-black text-lg placeholder-slate-500 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
						placeholder="Jméno"
						{...register("firstName", {
							required: "Napiš prosím své křestní jméno.",
							minLength: {
								value: 2,
								message: "Zadej prosím platné křestní jméno."
							},
						})}
					/>
					{errors.firstName &&	<p className="text-sm">{errors.firstName.message}</p>}
				</div>
				<div className="flex flex-col sm:gap-2">
					<label htmlFor="" className="sm:text-lg uppercase font-bold">Příjmení:</label>
					<input
						type="text"
						className="px-6 py-3 text-black text-lg placeholder-slate-500 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
						placeholder="Přijmení"
						{...register("lastName", {
							required: "Napiš prosím své příjmení.",
							minLength: {
								value: 2,
								message: "Zadej prosím platné příjmení."
							},
						})} />
					{errors.lastName &&	<p className="text-sm">{errors.lastName.message}</p>}
				</div>
			</div>
			<FormButtons index={index} />
		</form>
	)
}