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

	const onSubmit = (data: any) => {
		formDataAdd("note", data.note)
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
						required: "Napiš prosím své křestní jméno.",
						minLength: {
							value: 2,
							message: "Zadej prosím platné křestní jméno."
						},
						pattern: {
							value: /^[A-Za-z]+$/,
							message: "Zadej prosím platné křestní jméno."
						},
					})}
				/>
				{errors.note && <p className="text-sm">{errors.note.message}</p>}
			</div>
			<FormButtons index={index} />
		</form>
	)
}