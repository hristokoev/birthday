import { useForm } from "react-hook-form";
import { useState, useEffect } from "react"
import { formData, formDataAdd, formJump, formNext } from "../store";
import FormButtons from "../FormButtons";

interface BooleanProps {
	index: number;
	prop: "coming" | "vegan" | "sleepover" | "alcohol" | "parking";
	text: string;
}

export default function Boolean({ index, prop, text }: BooleanProps) {

	const [boolean, setBoolean] = useState("")

	const { register, handleSubmit, setValue, formState: { errors } } = useForm({
		defaultValues: {
			[prop]: formData.value?.[prop] || ""
		}
	});

	const onSubmit = (data: any) => {
		formDataAdd(prop, data[prop])
		if (prop == "coming" && data[prop] == "false") {
			formJump(9)
		} else {
			formNext(index)
		}
	}

	const handleChange = (e: any) => {
		setBoolean(e.target.value)
	}

	useEffect(() => {
		setBoolean(formData.value?.[prop] || "");
		setValue(prop, formData.value?.[prop] || "");
	}, [formData.value, prop]);

	return (
		<form className="flex flex-col gap-4 select-none" onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col">
				<div className="mb-2 text-lg uppercase font-bold">{text}</div>
				<div className="flex gap-2">
					<div className="grid grid-cols-2 gap-8 select-none">
						<div className="flex items-center">
							<div className={`rounded-full ${boolean == "true" ? "bg-gradient-to-br from-[#FF965A] to-[#FF4343]" : "bg-white/25 hover:bg-white/50"}`}>
								<label htmlFor={`boolTrue_${prop}`} className={`block p-4 font-medium cursor-pointer transition-all duration-150`}>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-6 h-6 text-white`}>
										<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
									</svg>
								</label>
								<input
									id={`boolTrue_${prop}`}
									type="radio"
									{...register(prop, { required: "Vyber prosím možnost." })}
									value="true"
									className="hidden"
									onClick={handleChange}
								/>
							</div>
							<span className="ml-2">Ano</span>
						</div>
						<div className="flex items-center">
							<div className={`rounded-full ${boolean == "false" ? "bg-gradient-to-br from-[#FF965A] to-[#FF4343]" : "bg-white/25 hover:bg-white/50"}`}>
								<label htmlFor={`boolFalse_${prop}`} className={`block p-4 font-medium cursor-pointer transition-all duration-150`}>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-6 h-6 text-white`}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
									</svg>
								</label>
								<input
									id={`boolFalse_${prop}`}
									type="radio"
									{...register(prop, { required: "Vyber prosím možnost." })}
									value="false"
									className="hidden"
									onClick={handleChange}
								/>
							</div>
							<span className="ml-2">Ne</span>
						</div>
					</div>
				</div>
				{errors[prop] && <p className="mt-4 text-sm">{errors?.[prop]?.message}</p>}
			</div>
			<FormButtons index={index} loading={false} />
		</form>
	)
}