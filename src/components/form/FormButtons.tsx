import { formData, formPrev, formJump } from "./store";

export default function FormButtons({ index, loading }: { index: number; loading?: boolean }) {

	return (
		<div className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-4 select-none">
			{index > 0 && (
				<button
					className={`px-6 py-3 flex items-center sm:text-lg font-extrabold uppercase rounded-2xl bg-[#7b71af] hover:bg-[#8E83C9] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 group/button ${index == 0 ? "opacity-50 cursor-not-allowed" : ""}`}
					onClick={() => formPrev(index)}
					type="button"
				>
					<span>Zpět</span>
				</button>
			)}
			<div>
				{index < 6 ? (
					<button className="lg:min-w-56 w-full px-6 py-3 flex items-center sm:text-lg font-extrabold uppercase rounded-2xl bg-[linear-gradient(to_right,#FF965A,#FF4343,#FF4343,#FF965A)] bg-[length:200%_auto] hover:animate-gradient focus:outline-none focus:ring-2 focus:ring-indigo-500 group/button">
						<span>Pokračovat</span>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-auto w-6 h-6 group-hover/button:translate-x-2 transition-all duration-300">
							<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
						</svg>
					</button>
				) : (
					<button
					className={`min-w-56 w-full px-6 py-3 flex items-center sm:text-lg font-extrabold uppercase rounded-2xl bg-[linear-gradient(to_right,#FF965A,#FF4343,#FF4343,#FF965A)] bg-[length:200%_auto] ${loading ? 'cursor-wait' : 'hover:animate-gradient'} focus:outline-none focus:ring-2 focus:ring-indigo-500 group/button`} type="submit"
						disabled={loading}
					>
						{loading ? (
							<>
								<span>Odesilání...</span>
							</>
						) : (
							<>
								<span>Odeslat</span>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-auto w-6 h-6 group-hover/button:translate-x-2 transition-all duration-300">
									<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
								</svg>
							</>
						)}
					</button>
				)}
			</div>
		</div >
	);
}
