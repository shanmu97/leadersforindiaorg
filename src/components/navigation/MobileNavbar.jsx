import { Plus } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function MobileNavbar({
  currentRoute,
  isAboutMenuOpen,
  setIsAboutMenuOpen,
  isFocusAreasMenuOpen,
  setIsFocusAreasMenuOpen,
  isMobileMenuOpen,
  handleNavClick,
}) {
  if (!isMobileMenuOpen) return null;

  return (
    <div className="mt-4 md:hidden bg-white">
      <div className="flex flex-col space-y-4 p-4 shadow-md rounded-lg bg-white">
        <div>
          <button
            className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900"
            onClick={() => setIsAboutMenuOpen(!isAboutMenuOpen)}
          >
            <span>About</span>
            <Plus className="ml-1 w-4 h-4" />
          </button>
          {isAboutMenuOpen && (
            <div className="pl-4 mt-2 space-y-2">
              <NavLink
                to="#"
                className="block text-gray-700 hover:text-gray-900"
              >
                Our Story
              </NavLink>
              <NavLink
                to="#"
                className="block text-gray-700 hover:text-gray-900"
              >
                Philosophy
              </NavLink>
              <NavLink
                to="#"
                className="block text-gray-700 hover:text-gray-900"
              >
                Process
              </NavLink>
            </div>
          )}
        </div>

        <button
          onClick={() => handleNavClick("portfolio")}
          className={`text-left hover:text-gray-900 ${
            currentRoute === "portfolio"
              ? "text-purple-500 font-medium"
              : "text-gray-700"
          }`}
        >
          Portfolio
        </button>

        <NavLink
          to="/team"
          className={`text-left hover:text-gray-900 ${
            currentRoute === "team"
              ? "text-purple-500 font-medium"
              : "text-gray-700"
          }`}
        >
          Team
        </NavLink>

        <button
          onClick={() => handleNavClick("office")}
          className={`text-left hover:text-gray-900 ${
            currentRoute === "office"
              ? "text-purple-500 font-medium"
              : "text-gray-700"
          }`}
        >
          Office
        </button>

        <NavLink to="#" className="text-gray-700 hover:text-gray-900">
          Companies
        </NavLink>

        <div>
          <button
            className="flex items-center justify-between w-full text-purple-500 hover:text-purple-700"
            onClick={() => setIsFocusAreasMenuOpen(!isFocusAreasMenuOpen)}
          >
            <span>Focus Areas</span>
            <Plus className="ml-1 w-4 h-4" />
          </button>
          {isFocusAreasMenuOpen && (
            <div className="pl-4 mt-2 space-y-2">
              <NavLink
                to="#"
                className="block text-gray-700 hover:text-gray-900"
              >
                AI & Machine Learning
              </NavLink>
              <NavLink
                to="#"
                className="block text-gray-700 hover:text-gray-900"
              >
                Enterprise
              </NavLink>
              <NavLink
                to="#"
                className="block text-gray-700 hover:text-gray-900"
              >
                Consumer
              </NavLink>
              <NavLink
                to="#"
                className="block text-gray-700 hover:text-gray-900"
              >
                Health
              </NavLink>
            </div>
          )}
        </div>

        <NavLink to="#" className="text-gray-700 hover:text-gray-900">
          Insights
        </NavLink>
      </div>
    </div>
  );
}
