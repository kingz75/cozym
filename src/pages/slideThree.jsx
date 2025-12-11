import React from 'react';
import img3 from '../assets/images/homeThree.jpg';

export default function SlideThree({ active }) {
	return (
		<div
			className={`absolute inset-0 transition-opacity duration-[1200ms] 
      ${active ? 'opacity-100 z-20' : 'opacity-0 z-0'}
    `}
		>
			<div
				className="absolute inset-0 bg-cover bg-center scale-110 animate-parallax"
				style={{ backgroundImage: `url(${img3})` }}
			/>

			<div className="absolute inset-0 bg-black/30" />

			<div className="relative h-full flex flex-col justify-end pb-24 pl-10 md:pl-24 text-white animate-fadeSlide">
				<h1 className="text-3xl md:text-5xl font-bold">Oil & Gas</h1>

				<p className="text-lg md:text-xl mt-4 max-w-lg">
					Providing reliable support services for oil & gas infrastructure.
				</p>

				<button className="mt-6 bg-yellow-500 px-6 py-3 rounded text-black font-semibold">
					Explore Services
				</button>
			</div>
		</div>
	);
}
