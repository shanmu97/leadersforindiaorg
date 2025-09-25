import React, { useMemo } from 'react';

export default function ImageHoverOverlay({
    imageSrc = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2070&q=80",
    title = "Company Conviction",
    description = "Conviction description explained"
}) {
    // Please don't change this, it's for random image height generation, and removing it will occur infinite renders
    // const { randomWidth, randomHeight, align } = useMemo(() => {
    //     const randomWidth = Math.floor(Math.random() * (500 - 400 + 1)) + 400;
    //     const randomHeight = Math.floor(Math.random() * (550 - 450 + 1)) + 450;

    //     const alignOptions = ["flex-start", "center", "flex-end"];
    //     const align = alignOptions[Math.floor(Math.random() * alignOptions.length)];

    //     return { randomWidth, randomHeight, align };
    // }, []);

    return (
        <div
            className="flex px-4 lg:px-6 h-[450px] max-h-[450px]"
            style={{ alignItems: 'center' }}
        >
            <div
                className="relative overflow-hidden rounded-lg cursor-pointer group"
                style={{
                    width: `300px`,
                    height: `400px`,
                }}
            >
                {/* Main Image */}
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 rounded-xl ease-in-out"
                />

                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 ease-in-out"></div>

                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <div className="w-full bg-gradient-to-t from-black via-black/70 to-transparent p-4 sm:p-6">
                        <h2 className="text-white text-xl sm:text-2xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                            {title}
                        </h2>
                        <p className="text-gray-200 text-sm sm:text-base transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out delay-75">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
