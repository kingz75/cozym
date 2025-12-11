import React from 'react';
import ServiceCover from '../serviceCover';
import StorageContent from './StorageContent';

export default function Storage() {
	return (
		<div>
			<div className="bg-[url('/src/assets/images/services.jpg')] w-full h-fit  bg-cover bg-center">
				<ServiceCover />
				<StorageContent />
			</div>
		</div>
	);
}
