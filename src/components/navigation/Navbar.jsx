import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import InvestmentTicker from "./InvestmentTicker";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
    const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
    const [isFocusAreasMenuOpen, setIsFocusAreasMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showTicker, setShowTicker] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();
    const currentRoute = location.pathname === "/" ? "home" : location.pathname.slice(1);

    const handleNavClick = (route) => {
        navigate(route === "home" ? "/" : `/${route}`);
        setIsMobileMenuOpen(false);
        setIsAboutMenuOpen(false);
        setIsFocusAreasMenuOpen(false);
    };

    const vanillaSansClass =
        "font-['Vanilla_Sans','Vanilla','Inter','Helvetica_Neue',Helvetica,Arial,sans-serif]";

    return (
        <>
            <InvestmentTicker showTicker={showTicker} setShowTicker={setShowTicker} />

            <nav
                className={`fixed left-0 right-0 z-40 bg-white shadow-sm ${showTicker ? "top-[30px]" : "top-0"
                    } ${vanillaSansClass}`}
            >
                <div className="px-4 h-[91px] w-full flex flex-between font-semibold text-[16px] md:px-8 lg:px-16">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center bg-white  min-w-[260px]">
                            <button
                                onClick={() => handleNavClick("home")}
                                className="text-black w-[120px] text-2xl font-semibold mr-2 flex items-center space-x-2"
                            >
                                <img src="/logo.png" alt="Logo" className="h-18 w-auto rounded-full" />
                                <p className="text-lg lg:text-2xl">Leadersforindia.org</p>
                            </button>
                        </div>

                        <DesktopNavbar
                            currentRoute={currentRoute}
                            isAboutMenuOpen={isAboutMenuOpen}
                            setIsAboutMenuOpen={setIsAboutMenuOpen}
                            isFocusAreasMenuOpen={isFocusAreasMenuOpen}
                            setIsFocusAreasMenuOpen={setIsFocusAreasMenuOpen}
                            handleNavClick={handleNavClick}
                            vanillaSansClass={vanillaSansClass}
                        />
                        {/* Mobile Menu open button */}
                        <button
                            className="md:hidden cursor-pointer flex items-center"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    <MobileNavbar
                        currentRoute={currentRoute}
                        isAboutMenuOpen={isAboutMenuOpen}
                        setIsAboutMenuOpen={setIsAboutMenuOpen}
                        isFocusAreasMenuOpen={isFocusAreasMenuOpen}
                        setIsFocusAreasMenuOpen={setIsFocusAreasMenuOpen}
                        isMobileMenuOpen={isMobileMenuOpen}
                        handleNavClick={handleNavClick}
                    />
                </div>
            </nav>

            <div style={{ paddingTop: showTicker ? "72px" : "52px" }} />
        </>
    );
}
