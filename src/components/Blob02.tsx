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
					scale: [1, 1.2, 1],
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
		<motion.svg width="307" height="315" viewBox="0 0 307 315" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -top-60 -right-32" initial="hidden" animate="visible" variants={blobVariants}>
			<path d="M236.126 11.114C271.634 28.33 299.072 67.335 305.528 109.299C311.715 151.263 296.651 195.917 267.061 218.513C237.471 240.84 193.355 240.84 152.198 261.015C111.041 280.921 72.8432 321.271 52.3992 313.739C31.6862 305.938 28.7272 250.524 19.8502 210.443C10.9732 170.362 -3.55282 145.345 1.82718 125.708C6.93818 106.071 32.2242 91.276 54.2822 71.908C76.3402 52.271 95.1702 28.33 126.105 13.804C157.309 -0.721982 200.618 -5.83298 236.126 11.114Z" fill="url(#paint0_linear_115_9)"/>
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
