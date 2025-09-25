import React from 'react';
import { logoConfigs } from '../../dummyData/logoConfigs';

const Logo = ({ company, size = 'medium' }) => {
  const logoData = logoConfigs[company];
  if (!logoData) return <span className="text-xl font-bold">{company}</span>;

  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  return (
    <div className={`flex items-center gap-2 ${logoData.containerClass || ''}`}>
      {logoData.icon && (
        <div className={`${sizeClasses[size]} ${logoData.iconContainerClass || ''} flex items-center justify-center`}>
          {logoData.icon}
        </div>
      )}
      <span className={`${logoData.textClass} font-bold text-2xl lg:text-[27px]`}>
        {logoData.text || company}
      </span>
      {logoData.additionalElement}
    </div>
  );
};

export default Logo;
