import { useEffect } from "react";
import { formData, formDataAdd, formJump } from "../../store";

export default function NotComing() {

	useEffect(() => {
		formDataAdd("coming", "");

		const postData = async () => {
			await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					"subject": "Dotazník na oslavu",
					"from_name": "petr50.cz",
					"Jméno": formData.value?.firstName,
					"Příjmení": formData.value?.lastName,
					"Přijde": "Ne",
					"access_key": "baf4a06a-f1ae-446d-b563-cbb06e8b7486"
				}),
			});
		}

		postData().catch((error) => {
			formJump(8);
		});

	}, []);

	return (
		<div className="flex flex-col items-center justify-center text-center gap-4 rounded-2xl">
			<div className="text-6xl font-extrabold text-white">😢</div>
			<div className="text-xl font-bold text-white">Ach jo, to je škoda, že nepřijdeš. Snad příště!</div>
			<button className="min-w-56 px-6 py-3 flex items-center text-lg font-extrabold uppercase rounded-2xl bg-[linear-gradient(to_right,#FF965A,#FF4343,#FF4343,#FF965A)] bg-[length:200%_auto] hover:animate-gradient focus:outline-none focus:ring-2 focus:ring-indigo-500 group/button" onClick={() => formJump(0)}>
				<span>Vyplnit znovu</span>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-auto w-6 h-6 group-hover/button:translate-x-2 transition-all duration-300">
					<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
				</svg>
			</button>
		</div>
	);
}