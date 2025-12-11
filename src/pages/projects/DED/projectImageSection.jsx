import React, { useState, useEffect } from 'react';

// Import images directly
import p1 from '../../../assets/images/p1.png';
import p2 from '../../../assets/images/p2.png';
import p3 from '../../../assets/images/p3.png';
import p4 from '../../../assets/images/p4.png';
import p5 from '../../../assets/images/p5.png';

export default function ProjectsImageSection() {
	// Slides now use imported images
	const slides = [
		[p1, p2],
		[p3, p4],
		[p5, p3],
	];

	const [index, setIndex] = useState(0);

	// Auto slide every 4 seconds
	useEffect(() => {
		const timer = setInterval(() => {
			setIndex(prev => (prev + 1) % slides.length);
		}, 2500);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className=" max-w-[1200px] mx-auto flex flex-col items-center py-12">
			{/* LABEL */}
			<p className="text-[24px] leading-[36px] text-[#EEC044] mb-1">
				Images from
			</p>

			{/* TITLE */}
			<h2 className="text-[32px] font-extrabold text-[#002B45] mb-[110px]">
				The Projects
			</h2>

			{/* SLIDER */}
			<div className="relative w-full mb-[80px]">
				<div className="relative w-full flex justify-center overflow-hidden">
					{/* Slide */}
					<div className="flex gap-8 transition-opacity duration-700 ease-in-out opacity-100">
						{slides[index].map((img, i) => (
							<img
								key={i}
								src={img}
								alt="project"
								className=""
							/>
						))}
					</div>
				</div>
			</div>

			{/* DOTS */}
			<div className="flex gap-3 mt-6">
				{slides.map((_, i) => (
					<div
						key={i}
						onClick={() => setIndex(i)}
						className={`cursor-pointer rounded-full transition-all
              ${i === index ? 'bg-[#072D52] w-10 h-3' : 'bg-[#d9a63f] w-3 h-3'}
            `}
					></div>
				))}
			</div>
		</div>
	);
}
