import React from 'react';
const TextareaEdit = (props) => {
    const { record, property, onChange } = props;
    return (React.createElement("div", { className: "mb-4" },
        React.createElement("label", { className: "block text-sm mb-2" }, property.label)));
};
export default TextareaEdit;
