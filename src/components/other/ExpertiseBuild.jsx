import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function ExpertiseBuild() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  let EBData = [
    {
      imageSrc:
        "https://cdn.sanity.io/images/gxmub2ol/redesign-2024/323f01991151150ad79af6aa37c5adee11b2b555-6720x4480.jpg/391A0654%20(3).jpg?rect=1619,0,4274,4480&fp-x=0.5561386855332169&fp-y=0.5&w=320&h=560&fit=crop&crop=focalpoint&auto=format",
      title: "Consumer Tech",
      description:
        "We backed FirstCry's omnichannel approach when it was not in vogue, and the need for a vertical player in the category was questioned.",
    },
    {
      imageSrc:
        "https://cdn.sanity.io/images/gxmub2ol/redesign-2024/b42348d08b6fe9b630d9e2e8318d0ad6fc49f144-1416x1800.jpg/hero_paytm_portrait.jpg?rect=0,394,1416,754&fp-x=0.5&fp-y=0.4284832304936305&w=320&h=170&fit=crop&crop=focalpoint&auto=format",
      title: "Fintech & Financial Services",
      description:
        "We backed Harsha's logistics-first vision for food delivery in 2015 when the space was hyper-competitive with multiple well-funded teams.",
    },
    {
      imageSrc:
        "https://cdn.sanity.io/images/gxmub2ol/redesign-2024/757a756697d207e5ffcb602cccafd3c261148adb-3739x3628.jpg/Healthcare%20Delivery.jpg?rect=4,0,3733,3628&w=320&h=311&auto=format",
      title: "Healthcare",
      description:
        "We invested in Meesho when e-commerce in India looked overcrowded, partnered through their pivot to a horizontal platform as they became India's largest true e-commerce marketplace.",
    },
    {
      imageSrc:
        "https://cdn.sanity.io/images/gxmub2ol/redesign-2024/6c95797e1e75310413bf7044e5d99e0465ca729e-1280x854.webp/Mettle_Liquid_Lipstick.webp?rect=0,360,1280,462&fp-x=0.5&fp-y=0.6927201008324513&w=320&h=116&fit=crop&crop=focalpoint&auto=format",
      title: "Consumer Brands",
      description:
        "We backed Paytm's pivot in 2010 from a mobile VAS company, partnered across stages, investing >$100M through the journey.",
    },
    {
      imageSrc:
        "https://cdn.sanity.io/images/gxmub2ol/redesign-2024/16928471754e4170bb12f41e4963bb6d34318e79-1848x1458.png/Screenshot%202024-10-15%20at%201.13.06%E2%80%AFAM.png?rect=0,570,1848,679&fp-x=0.5&fp-y=0.6274324482143568&w=320&h=118&fit=crop&crop=focalpoint&auto=format",
      title: "B2B SaaS + AI",
      description:
        "We partnered with PlaySimple from when they had only two titles to one of the biggest gaming exits in the Indian startup ecosystem.",
    },
    {
      imageSrc:
        "https://cdn.sanity.io/images/gxmub2ol/redesign-2024/e8ee158bd9f9302c6aedc723e8cbc764ce214f26-928x1232.png/image.png?rect=0,95,928,437&fp-x=0.5&fp-y=0.24949761212624627&w=320&h=151&fit=crop&crop=focalpoint&auto=format",
      title: "Frontier Tech",
      description:
        "We invested in Urban Company during their MVP days and doubled down as they became full-stack, going against conventional wisdom.",
    },
  ];

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-gradient-to-bt from-gray-50 to-white text-black py-12 flex w-full flex-col"
    >
      <div className="px-10 lg:px-12  w-full flex flex-col">
        <motion.h1
          variants={textVariants}
          className="text-[45px] lg:text-6xl font-semibold"
        >
          Built on Expertise
        </motion.h1>
        <motion.p
          variants={textVariants}
          className="mt-6  mb-10 text-lg lg:text-xl leading-relaxed lg:max-w-lg"
        >
          Our investment team, with over 20 years of expertise, inspires and
          shapes possibilities with you.
        </motion.p>
      </div>
      <motion.div variants={containerVariants}>
        <div className="mt-10 flex flex-col md:flex-row gap-[14px] px-5 lg:px-8 w-full">
          {EBData.map((data, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="flex flex-col bg-[#1e1e2e] w-full md:w-[16.3vw] overflow-hidden shadow-lg relative brightness-65 hover:brightness-100 cursor-pointer"
            >
              <img
                src={data.imageSrc}
                alt={data.title}
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="p-2 flex flex-col flex-grow absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full pt-5">
                <h4 className="text-smlg:text-lg font-medium mb-2 text-white">
                  {data.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ExpertiseBuild;
