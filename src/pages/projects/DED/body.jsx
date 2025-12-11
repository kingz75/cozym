import React from 'react';
import checkStyle from '../../../assets/icons/checkStyle.svg';

export default function Body() {
	const items = [
		"Tie-in to ELPS (14'' × 0.5 km) – engineering design for integration with the transmission system.",
		"12'' × 18 km distribution pipeline – route alignment, hydraulic simulations, stress analysis, material specifications, and constructability input.",
		'City Gate station design – including pressure regulating systems, metering skids, isolation valves, and redundancy provisions.',
		'Execution-ready documentation – specifications, engineering drawings, guidelines, and material take-off (MTO) lists for use by procurement and construction teams.',
	];
	return (
		<div className="max-w-[1100px] mx-auto  my-[46px]">
			<div>
				<h1 className="text-[20px] text-[#002B45] font-extrabold leading-[30px]">
					CONTEXT & CHALLENGE
				</h1>
				<p className="text-[20px] leading-[25px] pt-3 text-[#002B45] text-justify ">
					In 2020, our client initiated a project to expand industrial gas
					supply in Sagamu, Ogun State, by delivering a new natural gas
					distribution system. The development required a 0.5 km × 14” pipeline
					to tie into the Escravos–Lagos Pipeline System (ELPS), a City Gate
					station with pressure reduction and metering facilities, and an 18 km
					× 12” distribution pipeline to supply natural gas from the City Gate
					to a major industrial off-taker. The project needed a comprehensive
					Detailed Engineering Design (DED) to guide procurement and
					construction activities with precision and compliance.
				</p>
				<h1 className=" mt-14 text-[20px] text-[#002B45] font-extrabold leading-[30px]">
					COZYM INTERVENTION
				</h1>
				<p className="text-[20px] leading-[25px] pt-3 text-[#002B45] text-justify ">
					Cozym was engaged as a specialist engineering subcontractor to prepare
					the multidisciplinary DED package. Our deliverables included:
				</p>
				<div className="">
					<ul className="space-y-5 pt-8">
						{items.map((item, index) => (
							<li
								key={index}
								className="flex items-center gap-3"
							>
								<img
									src={checkStyle}
									alt="check icon"
									className="w-6 h-6 mt-1"
								/>

								<p className="text-[20px]  leading-[25px] pt-[10px] text-[#002B45] text-justify">
									{item}
								</p>
							</li>
						))}
					</ul>
				</div>
				<h1 className="mt-14 text-[20px] text-[#002B45] font-extrabold leading-[30px]">
					DELIVERY
				</h1>
				<p className="text-[20px] leading-[25px] pt-3 text-[#002B45] text-justify ">
					Our engineering outputs were developed using specialized tools
					(AutoCAD, CAESAR II, STAAD.Pro, HYSYS) and fully aligned with API,
					ASME, BS, and Nigerian regulatory codes. The package gave the EPC team
					clear technical direction for procurement and construction, minimizing
					execution risks and ensuring compliance
				</p>
				<h1 className=" mt-14 text-[20px] text-[#002B45] font-extrabold leading-[30px]">
					RESULTS & IMPACT
				</h1>
				<p className="text-[20px] leading-[25px] pt-[10px] text-[#002B45] text-justify ">
					The project has since been successfully constructed, commissioned, and
					is currently operational, supplying reliable natural gas to Sagamu’s
					industrial corridor. By providing execution-grade engineering, Cozym
					contributed to the safe delivery of a strategic energy infrastructure
					asset, strengthening gas-toindustry penetration in Nigeria.
				</p>
			</div>
		</div>
	);
}
