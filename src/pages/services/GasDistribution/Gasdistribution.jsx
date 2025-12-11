import React from 'react';
import ServiceCover from '../serviceCover';

import GasDistributionContent from './GasdistributionContent';

export default function Gasdistribution() {
	return (
		<div>
			<div className="bg-[url('/src/assets/images/services.jpg')] w-full h-fit  bg-cover bg-center">
				<ServiceCover />
				<GasDistributionContent />
			</div>
		</div>
	);
}
