import { useState } from 'react';
import Marquee from 'react-fast-marquee';

export default function TestimonialSlider() {
  const [showAll, setShowAll] = useState(false);
  
  const testimonials = [
    {
      id: 1,
      text: "From a founder's perspective, so much trust is involved when you work with an investor. You are really vulnerable to all kinds of things, so trust is the number one aspect to consider when evaluating a potential partner. I was super excited to work with leadersforindiaorg for the third time. There's no substitute for 10 years of working together.",
      author: "Max Biewald",
      title: "CEO AND CO-FOUNDER, WEIGHTS & BIASES"
    },
    {
      id: 2,
      text: "Anytime we have an ask, the team at leadersforindiaorg is incredibly efficient. They bring so much energy to the table, and that's exactly what you want from a partner. The team has worked with us to build the kind of culture and go-to-market strategy that will allow us to build a generational company.",
      author: "Paul Copplestone",
      title: "CEO AND CO-FOUNDER, SUPABASE"
    },
    {
      id: 3,
      text: "The leadersforindiaorg team worked really hard to understand our business, and there's no commercial analog for what we do. The team was really quick to thoughtfully understand us, the company, the opportunity, and the industry. They flew across the country to have some barbecue and discuss defense problems, which said a lot to us.",
      author: "Nini Hamrick",
      title: "PRESIDENT & CO-FOUNDER, VANNEVAR LABS"
    }
  ];

  const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 mx-4 max-w-md min-w-80 border border-gray-200 mb-10">
      <div className="mb-4">
        <svg className="w-7 h-7 text-gray-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
        </svg>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          "{testimonial.text}"
        </p>
      </div>
      <div className="border-t pt-4">
        <h4 className="font-semibold text-gray-900 text-sm">{testimonial.author}</h4>
        <p className="text-gray-600 text-xs uppercase tracking-wide mt-1">{testimonial.title}</p>
      </div>
    </div>
  );

  return (
    <div className="max-w-screen-xl mx-auto py-8">
      <div className="flex justify-between items-center mb-8 px-4">
        <h1 className="text-4xl font-bold text-gray-800">
          {showAll ? "Founders on leadersforindiaorg" : "What founders say about us"}
        </h1>
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="flex items-center px-4 py-2 rounded hover:bg-gray-100 transition-colors group"
          >
            <span className="mr-2 text-sm font-medium">SEE ALL</span>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        )}
        {showAll && (
          <button
            onClick={() => setShowAll(false)}
            className="flex items-center px-4 py-2 rounded hover:bg-gray-100 transition-colors"
          >
            <span className="mr-2 text-sm font-medium">SHOW LESS</span>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
        )}
      </div>
      
      {showAll ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      ) : (
        <Marquee direction="left" speed={45} pauseOnHover={true} gradient={false}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Marquee>
      )}
    </div>
  );
}