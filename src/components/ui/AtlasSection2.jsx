import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  const [activeTab, setActiveTab] = useState("discover");

  const tabs = [
    {
      id: "science",
      title: "Science First",
      heading:
        "To Power various High Growth Startups Exponentially by Synergizing the Network and Leveraging Resources for Mutual Benefits.",
      highlightWord: "Exponentially",
      description:
        "To Power various High Growth Startups Exponentially by Synergizing the Network and Leveraging Resources for Mutual Benefits.",
      image:
        "https://assets.zyrosite.com/AVLp50azvjuGW6LP/449694842_1012221503818754_29286937262472881_n-mv02J7KaMacgXEK8.jpg",
    },
    {
      id: "discover",
      title: "Discover",
      heading:
        "To Bridge the Gap between Business Owners, Entrepreneurs and Angel Investors pan-India by untapping the financial and technical resources.",
      highlightWord: "pan-India",
      description:
        "We discover new possibilities through rigorous scientific methodology and collaborative research initiatives.",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=388,fit=crop/AVLp50azvjuGW6LP/image-1645-dJo5WbLVxMF7enzj.png",
    },
    {
      id: "shape",
      title: "Shape",
      heading:
        "Cross leverage businesses and invest smartly for high returns by joining our Members Only Exclusive Community! A place where leading Investors combine forces",
      highlightWord: "Community",
      description:
        "We shape ideas into reality, transforming concepts into scalable solutions that drive meaningful change.",
      image:
        "https://i.ytimg.com/vi/L4dNWNaYtmg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDIfOj8QWkn1vV_ha0OD-W9I9MWqA",
    },
    {
      id: "build",
      title: "Build",
      heading:
        "We connect members to vetted startup deals and curated ventures. Our diligence frames around the 5M principle: Manpower, Methodology, Market, Mentoring, and Money.",
      highlightWord: "5M principle",
      description:
        "We build robust platforms and products that stand the test of time, focusing on sustainability and scalability.",
      image:
        "https://media.licdn.com/dms/image/v2/D5622AQG-0RBsaiC18w/feedshare-shrink_800/feedshare-shrink_800/0/1702898546039?e=2147483647&v=beta&t=8UPsig6hk-vmrFOenIzryRwjrzLMU1Gf13zr0zDKR0A",
    },
  ];

  const renderHeadingWithHighlight = (heading, highlightWord) => {
    if (!highlightWord) {
      return heading;
    }

    const regex = new RegExp(`\\b(${highlightWord})\\b`, "gi");
    const parts = heading.split(regex);

    return parts.map((part, index) => {
      if (part.toLowerCase() === highlightWord.toLowerCase()) {
        return (
          <span key={index} className="text-cyan-500">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
        <div className="w-full">
      {/* Heading at the top */}
      <h2 className="text-4xl font-semibold text-gray-900 mb-8 px-8 py-4">
        Our Atlas Approach
      </h2>
    <div
      className=" inset-0 w-full h-full bg-transparent flex items-end justify-center z-50 overflow-hidden"

    >
      <div className="flex w-full h-[88vh] bg-gray-100">
        <div className=" md:w-80 lg:w-[36%] bg-gradient-to-b from-cyan-800 to-cyan-900 flex flex-col">
          {tabs.map((tab, index) => (
            <div
              key={tab.id}
              className={`flex-1 relative cursor-pointer transition-all duration-300 ease-in-out ${
                activeTab === tab.id
                  ? "bg-cyan-600 shadow-lg"
                  : "hover:bg-cyan-600/70"
              }`}
              onMouseEnter={() => setActiveTab(tab.id)}
            >
              <div className="h-full flex items-center justify-between px-8 relative">
                <div className="text-white">
                  <h3 className="text-lg md:text-2xl font-light tracking-wide">
                    {tab.title}
                  </h3>
                </div>

                <ArrowUpRight
                  className={`text-white w-9 md:w-16 h-9 md:h-16 transition-transform duration-300 ease-in-out font-thin ${
                    activeTab === tab.id ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={0.6}
                />
              </div>

              {activeTab === tab.id && (
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full">
                  <div className="w-0 h-0 border-l-[20px] border-l-teal-600 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent"></div>
                </div>
              )}

              {index < tabs.length - 1 && (
                <div className="absolute bottom-0 left-8 right-8 h-px bg-teal-500/30"></div>
              )}
            </div>
          ))}
        </div>

        <div className="flex-1 lg:w-[64%] relative bg-gray-50 flex flex-col">
          <div className="flex-1 flex items-start justify-start px-16 py-12">
            <div className="max-w-3xl">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-[350] text-gray-900 leading-tight">
                {renderHeadingWithHighlight(
                  activeTabData.heading,
                  activeTabData.highlightWord
                )}
              </h1>
            </div>
          </div>

          <div className="h-[350px] lg:h-[430px] w-full">
            <img
              src={activeTabData.image}
              alt={activeTabData.title}
              className="w-full h-full object-cover transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AtlasSection2;
