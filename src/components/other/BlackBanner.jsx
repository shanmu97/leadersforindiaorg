import jtl1 from "../../assets/jtl1.jpg";
import jtl2 from "../../assets/jtl2.jpg";
import jtr from "../../assets/jtr.jpg";
import jb from "../../assets/jb.svg";

export default function BlackBanner() {
  return (
    <div style={{ backgroundColor: "#1b1a1b" }}>
      {/* First Section - Get to know the team */}

      {/* Second Section - Commercial office space */}
      <section className="bg-[#f9f7ef] relative">
        <div className="container mx-auto px-4">
          <div className="pt-8 pb-28 max-lg:pb-24">
            <div className="flex max-lg:flex-col lg:gap-12 justify-between items-center">
              {/* Left Content */}
              <div className="flex flex-col h-full lg:max-w-[544px] gap-2">
                <div className="w-full max-md:flex max-md:flex-col max-md:gap-3 relative">
                  <h3 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                    Strength in numbers Backed by real results
                  </h3>
                </div>
                <div className="flex flex-col items-start gap-2 lg:gap-3 pt-0 lg:pt-2">
                  <div className="text-black text-lg leading-relaxed">
                    <p>
                      <span className="font-normal">
                        At LIO, we’re more than a network — we’re a trusted
                        community of investors, founders, and operators.
                        Together, we’ve evaluated hundreds of opportunities and
                        deployed capital into some of India’s fastest-growing
                        startups.
                      </span>
                    </p>
                  </div>
                  <a
                    className="inline-flex items-center justify-center px-4 py-2 bg-[#3637f4] text-white font-semibold rounded-lg hover:bg-[#2c2dd4] transition-all duration-300 transform hover:scale-105"
                    href="https://nomadgroup.io/solutions/"
                    target="_self"
                    aria-label="Go to Learn more"
                  >
                    Join our Community
                  </a>
                </div>
              </div>

              {/* Stats Panel */}
              <div className="lg:w-auto w-full lg:flex-shrink-0">
                <div className="lg:min-w-[500px] w-full flex flex-col justify-center gap-8 lg:gap-12">
                  {/* Stat 1 */}
                  <div className="flex flex-col">
                    <div className="flex justify-between items-baseline text-black gap-8">
                      <h2
                        className="text-6xl lg:text-7xl font-bold"
                        style={{ color: "#ede04c" }}
                      >
                        25000<span className="text-5xl lg:text-6xl">+</span>
                      </h2>
                      <p className="text-lg lg:text-xl font-normal">
                        Crores combined net worth
                      </p>
                    </div>
                    <div className="w-full h-px bg-gray-600 mt-4"></div>
                  </div>

                  {/* Stat 2 */}
                  <div className="flex flex-col">
                    <div className="flex justify-between items-baseline text-black">
                      <h2
                        className="text-6xl lg:text-7xl font-bold"
                        style={{ color: "#ede04c" }}
                      >
                        <span className="text-5xl lg:text-6xl">₹51.38 Cr</span>
                      </h2>
                      <p className="text-lg lg:text-xl font-normal">
                        Capital Deployed
                      </p>
                    </div>
                    <div className="w-full h-px bg-gray-600 mt-4"></div>
                  </div>

                  {/* Stat 3 */}
                  <div className="flex flex-col">
                    <div className="flex justify-between items-baseline text-black">
                      <h2
                        className="text-6xl lg:text-7xl font-bold"
                        style={{ color: "#ede04c" }}
                      >
                        25
                        
                      </h2>
                      <p className="text-lg lg:text-xl font-normal">
                        Business Funded
                      </p>
                    </div>
                    <div className="w-full h-px bg-gray-600 mt-4"></div>
                  </div>

                  {/* Stat 4 */}
                  <div className="flex flex-col">
                    <div className="flex justify-between items-baseline text-black">
                      <h2
                        className="text-6xl lg:text-7xl font-bold"
                        style={{ color: "#ede04c" }}
                      >
                        850
                        <span className="text-5xl lg:text-6xl">+</span>
                      </h2>
                      <p className="text-lg lg:text-xl font-normal">
                        Opportunities Evaluated
                      </p>
                    </div>
                    <div className="w-full h-px bg-gray-600 mt-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorative Element */}
        <div className="absolute bottom-0 left-0 lg:w-80 w-40 opacity-80">
          <img
            className="object-contain w-full h-full"
            src={jb}
            alt="Decorative background element"
          />
        </div>
      </section>

      <section className="bg-[#f9f7ef] relative max-xl:pb-52 mb-[-1px]">
        <div className="container mx-auto px-4">
          <div className="pt-20 pb-20">
            <div className="relative flex flex-col items-center justify-center overflow-hidden text-center h-full lg:p-16 py-10 px-6 rounded-lg lg:h-[440px]">
              <div className="lg:max-w-[528px] mx-auto flex flex-col items-center justify-center gap-9 transition-all">
                <div className="flex flex-col gap-6">
                  <div className="w-full max-md:flex max-md:flex-col max-md:gap-3 relative text-center">
                    <h3 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                      Get to know the team at Leader for india organistion
                    </h3>
                  </div>
                  <div className="flex flex-col items-center gap-6 lg:gap-9">
                    <div className="text-black text-lg leading-relaxed">
                      <p>
                        <span className="font-normal">
                          A powerhouse of investors, founders, and CXOs — united
                          to back you with capital, expertise, and connections.
                          From strategy to hiring to market access, we stand
                          beside every founder we back. For investors, we bring
                          curated diligence, operator insights, and trusted
                          co-investors into every deal.
                        </span>
                      </p>
                    </div>
                    <a
                      className="inline-flex items-center justify-center px-4 py-2 bg-[#3637f4] text-white font-semibold rounded-lg hover:bg-[#2c2dd4] transition-all duration-300"
                      href="/about-us/"
                      aria-label="Go to Learn more"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Left side decorative elements - hidden on mobile */}
        <div className="xl:block hidden">
          <div className="absolute top-40 left-0 w-60 h-62 overflow-hidden">
            <svg
              className="object-cover w-full h-auto"
              width="240"
              height="248"
              viewBox="0 0 240 248"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0H236C238.209 0 240 1.79086 240 4V244C240 246.209 238.209 248 236 248H0V0Z"
                fill="#FF8C60"
              ></path>
            </svg>
          </div>
          <div className="absolute top-60 left-16 w-[296px] h-[328px] overflow-hidden rounded-lg">
            <img
              className="object-cover h-auto w-full"
              src={jtr}
              alt="Office interior - studio space"
            />
          </div>
        </div>

        {/* Right side decorative elements */}
        <div className="absolute xl:top-20 bottom-12 xl:bottom-auto max-xl:right-0 xl:right-0">
          <div className="w-80 h-56 overflow-hidden rounded-lg">
            <img
              className="object-cover h-full w-auto"
              src={jtl2}
              alt="Kitchen area candid shot"
            />
          </div>
          <div className="absolute xl:top-40 top-16 xl:right-48 right-70 w-40 h-46 overflow-hidden rounded-lg">
            <img
              className="object-cover h-full w-auto"
              src={jtl1}
              alt="Studio office space"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
