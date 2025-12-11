import React from 'react';
import HeroSection from '../heroSection';
import SectionOne from './sectionOne';
import Body from './body';
import ProjectsImageSection from '../DED/projectImageSection';

export default function Ded() {
	return (
		<div className="">
			<div>
				<HeroSection />
				<div className="">
					<SectionOne />
					<Body />
					<ProjectsImageSection />
				</div>
			</div>
		</div>
	);
}
