import React from 'react';
import { ChevronDown } from 'lucide-react';

const FilterDropdown = ({ value, onChange, placeholder }) => (
    <div className="relative">
        <button className="flex items-center justify-between w-full px-4 py-3 text-left bg-white border border-gray-500 rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent min-w-[200px] gap-16">
            <span className="text-gray-700">{value}</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>
    </div>
);

export default FilterDropdown;