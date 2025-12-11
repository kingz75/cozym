import React from 'react';
import ServiceCover from '../serviceCover';
import TechnicalContent from './TechnicalContent';

export default function Technical() {
	return (
		<div>
			<div className="bg-[url('/src/assets/images/services.jpg')] w-full h-fit  bg-cover bg-center">
				<ServiceCover />
				<TechnicalContent />
			</div>
		</div>
	);
}
