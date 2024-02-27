import Spotlight, { SpotlightCard } from "./Spotlight";
import { Image } from "astro:assets";

import ImageVilla from "../../public/villa.jpg";

export default function Card02() {
	return (
		<Spotlight className="mx-auto group">
			<SpotlightCard>
				<div className="relative h-full bg-gradient-to-b from-slate-300/10 via-transparent to-slate-300/35 z-20 overflow-hidden" id="informace">
					<div className="flex flex-col lg:flex-row h-full">
						{/* Text */}
						<div className="p-8 lg:p-16 lg:mb-4 space-y-8">
							<h2 className="text-3xl lg:text-6xl text-slate-200 font-black uppercase mb-1">Informace</h2>
							<div className="space-y-4">
								<p className="lg:text-lg">Těžko uvěřit, nicméně má životní cesta se pomalu dostává do své druhé poloviny. A to si žádá řádnou oslavu. Pokud máš stejný názor, rád Tě na oslavě přivítám. Je třeba jen vyplnit kraťoučký dotazník nad tímto textem a pak <strong className="text-[#FF965A]">25.5. v 17:00</strong> dorazit na chatu Ještědka pod Ještědem. </p>
								<p className="lg:text-lg">S sebou si vezmi jen dobrou náladu. Těším se na Tebe!<br />- Petr Slanina</p>
								<p className="lg:text-lg">Pozn.: Dotazník prosím vyplň i když se dorazit nechystáš.</p>
							</div>
						</div>
						{/* Image */}
						<div className="relative">
							<div className="w-full absolute inset-0 m-auto bg-indigo-600/10 mix-blend-color group-hover:bg-transparent transition-all duration-300" aria-hidden="true"></div>
							<img src={ImageVilla.src} alt="Villa" className="object-cover w-full h-full group-hover:brightness-105 transition-all duration-300 ease-in-out" />
						</div>
					</div>
				</div>
			</SpotlightCard>
		</Spotlight>
	)
}