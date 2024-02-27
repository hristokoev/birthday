import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import generateRandomValues from '../utils/generate-random-values';

export default function Blob02() {

	// State to hold dynamic variants
	const [blobVariants, setBlobVariants] = useState({
		visible: {}
	});

	useEffect(() => {
		const updateVariants = () => {
			setBlobVariants({
				visible: {
					x: generateRandomValues(5, -50, 50),
					y: generateRandomValues(5, -50, 50),
					rotate: generateRandomValues(5, 0, 360),
					scale: [1, 1.25, 1],
					transition: {
						duration: 60,
						ease: "easeInOut",
						repeat: Infinity,
						repeatType: "mirror"
					}
				}
			});
		};

		updateVariants();

		// Update the blob movement periodically if needed
		// const intervalId = setInterval(updateVariants, 5000);

		// Cleanup interval on component unmount
		// return () => clearInterval(intervalId);
	}, []);

	return (
		<motion.svg width="390" height="324" viewBox="0 0 390 324" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-64 -left-32" initial="hidden" animate="visible" variants={blobVariants}>
			<path d="M296.343 16.383C313.559 32.792 309.524 74.218 329.43 113.223C349.605 152.228 393.721 188.812 389.148 211.677C384.575 234.542 331.582 243.688 292.308 254.448C253.303 265.477 228.017 278.389 191.164 294.798C154.042 311.207 104.815 331.382 65.5409 320.353C26.2669 309.593 -3.32308 267.629 0.442916 227.01C4.20892 186.391 41.0619 147.386 59.8919 106.498C78.7219 65.61 79.5289 22.839 100.511 7.77499C121.224 -7.55801 162.112 4.81598 201.655 6.69898C241.198 8.58198 279.396 -0.0260098 296.343 16.383Z" fill="url(#paint0_linear_115_9)"/>
			<path d="M236.126 11.114C271.634 28.33 299.072 67.335 305.528 109.299C311.715 151.263 296.651 195.917 267.061 218.513C237.471 240.84 193.355 240.84 152.198 261.015C111.041 280.921 72.8432 321.271 52.3992 313.739C31.6862 305.938 28.7272 250.524 19.8502 210.443C10.9732 170.362 -3.55282 145.345 1.82718 125.708C6.93818 106.071 32.2242 91.276 54.2822 71.908C76.3402 52.271 95.1702 28.33 126.105 13.804C157.309 -0.721982 200.618 -5.83298 236.126 11.114Z" />
			<defs>
				<linearGradient id="paint0_linear_115_9" x1="108.603" y1="-63" x2="108.603" y2="472" gradientUnits="userSpaceOnUse">
					<stop stopColor="#FF8952" />
					<stop offset="1" stopColor="#FF4644" />
					<stop offset="1" stopColor="#FF4343" />
				</linearGradient>
			</defs>
		</motion.svg>
	);
}


