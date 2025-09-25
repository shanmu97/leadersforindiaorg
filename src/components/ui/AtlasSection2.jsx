import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AtlasSection2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const tabs = [
    {
      id: "science",
      title: "Science First",
      heading:
        "We leverage the entire Atlas ecosystem to build platform and product companies",
      highlightWord: "ecosystem",
      description:
        "Our science-first approach drives innovation across the entire ecosystem, enabling breakthrough discoveries and transformative solutions.",
      image:
        "https://ecskrgnm8g8.exactdn.com/wp-content/uploads/2023/10/approach-science.jpg?strip=all&lossy=0&w=1371&ssl=1",
    },
    {
      id: "discover",
      title: "Discover",
      heading:
        "We work shoulder-to-shoulder with Entrepreneurs-In-Residence (EIRs) to identify transformative innovation from around the world",
      highlightWord: "transformative",
      description:
        "We discover new possibilities through rigorous scientific methodology and collaborative research initiatives.",
      image:
        "https://ecskrgnm8g8.exactdn.com/wp-content/uploads/2023/10/approach-discover.jpg?strip=all&lossy=0&w=1371&ssl=1p",
    },
    {
      id: "shape",
      title: "Shape",
      heading:
        "We leverage the entire Atlas ecosystem to build platform and product companies",
      highlightWord: "platform",
      description:
        "We shape ideas into reality, transforming concepts into scalable solutions that drive meaningful change.",
      image:
        "https://ecskrgnm8g8.exactdn.com/wp-content/uploads/2023/10/approach-shape.jpg?strip=all&lossy=0&w=1371&ssl=1",
    },
    {
      id: "build",
      title: "Build",
      heading:
        "From innovation to commercialization, we are long-term partners, providing guidance, resources, and capital at every stage",
      highlightWord: "partners",
      description:
        "We build robust platforms and products that stand the test of time, focusing on sustainability and scalability.",
      image:
        "https://ecskrgnm8g8.exactdn.com/wp-content/uploads/2023/11/Untitled-design.jpg?strip=all&lossy=0&w=1371&ssl=1",
    },
  ];

  const renderHeadingWithHighlight = (heading, highlightWord) => {
    if (!highlightWord) return heading;

    const regex = new RegExp(`\\b(${highlightWord})\\b`, "gi");
    const parts = heading.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === highlightWord.toLowerCase() ? (
        <span key={index} className="text-cyan-500">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section ref={ref} className="w-full flex flex-col space-y-16 py-12 px-8 md:px-16">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          < div className="p-8" variants={itemVariants}>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              {renderHeadingWithHighlight(tab.heading, tab.highlightWord)}
            </h2>
            <p className="text-gray-700">{tab.description}</p>
          </ div>
          < div
            className="h-[350px] lg:h-[430px] w-full"
            variants={tabVariants}
          >
            <img
              src={tab.image}
              alt={tab.title}
              className="w-full h-full object-cover transition-all duration-500 ease-in-out"
            />
          </ div>
        </ div>
      ))}
    </section>
  );
};

export default AtlasSection2;
