import React from 'react';
import ServiceCover from '../serviceCover';
import GasProcessingContent from './GasContent';

export default function Gasprocessing() {
	return (
		<div>
			<div className="bg-[url('/src/assets/images/services.jpg')] w-full h-fit  bg-cover bg-center">
				<ServiceCover />
				<GasProcessingContent />
			</div>
		</div>
	);
}
