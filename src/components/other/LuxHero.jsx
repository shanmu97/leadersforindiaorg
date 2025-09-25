import React from 'react';
import vennD from '../../assets/vennD.png';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const LuxHero = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    const titleVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const vennDiagramVariants = {
        hidden: { opacity: 0, rotate: -180 },
        visible: { 
            opacity: 1, 
            rotate: 0,
            transition: { 
                duration: 1.2, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100
            }
        }
    };
    return (
        <motion.div 
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-[#f9f7ef] text-black min-h-screen flex flex-col justify-center items-center px-4 mt-10">
            {/* Desktop Layout */}
            <motion.div className="hidden md:block w-full max-w-6xl">
                <div className="text-center mb-16">
                    {/* First Row - WE BELIEVE with images */}
                    <div className="flex items-center justify-center mb-8">
                        <motion.div 
                            variants={imageVariants}
                            className="w-24 h-24 bg-gray-600 mr-6">
                            <motion.img 
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                                src="https://cdn.prod.website-files.com/62cdfd11dfb27b3fbe70e0b6/62d1fbbc0e07ab0b21c04fa2_about-1.webp" 
                                alt="" 
                                className="w-full h-full object-cover" />
                        </motion.div>
                        <motion.div 
                            variants={imageVariants}
                            className="w-36 h-24 bg-gray-600 mr-8">
                            <motion.img 
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                                src="https://cdn.prod.website-files.com/62cdfd11dfb27b3fbe70e0b6/62d1fbc01f56220fa98b8d18_about-2.webp" 
                                alt="" 
                                className="w-full h-full object-cover" />
                        </motion.div>
                        <motion.h1 
                            variants={titleVariants}
                            className="md:text-7xl lg:text-8xl font-semibold tracking-wider">
                            WE BELIEVE
                        </motion.h1>
                    </div>

                    {/* Second Row - BEFORE with images and Venn diagram */}
                    <div className="flex items-center justify-center mb-8">
                        <motion.div 
                            variants={imageVariants}
                            className="w-44 h-24 bg-gray-600 mr-6">
                            <motion.img 
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                                src="https://cdn.prod.website-files.com/62cdfd11dfb27b3fbe70e0b6/62d2077caf5e2e92ba9905fa_about-3.webp" 
                                alt="" 
                                className="w-full h-full object-cover" />
                        </motion.div>
                        <motion.div 
                            variants={imageVariants}
                            className="w-24 h-24 mr-6">
                            <motion.img 
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                                src="https://cdn.prod.website-files.com/62cdfd11dfb27b3fbe70e0b6/62d2077c727756c75e68d92a_about-4.webp" 
                                alt="" 
                                className="w-full h-full object-cover rounded-full" />
                        </motion.div>
                        <motion.h1 
                            variants={titleVariants}
                            className="md:text-7xl lg:text-8xl font-semibold tracking-wider mr-8">
                            BEFORE
                        </motion.h1>
                        <motion.div 
                            variants={vennDiagramVariants}
                            className="w-36 flex items-center justify-center">
                            <motion.img 
                                whileHover={{ rotate: 180 }}
                                transition={{ duration: 0.8 }}
                                className='w-32' 
                                src={vennD} 
                                alt="" />
                        </motion.div>
                    </div>

                    {/* Third Row - OTHERS UNDERSTAND with image */}
                    <div className="flex items-center justify-center mb-12">
                        <motion.h1 
                            variants={titleVariants}
                            className="md:text-7xl lg:text-8xl font-semibold tracking-wider mr-8">
                            OTHERS
                        </motion.h1>
                        <motion.div 
                            variants={imageVariants}
                            className="w-48 h-24 bg-gray-600 mr-6">
                            <motion.img 
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                                src="https://cdn.prod.website-files.com/62cdfd11dfb27b3fbe70e0b6/62d2077ce20c181d7578b1be_about-6.webp" 
                                alt="" 
                                className="w-full h-full object-cover" />
                        </motion.div>
                    </div>

                    <motion.div 
                        variants={titleVariants}
                        className="mb-12">
                        <motion.h1 
                            className="md:text-7xl lg:text-8xl font-semibold tracking-wider">
                            UNDERSTAND
                        </motion.h1>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p 
                        variants={titleVariants}
                        className="text-xl mb-8 font-light">
                        Learn why we bet big on the biggest ideas.
                    </motion.p>

                    {/* CTA Button */}
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 text-lg flex items-center mx-auto transition-colors">
                        SHOW ME WHAT LUX STANDS FOR
                        <svg className="ml-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </motion.div>

            {/* Mobile Layout (below md) */}
            <div className="block md:hidden w-full max-w-md">
                <div className="text-center">
                    {/* WE BELIEVE */}
                    <div className="mb-8">
                        <h1 className="text-6xl font-semibold tracking-wider mb-6">WE BELIEVE</h1>
                        <div className="flex justify-center space-x-4 mb-6">
                            <div className="w-24 h-24 bg-gray-600">
                                <img src="https://cdn.prod.website-files.com/62cdfd11dfb27b3fbe70e0b6/62d1fbbc0e07ab0b21c04fa2_about-1.webp" alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-36 h-24 bg-gray-600">
                                <img src="https://cdn.prod.website-files.com/62cdfd11dfb27b3fbe70e0b6/62d1fbc01f56220fa98b8d18_about-2.webp" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* BEFORE */}
                    <div className="mb-8">
                        <h1 className="text-6xl font-semibold tracking-wider mb-6">BEFORE</h1>
                        <div className="flex justify-center items-center space-x-4 mb-6">
                            <div className="w-48 h-24 bg-gray-600">
                                <img src="https://cdn.prod.website-files.com/62cdfd11dfb27b3fbe70e0b6/62d2077caf5e2e92ba9905fa_about-3.webp" alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-24 h-24 ">
                                <img src="https://cdn.prod.website-files.com/62cdfd11dfb27b3fbe70e0b6/62d2077c727756c75e68d92a_about-4.webp" alt="" className="w-full h-full object-cover rounded-full" />
                            </div>
                            <div className="w-36 flex items-center justify-center">
                                <img className='w-36' src={vennD} alt="" />
                            </div>
                        </div>
                    </div>

                    {/* OTHERS */}
                    <div className="mb-8">
                        <h1 className="text-6xl font-semibold tracking-wider mb-6">OTHERS</h1>
                        <div className="flex justify-center mb-6">
                            <div className="w-48 h-24 bg-gray-600">
                                <img src="https://cdn.prod.website-files.com/62cdfd11dfb27b3fbe70e0b6/62d2077ce20c181d7578b1be_about-6.webp" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* UNDERSTAND */}
                    <div className="mb-12">
                        <h1 className="text-5xl font-bold tracking-wider">UNDERSTAND</h1>
                    </div>

                    {/* Subtitle */}
                    <p className="text-lg mb-8 font-light">
                        Learn why we bet big on the biggest ideas.
                    </p>

                    {/* CTA Button */}
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 text-base flex items-center mx-auto transition-colors">
                        SHOW ME WHAT LUX STANDS FOR
                        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default LuxHero;
