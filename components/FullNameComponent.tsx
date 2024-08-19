import React from 'react';

const FullNameComponent = ({ record }: { record: any }) => {
  return <span>{record.params.fullName}</span>;
};

export default FullNameComponent;