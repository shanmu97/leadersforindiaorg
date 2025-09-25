import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Landing() {
  // Ref to trigger animations for the entire component
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Using 'once: true' for the main landing page content.

  // text and content animation
  const slideIn = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: {
      duration: 2.8,
      ease: "easeOut",
    },
  };

  // image animations
  const imagePopIn = {
    initial: { scale: 0.5, opacity: 0, rotate: -15 },
    animate: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1.0,
        ease: "easeOut",
      },
    },
  };

  const images = [
    "/Landing/image5.jpg",
    "/Landing/image4.jpg",
    "/Landing/image3.jpg",
    "/Landing/image2.jpg",
    "/Landing/image1.jpg",
  ];

 const companies = [
  {
    name: "Ecosystem Ventures",
    logo: "https://ecosystemventures.in/wp-content/uploads/2020/11/logo.jpeg",
  },
  {
    name: "Speciale Invest",
    logo: "https://pbs.twimg.com/profile_images/1729030357700448256/IB7N_8tm_400x400.png",
  },
  {
    name: "Zeropearl VC",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQHe_CmXRhLhOA/company-logo_200_200/B56ZZJECCyGcAI-/0/1744982516339/zeropearlvc_logo?e=2147483647&v=beta&t=hhOt_q9QWHX96WE6NcwehFqFv0udZJhCE6eFtlkrE2M",
  },
  {
    name: "Westbridge Capital",
    logo: "https://resources.pmsbazaar.com/amc-logo/2021/WSA%20Logo.png",
  },
  {
    name: "ISF Network",
    logo: "https://www.isfnetwork.org/wp-content/uploads/2024/03/isf-logo-festival-2024.png",
  },
  {
    name: "Powered by Huddle",
    logo: "https://media.licdn.com/dms/image/v2/C510BAQFKt8tWDCcL3Q/company-logo_200_200/company-logo_200_200/0/1630567273224/poweredbyhuddle_logo?e=2147483647&v=beta&t=Vl31LvPdjcLISmyauAPuoJrptvGM8Ie0XIC1gLqw3gM",
  },
  {
    name: "100x VC",
    logo: "https://cdn.prod.website-files.com/6714bf9ff367de40beb7121f/6714c3e1d76cda9208d977a1_Logo.webp",
  },
  {
    name: "Anthill Ventures",
    logo: "https://static.theprint.in/wp-content/uploads/2021/08/anthill-ventures-announces-eight-start-ups-for-indus-x-indias-first-global-smart-city-scaling-program.jpg",
  },
];


  const duplicatedCompanies = [...companies, ...companies];

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Animation for the company logos section
  const companiesInViewRef = useRef(null);
  const companiesIsInView = useInView(companiesInViewRef, {
    once: true,
    amount: 0.5, // Trigger when 50% of the element is in view
  });

  const companyVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"} // Animate the entire section when it comes into view
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-white mt-12 w-full landing-section"
    >
      <div className="max-w-[1400px] mx-auto px-4 py-12">
        <motion.div
          initial="initial"
          animate="animate"
          className="text-center mb-4 flex flex-col items-center"
        >
          <motion.h1
            variants={slideIn}
            className="text-4xl md:text-6xl font-bold text-we text-gray-900 mb-4 leading-tight"
          >
            THE TRUSTED PARTNER IN YOUR
            <br />
            Wealth Creation JOURNEY
          </motion.h1>
          <motion.p
            variants={slideIn}
            transition={{ delay: 0.3 }}
            className="text-xl/relaxed max-w-5xl text-center text-gray-600 mb-8"
          >
            Cross leverage businesses and invest smartly for high returns by
            joining our. Members Only Exclusive Community! A place where leading
            Investors combine forces
          </motion.p>
        </motion.div>

        <div className="flex items-center justify-center p-8 lg:p-4 w-full">
          <div className="relative w-full flex items-center justify-center">
            {/* Far left image - base layer */}
            <motion.div
              variants={imagePopIn}
              className="relative z-10 bg-white rounded-xl hidden lg:block shadow-lg overflow-hidden"
            >
              <motion.img
                src={images[0]}
                alt="Gallery image 1"
                className="w-60 h-80 lg:w-80 lg:h-[360px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Left image - overlaps 40% of far left, slightly taller */}
            <motion.div
              variants={imagePopIn}
              className="relative -ml-24 z-20 bg-white rounded-xl hidden lg:block shadow-lg overflow-hidden"
            >
              <motion.img
                src={images[1]}
                alt="Gallery image 2"
                className="w-60 h-84 lg:w-80 lg:h-[400px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Center image - overlaps 40% of left, tallest */}
            <motion.div
              variants={imagePopIn}
              className="relative lg:-ml-24 z-30 bg-white rounded-xl shadow-xl overflow-hidden"
            >
              <motion.img
                src={images[2]}
                alt="Main gallery image"
                className="w-full h-96 lg:w-[750px] lg:h-[440px] object-cover lg:object-fill"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Right image - overlaps 40% of center, shorter than center */}
            <motion.div
              variants={imagePopIn}
              className="relative -ml-28 z-20 bg-white rounded-xl hidden lg:block shadow-lg overflow-hidden"
            >
              <motion.img
                src={images[3]}
                alt="Gallery image 4"
                className="w-60 h-84 lg:w-80 lg:h-[400px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Far right image - overlaps 40% of right, shortest on right */}
            <motion.div
              variants={imagePopIn}
              className="relative -ml-24 z-10 bg-white rounded-xl hidden lg:block shadow-lg overflow-hidden"
            >
              <motion.img
                src={images[4]}
                alt="Gallery image 5"
                className="w-60 h-80 lg:w-80 lg:h-[360px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          ref={companiesInViewRef}
          initial="hidden"
          animate={companiesIsInView ? "visible" : "hidden"}
          variants={companyVariants}
          className="w-full py-8 flex flex-col justify-center overflow-hidden"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
            className="mb-6 lg:mb-0"
          >
            <h2 className="text-sm lg:text-2xl font-bold text-gray-800 mb-6">
              Venture Partners
            </h2>
          </motion.div>

          <div className="relative overflow-hidden bg-white py-6 w-full">
            <div className="flex whitespace-nowrap animate-scroll">
              {duplicatedCompanies.map((company, index) => (
                <motion.div
                  key={`${company.name}-${index}`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="flex items-center justify-center mx-8 min-w-[150px] flex-shrink-0"
                >
                  <div className="flex flex-col items-center">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-12 w-auto object-contain mb-2"
                    />
                    <span className="text-sm font-semibold text-gray-700 tracking-wide">
                      {company.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <style>{`
          @keyframes scroll {
              0% {
                  transform: translateX(0);
              }
              100% {
                  transform: translateX(-160%);
              }
          }
          
          .animate-scroll {
              animation: scroll 25s linear infinite; /* Increased duration to 25s for a much slower scroll */
          }
        `}</style>
      </div>
    </motion.div>
  );
}