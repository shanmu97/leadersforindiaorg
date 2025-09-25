import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const TeamGrid = () => {
    const teamMembers = [
        {
            id: 1,
            name: "John Carter",
            role: "CEO & CO - FOUNDER",
            image: "https://cdn.prod.website-files.com/63359f141e8ae46cc55a6c38/6340b18ae3265ca1532ec138_venture-about-our-partners-john-carter.png", // You'll need to replace with actual image URLs
            alt: "John Carter - CEO & Co-Founder"
        },
        {
            id: 2,
            name: "Sophie Moore",
            role: "SENIOR PARTNER",
            image: "https://cdn.prod.website-files.com/63359f141e8ae46cc55a6c38/6340b19398f0f6ff45415e73_venture-about-our-partners-sophia-moore.png",
            alt: "Sophie Moore - Senior Partner"
        },
        {
            id: 3,
            name: "Andy Smith",
            role: "MANAGING PARTNER",
            image: "https://cdn.prod.website-files.com/63359f141e8ae46cc55a6c38/6340b1a42bdcd2cd070ed1cc_venture-about-our-partners-andy-smith.png",
            alt: "Andy Smith - Managing Partner"
        },
        {
            id: 4,
            name: "Patrick Meyer",
            role: "MANAGING PARTNER",
            image: "https://cdn.prod.website-files.com/63359f141e8ae46cc55a6c38/6340b1b0b9d4cedd5099bddf_venture-investors-patrick-meyer.png",
            alt: "Patrick Meyer - Managing Partner"
        },
        {
            id: 5,
            name: "Lily Woods",
            role: "MANAGING PARTNER",
            image: "https://cdn.prod.website-files.com/63359f141e8ae46cc55a6c38/6340b1b7af18ec29bd8a493e_venture-investors-lily-woods.png",
            alt: "Lily Woods - Managing Partner"
        },
        {
            id: 6,
            name: "Matt Cannon",
            role: "MANAGING PARTNER",
            image: "https://cdn.prod.website-files.com/63359f141e8ae46cc55a6c38/6340b1c204a965507968399d_venture-investors-matt-cannon.png",
            alt: "Matt Cannon - Managing Partner"
        }
    ];

    return (
        <div className="bg-white w-full h-full p-8">
            <div className="mt-20 w-full h-auto flex flex-col items-center mb-10">
                <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="relative group cursor-pointer border border-gray-500 hover:border-blue-600 transition-all duration-300 bg-gray-100"
                        >
                            {/* Image Container */}
                            <div className=" overflow-hidden bg-gray-100">
                                <img
                                    src={member.image}
                                    alt={member.alt}
                                    className="w-full h-full max-h-[450px] lg:max-h-[400px] object-cover group-hover:scale-107 transition-all duration-300 bg-gray-100"
                                />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 via-gray-800/80 to-transparent p-6">
                                <div className="flex items-end justify-between">
                                    <div className="text-white group-hover:text-blue-500 transition-all duration-400">
                                        <h3 className="text-3xl mb-2">{member.name}</h3>
                                        <p className="text-gray-400 text-base transition-all duration-400 group-hover:text-white  font-medium tracking-wider uppercase">
                                            {member.role}
                                        </p>
                                    </div>

                                    {/* Arrow Icon */}
                                    <div className="flex-shrink-0 ml-4">
                                        <ArrowUpRight
                                            size={24}
                                            className="text-white opacity-70 transition-all duration-400
                                            group-hover:text-blue-500 group-hover:scale-120
                                            group-hover:opacity-100"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamGrid;