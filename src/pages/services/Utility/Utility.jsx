import React from 'react';
import ServiceCover from '../serviceCover';
import UtilityContent from './UtilityContent';

export default function Utility() {
	return (
		<div>
			<div className="bg-[url('/src/assets/images/services.jpg')] w-full h-fit  bg-cover bg-center">
				<ServiceCover />
				<UtilityContent />
			</div>
		</div>
	);
}
