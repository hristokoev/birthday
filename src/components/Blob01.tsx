import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import generateRandomValues from '../utils/generate-random-values';

export default function Blob01() {

	// State to hold dynamic variants
	const [blobVariants, setBlobVariants] = useState({
		hidden: { x: -100, y: -100, rotate: 0 },
		visible: {}
	});

	useEffect(() => {
		const updateVariants = () => {
			setBlobVariants({
				hidden: { x: -100, y: -100, rotate: 0 },
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
		<motion.svg width="350" height="361" viewBox="0 0 350 361" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -top-32 -left-32" initial="hidden" animate="visible" variants={blobVariants}>
			<path d="M233.577 84.318C274.465 113.639 332.031 128.165 346.019 157.755C360.007 187.345 330.417 231.999 301.365 272.08C272.582 312.43 244.337 348.476 209.367 357.891C174.397 367.306 132.433 349.821 105.802 325.342C78.902 300.863 67.066 268.852 48.505 239.8C30.213 210.479 4.65803 183.579 0.892025 152.913C-3.14297 121.978 14.073 87.008 41.511 54.997C68.949 23.255 106.609 -5.52801 137.275 2.27299C168.21 10.074 192.42 54.728 233.577 84.318Z" fill="url(#paint0_linear_115_9)" />
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
