import React from 'react';
import sectionOne from '../../../assets/images/ded.jpg';

export default function SectionOne() {
	return (
		<div className="max-w-[1100px] mx-auto  my-[46px]">
			<div>
				<img
					src={sectionOne}
					alt=""
				/>

				<p className="text-[#FAA419] text-[30px] font-extrabold leading-[42px] pt-[39px]">
					Detailed Engineering Design (DED) for 18 km Onshore Gas Distribution
					Pipeline with PRMS Sagamu (2020)
				</p>
			</div>
		</div>
	);
}
