import { formJump } from "../../store";

export default function Error() {
	return (
		<div className="flex flex-col items-center justify-center text-center gap-4 rounded-2xl">
			<div className="text-6xl font-extrabold text-white">😢</div>
			<div className="text-xl font-bold text-white">Něco se pokazilo, zkus to prosím znovu.</div>
			<button className="min-w-56 px-6 py-3 flex items-center text-lg font-extrabold uppercase rounded-2xl bg-[linear-gradient(to_right,#FF965A,#FF4343,#FF4343,#FF965A)] bg-[length:200%_auto] hover:animate-gradient focus:outline-none focus:ring-2 focus:ring-indigo-500 group/button" onClick={() => formJump(0)}>
				<span>Zkusit znovu</span>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-auto w-6 h-6 group-hover/button:translate-x-2 transition-all duration-300">
					<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
				</svg>
			</button>
		</div>
	);
}