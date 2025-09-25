import React from 'react';
import Logo from './Logo';
import { logoConfigs } from '../../dummyData/logoConfigs';

const CompanyCard = ({ company, onClick }) => {
  const logoData = logoConfigs[company.name];
  
  return (
    <div 
      onClick={() => onClick(company)}
      className='cursor-pointer flex flex-col w-full md:px-5'
    >
      <div className='w-full '>
        {/* Full Logo */}
        <div
          className={`relative p-6 hover:shadow-lg transition-all cursor-pointer overflow-hidden flex justify-center items-center shadow-lg min-h-[240px] ${logoData?.backgroundClass || 'bg-white'}`}
        >
          {company.stage && (
            <div className="absolute top-3 right-3">
              <span className="text-blue-700 text-xs font-medium bg-blue-100 px-2 py-1 rounded-full">
                {company.stage}
              </span>
            </div>
          )}
          <div className="flex items-center justify-center h-20">
            <Logo company={company.name} size="medium" />
          </div>
        </div>
        {/* Name and stage */}
        <div className='w-full mt-6'>
          <h3 className='text-[23px] font-semibold'>
            {company.name}
          </h3>
          <p className='font-semibold text-gray-400'>
            {company.stage ? '' + company.stage : 'Business'}
          </p>
        </div>
      </div>
      
      {/* Mobile only divider */}
      <div className='md:hidden border-b my-8 w-full border-gray-500'></div>
    </div>
  );
};

export default CompanyCard;