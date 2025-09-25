import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function InvestmentFAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  const faqs = [
    {
      question: "What kind of companies do you invest in?",
      answer: "We focus on early-stage technology companies with high growth potential, particularly in AI, climate tech, healthcare, and enterprise software. We look for innovative solutions addressing significant market needs with strong founding teams."
    },
    {
      question: "What's your investment process like?",
      answer: "Our investment process typically involves an initial screening, followed by in-depth meetings with the founding team. We conduct thorough due diligence on the market, technology, and business model. Final investment decisions are made collaboratively by our partnership, with term sheets typically issued within 3-4 weeks of our first meeting."
    },
    {
      question: "How do you support founders?",
      answer: "Beyond capital, we provide hands-on operational support, strategic guidance, and access to our extensive network. Our platform team helps with recruiting, business development, marketing, and fundraising. We hold regular check-ins with portfolio companies and remain actively involved throughout their growth journey."
    },
    {
      question: "What's unique about leadersforindiaorg?",
      answer: "leadersforindiaorg takes a founder-first approach with flexible capital across stages and sectors. We're known for our global perspective, backing companies across 35+ countries. Our concentrated portfolio strategy allows us to provide meaningful support to each company, and we have a strong track record of backing category-defining companies early."
    },
    {
      question: "Who are your limited partners?",
      answer: "Our limited partners include prestigious university endowments, philanthropic foundations, sovereign wealth funds, and family offices. We maintain a diverse LP base that shares our long-term investment philosophy and provides valuable connections to our portfolio companies."
    }
  ];

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="mx-[20px] xl:mx-20 bg-white mt-40">
      <motion.h1 
        variants={itemVariants}
        className='font-[500] text-2xl lg:text-4xl mb-6 lg:mb-10'>
        The LeadersForIndiaOrg FAQ Starter Pack
      </motion.h1>
      <motion.div 
        variants={itemVariants}
        className='border-b border-black mb-[10px] pb-4'>
      </motion.div>
      <motion.div 
        variants={containerVariants}
        className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="border-b border-black py-8"
          >
            {/* Two Column Layout - Question and Answer */}
            <motion.div 
              className="flex flex-col md:flex-row gap-8"
              variants={itemVariants}>
              {/* Left Column - Question */}
              <motion.div 
                className="md:w-1/2"
                variants={itemVariants}>
                <motion.h2 
                  className="text-3xl font-bold text-gray-900 leading-tight">
                  {faq.question}
                </motion.h2>
              </motion.div>
              
              {/* Right Column - Answer (always shown) */}
              <motion.div 
                className="md:w-1/2"
                variants={itemVariants}>
                <motion.p 
                  className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  {faq.answer}
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}