import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import ImageHoverOverlay from '../ui/ImageOverlay';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function Conviction() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.6
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            x: -50
        },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    let convictionCompanyData = [
        {
            imageSrc: "https://cdn.sanity.io/images/gxmub2ol/redesign-2024/12895205b6e46c4c3e34ab2357f0027642be8f22-3228x3426.jpg/Firstcry_Supam.jpg?rect=0,82,2802,2993&fp-x=0.4340424233294548&fp-y=0.4609170442134777&w=1024&h=1094&fit=crop&crop=focalpoint&auto=format",
            title: "FirstCry",
            description: "We backed FirstCry's omnichannel approach when it was not in vogue, and the need for a vertical player in the category was questioned."
        },
        {
            imageSrc: "https://cdn.sanity.io/images/gxmub2ol/redesign-2024/30d2b9ef7478ac340d19d4ed344cf6342359d54b-2048x1367.png/Swiggy.png?rect=1,0,2047,1367&w=1024&h=684&auto=format",
            title: "Swiggy",
            description: "We backed Harsha's logistics-first vision for food delivery in 2015 when the space was hyper-competitive with multiple well-funded teams."
        },
        {
            imageSrc: "https://cdn.sanity.io/images/gxmub2ol/redesign-2024/badcc63ce637be826d9abf196b1af79a26dd156e-2400x1602.jpg/time100-companies-Meesho-2023.jpg?rect=1,0,2398,1602&w=1024&h=684&auto=format",
            title: "Meesho",
            description: "We invested in Meesho when e-commerce in India looked overcrowded, partnered through their pivot to a horizontal platform as they became India's largest true e-commerce marketplace."
        },
        {
            imageSrc: "https://cdn.sanity.io/images/gxmub2ol/redesign-2024/fff79e1b8fc40fa1cce2a55541bed206c22ea850-3024x4032.jpg/Founder%204.jpg?rect=0,371,3024,3476&fp-x=0.5&fp-y=0.5230000305175782&w=1024&h=1177&fit=crop&crop=focalpoint&auto=format",
            title: "Paytm",
            description: "We backed Paytm's pivot in 2010 from a mobile VAS company, partnered across stages, investing >$100M through the journey."
        },
        {
            imageSrc: "https://cdn.sanity.io/images/gxmub2ol/redesign-2024/aeff4fc89f4f5b866fff2d381f1ac24f4b7361dd-1200x900.webp/PlaySimple%20Games.webp?w=1024&h=768&auto=format",
            title: "PlaySimple",
            description: "We partnered with PlaySimple from when they had only two titles to one of the biggest gaming exits in the Indian startup ecosystem."
        },
        {
            imageSrc: "https://cdn.sanity.io/images/gxmub2ol/redesign-2024/7313200fb2e35d7b525ce99bcca348514ef9b381-1200x899.png/Urban%20Company.png?w=1024&h=767&auto=format",
            title: "Urban Company",
            description: "We invested in Urban Company during their MVP days and doubled down as they became full-stack, going against conventional wisdom."
        },
        {
            imageSrc: "https://cdn.sanity.io/images/gxmub2ol/redesign-2024/0045a25ba95ee0d7f544d3ed1d3d080f13150da7-640x663.webp/Spinny.webp?w=640&h=663&auto=format",
            title: "Urban Company",
            description: "We backed Spinny's distinctive full-stack model when the used-cars market was teeming with funded players. Spinny is today the uncontested market leader."
        },
    ]

    return (
        <motion.div 
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className='bg-gradient-to-br from-gray-50 to-white text-black py-8 flex w-full flex-col'>
            <motion.div 
                variants={itemVariants}
                className='px-10 lg:px-12 w-full flex justify-between items-center'>
                <motion.h1 
                    className='text-[45px] lg:text-6xl font-semibold'>
                    Built with Conviction
                </motion.h1>
                <motion.div 
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center">
                <motion.h3 
                    variants={itemVariants}
                    className='mt-6 font-semibold text-xl lg:text-2xl text-blue-500'>
                    One of One. From Day One. All In.
                </motion.h3>
                
                <motion.p 
                    variants={itemVariants}
                    className='mt-6 text-lg lg:text-xl leading-relaxed lg:max-w-lg'>
                    These are the core principles that allow us to bring our undivided focus and true partnership ethos to every founder. When we go, we go all in.
                </motion.p>
                <Link className='underline mt-6'>Read our philosophy</Link>
                </motion.div>
            </motion.div>
            <div className='my-10'></div>
            <Marquee
                gradient={false}
                speed={35}
                pauseOnHover={true}
                className='w-full'
            >
                <div className='flex'>
                    {
                        convictionCompanyData.map((data, index) => (
                            <div key={index} className="flex-shrink-0">
                                <ImageHoverOverlay
                                    imageSrc={data.imageSrc}
                                    title={data.title}
                                    description={data.description}
                                />
                            </div>
                        ))
                    }
                </div>
            </Marquee>
        </motion.div>
    )
}

export default Conviction