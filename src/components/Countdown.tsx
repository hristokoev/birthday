import React, { useState, useEffect } from 'react';

const Countdown = () => {
	// Set the target date and time for the countdown
	const targetDate = new Date('2024-05-25T17:00:00');

	// State to store the countdown timer components
	const [countdown, setCountdown] = useState({
		days: '00',
		hours: '00',
		minutes: '00',
		seconds: '00',
	});

	useEffect(() => {
		// Update the countdown every second
		const interval = setInterval(() => {
			// Calculate the difference between now and the target date
			const now = new Date().getTime();
			const difference = targetDate.getTime() - now;

			// If the countdown is over, stop the interval
			if (difference < 0) {
				clearInterval(interval);
				return;
			}

			// Calculate days, hours, minutes, and seconds
			const days = Math.floor(difference / (1000 * 60 * 60 * 24));
			const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((difference % (1000 * 60)) / 1000);

			// Update the countdown state
			setCountdown({
				days: days.toString().padStart(2, '0'),
				hours: hours.toString().padStart(2, '0'),
				minutes: minutes.toString().padStart(2, '0'),
				seconds: seconds.toString().padStart(2, '0'),
			});
		}, 1000);

		// Clear the interval on component unmount
		return () => clearInterval(interval);
	}, [targetDate]);

	return (
		<div className="grow flex flex-col justify-end">
			<div className="sm:mb-2 sm:text-lg uppercase font-bold">Do oslavy zbývá:</div>
			<div className="grid sm:grid-cols-2 md:grid-cols-4 md:flex gap-4 cursor-default">
				<div className="md:max-w-36 px-8 py-4 bg-white/25 border border-transparent hover:border-white/75 hover:bg-white/40 rounded-2xl text-center transition-all duration-300">
					<div className="text-3xl md:text-6xl font-extrabold">{countdown.days}</div>
					<div className="md:text-lg uppercase">Dní</div>
				</div>
				<div className="md:max-w-36 px-8 py-4 bg-white/25 border border-transparent hover:border-white/75 hover:bg-white/40 rounded-2xl text-center transition-all duration-300">
					<div className="text-3xl md:text-6xl font-extrabold">{countdown.hours}</div>
					<div className="md:text-lg uppercase">Hodin</div>
				</div>
				<div className="md:max-w-36 px-8 py-4 bg-white/25 border border-transparent hover:border-white/75 hover:bg-white/40 rounded-2xl text-center transition-all duration-300">
					<div className="text-3xl md:text-6xl font-extrabold">{countdown.minutes}</div>
					<div className="md:text-lg uppercase">Minut</div>
				</div>
				<div className="md:max-w-36 px-8 py-4 bg-white/25 border border-transparent hover:border-white/75 hover:bg-white/40 rounded-2xl text-center transition-all duration-300">
					<div className="text-3xl md:text-6xl font-extrabold">{countdown.seconds}</div>
					<div className="md:text-lg uppercase">Sekund</div>
				</div>
			</div>
		</div>
	);
};

export default Countdown;
