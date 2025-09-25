import React, { useEffect, useState } from "react";
import AtlasSection1 from "../ui/AtlasSection1";
import AtlasSection2 from "../ui/AtlasSection2";

const OverlappingScrollSections = () => {
  const [scrollY, setScrollY] = useState(0);
  const [sectionRef, setSectionRef] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef) {
        const rect = sectionRef.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const relativeScrollY = window.scrollY - sectionTop;
        setScrollY(Math.max(0, relativeScrollY));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRef]);

  // Calculate how much Section 2 should slide up, only when this section is in view
  const section2Transform = Math.max(
    0,
    Math.min(100, (scrollY / window.innerHeight) * 100)
  );

  return (
    <div
      ref={setSectionRef}
      className="relative w-full"
      style={{ height: "150vh" }} // Container for the scroll effect
    >
      <AtlasSection1>
        <AtlasSection2 section2Transform={section2Transform} />
      </AtlasSection1>
    </div>
  );
};

export default OverlappingScrollSections;
