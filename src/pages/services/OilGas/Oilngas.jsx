import React from 'react';

import ServiceCover from '../serviceCover';
import OilContent from './OilContent';

export default function Oilngas() {
	return (
		<div>
			<div className="bg-[url('/src/assets/images/services.jpg')] w-full h-fit  bg-cover bg-center">
				<ServiceCover />
				<OilContent />
			</div>
		</div>
	);
}
