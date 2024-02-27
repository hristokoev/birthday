import Spline from '@splinetool/react-spline';
import { Image } from "astro:assets";
import { useState } from "react";

import Form from "./form/Form";
import Countdown from "./Countdown";
import Spotlight, { SpotlightCard } from "./Spotlight";
import ImageVilla from "../../public/villa.jpg";

export default function Card01() {

	const [loaded, setLoaded] = useState(false)

	return (
		<Spotlight className="mx-auto group">
			<SpotlightCard>
				<div className="relative bg-gradient-to-b from-slate-300/10 via-transparent to-slate-300/35 h-full z-20 overflow-hidden">
					<div className="p-8 xl:p-16 flex flex-col xl:flex-row xl:justify-between">
						{/* Left */}
						<div className="flex flex-col space-y-8 xl:space-y-16">
							<div className="w-auto">
								<h1 className="sr-only">Narozeninová Oslava</h1>
								<svg width="1070" height="293" viewBox="0 0 1070 293" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
									<path d="M98.04 27.42V153H65.84L31.225 83.77L32.03 107.92V153H3.05V27.42H35.25L69.865 96.65L69.06 72.5V27.42H98.04ZM126.284 27.42H168.144L198.09 153H165.407L160.255 127.562H134.173L129.182 153H96.3382L126.284 27.42ZM147.214 62.84L139.486 101.158H154.942L147.214 62.84ZM226.972 109.852V153H196.382V27.42H239.691C260.943 27.42 284.932 32.25 284.932 67.026V70.246C284.932 90.693 276.721 100.675 265.612 105.666L284.932 153H251.927L235.505 109.852H226.972ZM226.972 83.448H240.979C246.936 83.448 254.02 81.194 254.02 69.28V67.992C254.02 56.078 246.936 53.824 240.979 53.824H226.972V83.448ZM332.427 155.254C298.617 155.254 283 136.9 283 93.43V86.99C283 43.52 298.617 25.166 332.427 25.166C366.237 25.166 381.854 43.52 381.854 86.99V93.43C381.854 136.9 366.237 155.254 332.427 155.254ZM331.622 128.85H333.232C347.722 128.85 350.781 115.165 350.781 93.43V86.99C350.781 65.255 347.722 51.57 333.232 51.57H331.622C317.132 51.57 314.073 65.255 314.073 86.99V93.43C314.073 115.165 317.132 128.85 331.622 128.85ZM382.287 132.07L428.655 53.18L404.827 53.824H383.897V27.42H466.007V48.35L419.639 127.24L443.467 126.596H467.617V153H382.287V132.07ZM470.893 27.42H549.783V53.824H501.483V75.72H541.733V102.124H501.483V126.596H549.783V153H470.893V27.42ZM648.006 27.42V153H615.806L581.191 83.77L581.996 107.92V153H553.016V27.42H585.216L619.831 96.65L619.026 72.5V27.42H648.006ZM684.3 27.42V153H653.71V27.42H684.3ZM784.894 27.42V153H752.694L718.079 83.77L718.884 107.92V153H689.904V27.42H722.104L756.719 96.65L755.914 72.5V27.42H784.894ZM836.483 155.254C802.673 155.254 787.056 136.9 787.056 93.43V86.99C787.056 43.52 802.673 25.166 836.483 25.166C870.293 25.166 885.91 43.52 885.91 86.99V93.43C885.91 136.9 870.293 155.254 836.483 155.254ZM835.678 128.85H837.288C851.778 128.85 854.837 115.165 854.837 93.43V86.99C854.837 65.255 851.778 51.57 837.288 51.57H835.678C821.188 51.57 818.129 65.255 818.129 86.99V93.43C818.129 115.165 821.188 128.85 835.678 128.85ZM953.158 153H911.298L881.352 27.42H914.035L932.228 117.58L950.26 27.42H983.104L953.158 153ZM997.351 27.42H1039.21L1069.16 153H1036.47L1031.32 127.562H1005.24L1000.25 153H967.405L997.351 27.42ZM1012.16 0.0499923H1043.24L1032.93 17.76H1003.63L1012.16 0.0499923ZM1018.28 62.84L1010.55 101.158H1026.01L1018.28 62.84ZM49.74 292.254C15.93 292.254 0.313 273.9 0.313 230.43V223.99C0.313 180.52 15.93 162.166 49.74 162.166C83.55 162.166 99.167 180.52 99.167 223.99V230.43C99.167 273.9 83.55 292.254 49.74 292.254ZM48.935 265.85H50.545C65.035 265.85 68.094 252.165 68.094 230.43V223.99C68.094 202.255 65.035 188.57 50.545 188.57H48.935C34.445 188.57 31.386 202.255 31.386 223.99V230.43C31.386 252.165 34.445 265.85 48.935 265.85ZM140.011 239.607C112.641 235.904 98.7947 227.21 98.7947 202.577V200.806C98.7947 177.461 114.412 162.166 144.68 162.166C176.397 162.166 190.565 175.69 190.565 206.119V209.5H159.975C159.975 195.332 155.95 188.57 144.68 188.57H143.07C134.215 188.57 129.868 193.561 129.868 200.001V200.645C129.868 208.373 132.444 212.237 149.349 214.491C176.719 218.194 191.37 226.888 191.37 251.521V253.292C191.37 277.925 175.431 292.254 144.68 292.254C114.09 292.254 97.9897 279.535 97.9897 247.979V246.53H128.58C128.58 260.376 133.41 265.85 143.875 265.85H145.485C155.95 265.85 160.297 260.215 160.297 254.097V253.453C160.297 246.208 156.916 241.861 140.011 239.607ZM267.788 290H192.923V164.42H223.513V263.596H267.788V290ZM290.372 164.42H332.232L362.178 290H329.495L324.343 264.562H298.261L293.27 290H260.426L290.372 164.42ZM311.302 199.84L303.574 238.158H319.03L311.302 199.84ZM418.285 290H376.425L346.479 164.42H379.162L397.355 254.58L415.387 164.42H448.231L418.285 290ZM462.479 164.42H504.339L534.285 290H501.602L496.45 264.562H470.368L465.377 290H432.533L462.479 164.42ZM483.409 199.84L475.681 238.158H491.137L483.409 199.84Z" fill="url(#paint0_linear_109_88)" />
									<defs>
										<linearGradient id="paint0_linear_109_88" x1="534.5" y1="44" x2="534.5" y2="291" gradientUnits="userSpaceOnUse">
											<stop stopColor="white" />
											<stop offset="1" stopColor="#E7EDFF" />
										</linearGradient>
									</defs>
								</svg>
							</div>
							<Form />
							<Countdown />
						</div>
						{/* Right */}
						<div className="mt-8 xl:mt-0 xl:ml-8 flex flex-col">
							<div className="hidden xl:block xl:translate-y-0 mb-4 grow">
								{!loaded && (
									<div className="flex flex-col items-center place-content-center h-full">
										{/* <svg aria-hidden="true" className="mb-4 inline w-12 h-12 text-[#3D3FB6] animate-spin fill-[#FF4343]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
											<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
										</svg> */}
										<span>
											{/* Nahrávám... */}
											Spline je vypnutý
										</span>
									</div>
								)}
								{/* <Spline scene="https://prod.spline.design/laAvbDRO-yHmkB6S/scene.splinecode" onLoad={() => setLoaded(true)} /> */}
							</div>
							<a className="bg-white/25 border border-transparent hover:border-white/75 hover:bg-white/40 rounded-2xl transition-all duration-300 overflow-hidden" href="#informace">
								<div className="px-8 py-4 xl:px-8 xl:py-8 flex flex-col sm:flex-row justify-between items-center gap-2 xl:gap-8">
									<div className="w-2/3 text-3xl xl:text-6xl text-center sm:text-left font-cooper-hewitt font-extrabold uppercase">Kde bude oslava</div>
									<div className="sm:ml-auto w-12 h-12 xl:w-24 xl:h-24 xl:px-6 xl:py-3 flex items-center justify-center font-extrabold uppercase rounded-2xl bg-[linear-gradient(to_right,#FF955A,#FF4644,#FF4644,#FF955A)] bg-[length:200%_auto] hover:animate-gradient focus:outline-none focus:ring-2 focus:ring-indigo-500 group/button">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6 xl:w-12 xl:h-12 group-hover/button:translate-y-2 transition-all duration-300">
											<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
										</svg>
									</div>
								</div>
								<div className="hidden xl:block h-36">
									<img src={ImageVilla.src} alt="Villa" className="object-cover w-full h-full group-hover:brightness-105 transition-all duration-300 ease-in-out" />
								</div>
							</a>
						</div>
					</div>
				</div>
			</SpotlightCard>
		</Spotlight>
	)
}