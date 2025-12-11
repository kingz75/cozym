import React from 'react';
import img2 from '../assets/images/homeTwo.jpg';

export default function SlideTwo({ active }) {
	return (
		<div
			className={`absolute inset-0 transition-opacity duration-[1200ms] 
      ${active ? 'opacity-100 z-20' : 'opacity-0 z-0'}
    `}
		>
			<div
				className="absolute inset-0 bg-cover bg-center scale-110 animate-parallax"
				style={{ backgroundImage: `url(${img2})` }}
			/>

			<div className="absolute inset-0 bg-black/50" />

			<div className="relative h-full w-full flex flex-col items-center justify-center text-white text-center animate-fadeSlide">
				<div>
					<h1>Key Fact</h1>
					<li>Founded 2012 — Licensed by NUPRC & NMDPRA</li>
					<li>Delivered 25+ LPG, CNG & terminal projects</li>
					<li>Integrated EPC delivery + Cozym Academy</li>
				</div>
			</div>
		</div>
	);
}
