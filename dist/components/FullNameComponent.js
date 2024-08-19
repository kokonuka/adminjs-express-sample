import React from 'react';
const FullNameComponent = ({ record }) => {
    return React.createElement("span", null, record.params.fullName);
};
export default FullNameComponent;
