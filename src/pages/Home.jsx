import React, { useState, useEffect } from 'react';
import SlideOne from '../pages/slideOne';
import SlideTwo from '../pages/slideTwo';
import SlideThree from '../pages/slideThree';

export default function Home() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setIndex(prev => (prev + 1) % 3);
		}, 0);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="relative w-full h-[calc(100vh-100px)]  overflow-hidden">
			{/* <SlideOne active={index === 0} /> */}
			<SlideTwo active={index === 0} />
			{/* <SlideThree active={index === 2} /> */}

			<div className="w-full bg-red-300 h-20 absolute bottom-0 left-0 z-50">
				sfksfkjskjfs
			</div>

			{/* Dots */}
			{/* <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-30">
				{[0, 1, 2].map(i => (
					<div
						key={i}
						onClick={() => setIndex(i)}
						className={`w-3 h-3 rounded-full cursor-pointer transition
              ${index === i ? 'bg-yellow-500' : 'bg-white/50'}
            `}
					/>
				))}
			</div> */}
		</div>
	);
}
