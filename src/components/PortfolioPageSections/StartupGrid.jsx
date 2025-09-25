import React, { useState } from 'react';
import FilterDropdown from '../startupGridParts/FilterDropdown';
import CompanyCard from '../startupGridParts/CompanyCard';
import CompanyModal from '../startupGridParts/CompanyModal';
import { companies } from '../../dummyData/companyData';

const StartupGrid = () => {
    const [selectedSector, setSelectedSector] = useState('All Sectors');
    const [selectedRegion, setSelectedRegion] = useState('All Regions');
    const [selectedStage, setSelectedStage] = useState('Stage of investment');
    const [selectedCompany, setSelectedCompany] = useState(null);

    return (
        <div className="w-full mt-20 max-w-[1400px] mx-auto p-6">
            <div className="flex gap-4 mb-8">
                <FilterDropdown
                    value={selectedSector}
                    onChange={setSelectedSector}
                    placeholder="All Sectors"
                />
                <FilterDropdown
                    value={selectedRegion}
                    onChange={setSelectedRegion}
                    placeholder="All Regions"
                />
                <FilterDropdown
                    value={selectedStage}
                    onChange={setSelectedStage}
                    placeholder="Stage of investment"
                />
            </div>
            
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-y-8 ">
                {companies.map((company, index) => (
                    <div key={index} className="relative">
                        <CompanyCard
                            company={company}
                            onClick={setSelectedCompany}
                        />
                        {/* divider for: */}
                        {/* MD (2 cols): 1st column only (index 0, 2, 4, 6...) */}
                        {/* LG (3 cols): 1st and 2nd columns only (index 0, 1, 3, 4, 6, 7...) */}
                        {index % 2 === 0 && index < companies.length - 1 && (
                            <div className="hidden md:block lg:hidden absolute top-0 -right-4 w-px h-full bg-gray-300"></div>
                        )}
                        {(index % 3 === 0 || index % 3 === 1) && index < companies.length - 1 && (
                            <div className="hidden lg:block absolute top-0 -right-4 w-[2px] h-full bg-gray-300"></div>
                        )}
                    </div>
                ))}
            </div>
            
            <CompanyModal
                company={selectedCompany}
                onClose={() => setSelectedCompany(null)}
            />
        </div>
    );
};

export default StartupGrid;