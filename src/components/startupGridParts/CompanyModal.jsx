import React from 'react';
import { X } from 'lucide-react';
import Logo from './Logo';
import { companyDetails } from '../../dummyData/companyData';
import { logoConfigs } from '../../dummyData/logoConfigs';

const CompanyModal = ({ company, onClose }) => {
  if (!company) return null;

  const details = companyDetails[company.name];
  const logoConfig = logoConfigs[company.name];

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50 p-5">
      <div className="absolute bg-blue-700 w-full h-full opacity-80"></div>
      <div className="bg-white p-8 max-w-7xl w-full h-[70%] lg:h-[80%] relative overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-4 cursor-pointer hover:bg-blue-700 text-white bg-black rounded-full z-10"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="mb-6 mt-12 flex flex-col gap-3 lg:p-8">
          <div className="flex items-center mb-4">
            <div
              className={`mr-4 p-4 rounded-md flex items-center justify-center ${logoConfig?.backgroundClass || 'bg-gray-100'}`}
            >
              <Logo company={company.name} size="large" />
            </div>
          </div>

          <h2 className="text-base md:text-xl lg:text-3xl font-medium mb-2">
            {details?.description || `${company.name} - Leading technology company`}
          </h2>

          {details?.details && (
            <p className="text-gray-600 text-sm mb-4 lg:text-lg">
              {details.details}
            </p>
          )}

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 pt-4 mt-10">
            <div>
              <p className="text-sm lg:text-lg font-medium text-gray-500 mb-1">Website</p>
              <a
                href={details.website}
                className="text-gray-900 underline text-sm lg:text-lg font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                {details.website}
              </a>
            </div>

            <div>
              <p className="text-sm lg:text-lg font-medium text-gray-500 mb-1">Investment Year</p>
              <p className="text-sm lg:text-lg font-medium">{details.investmentYear}</p>
            </div>

            <div className="hidden lg:block">
              <p className="text-sm lg:text-lg font-medium text-gray-500 mb-1">Jungle team</p>
              <a href="#" className="text-gray-900 underline text-sm lg:text-lg font-medium">
                {details.jungleTeam}
              </a>
            </div>

            <div>
              <p className="text-sm lg:text-lg font-medium text-gray-500 mb-1">Founders</p>
              <div className="text-sm">
                {details.founders.split(', ').map((founder, index) => (
                  <span key={index}>
                    <a href="#" className="text-gray-900 underline text-sm lg:text-lg font-medium">
                      {founder}
                    </a>
                    {index < details.founders.split(', ').length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm lg:text-lg font-medium text-gray-500 mb-1">Category</p>
              <p className="text-sm lg:text-lg font-medium">{details.category}</p>
            </div>

            <div className="hidden lg:block">
              <p className="text-sm lg:text-lg font-medium text-gray-500 mb-1">Investment Stage</p>
              <p className="text-sm lg:text-lg font-medium">{details.investmentStage}</p>
            </div>

            <div className="lg:hidden col-span-2">
              <p className="text-sm lg:text-lg font-medium text-gray-500 mb-1">Jungle team</p>
              <a href="#" className="text-gray-900 underline text-sm lg:text-lg font-medium">
                {details.jungleTeam}
              </a>
            </div>
            <div className="lg:hidden col-span-3">
              <p className="text-sm lg:text-lg font-medium text-gray-500 mb-1">Investment Stage</p>
              <p className="text-sm lg:text-lg font-medium">{details.investmentStage}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyModal;
