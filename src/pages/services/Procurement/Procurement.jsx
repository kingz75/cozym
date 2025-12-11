import React from 'react';
import ServiceCover from '../serviceCover';
import ProcurementContent from './ProcurementContent';

export default function Procurement() {
	return (
		<div>
			<div className="bg-[url('/src/assets/images/services.jpg')] w-full h-fit  bg-cover bg-center">
				<ServiceCover />
				<ProcurementContent />
			</div>
		</div>
	);
}
