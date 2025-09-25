import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function InsightsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  const insights = [
    {
      id: 1,
      title: "Investing in Exowatt",
      imageUrl: "/img1.png",
      alt: "Exowatt container"
    },
    {
      id: 2,
      title: "AI is here to transform security services",
      imageUrl: "/img2.png",
      alt: "Cybersecurity workforce visualization showing 5.5M current workforce, 4.8M gap, with a total needed workforce of 10.2M"
    },
    {
      id: 3,
      title: "Paul Copplestone on building for builders",
      imageUrl: "/footerimg0.png",
      alt: "Paul Copplestone, CEO & Co-Founder of Supabase"
    }
  ];

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-purple-100 mt-[40px] rounded-2xl xl:mx-30 p-8 md:p-12 lg:p-16 mb-4 lg:mb-12">
      <motion.div className="max-w-7xl mx-auto">
        <motion.h2 
          variants={cardVariants}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-16">
          Insights
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <motion.div 
              key={insight.id} 
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="flex flex-col">
              <motion.h3 
                variants={cardVariants}
                className="text-xl font-medium text-gray-800 mb-4">
                {insight.title}
              </motion.h3>
              
              <motion.div 
                variants={imageVariants}
                className="relative mb-4 overflow-hidden rounded-lg aspect-video">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={insight.imageUrl} 
                  alt={insight.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div 
                variants={cardVariants}
                className="mt-auto">
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="flex items-center font-medium text-gray-700 hover:text-gray-900 transition-colors">
                  <span className="mr-2">READ MORE</span>
                  <ArrowRight size={18} />
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="flex justify-center mt-16">
          <button className="px-8 py-3 border border-gray-700 rounded-full text-gray-700 font-medium hover:bg-gray-100 transition-colors">
            MORE STORIES
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}