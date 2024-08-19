import React from 'react';
import { BasePropertyProps } from 'adminjs';

const TextareaEdit: React.FC<BasePropertyProps> = (props) => {
	const { record, property, onChange } = props;

	return (
		<div className="mb-4">
			<label className="block text-sm mb-2">{property.label}</label>
			{/* <textarea
				className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				rows={5}
				value={record.params[property.path] || ''}
				onChange={(e) => onChange(property.path, e.target.value)}
			/> */}
		</div>
	);
};

export default TextareaEdit;