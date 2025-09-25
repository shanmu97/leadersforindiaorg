import { Plus } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function DesktopNavbar({
  currentRoute,
  isAboutMenuOpen,
  setIsAboutMenuOpen,
  isFocusAreasMenuOpen,
  setIsFocusAreasMenuOpen,
  handleNavClick,
  vanillaSansClass,
}) {
  return (
    <div className="bg-white hidden md:flex items-center space-x-6 lg:space-x-10 relative">
      {/* About Dropdown */}
      <div className="relative">
        <button
          className="flex items-center text-gray-700 hover:text-gray-900 py-2"
          onClick={() => setIsAboutMenuOpen(!isAboutMenuOpen)}
        >
          About <Plus className="ml-1 w-4 h-4" />
        </button>
        {isAboutMenuOpen && (
          <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 min-w-40 z-[100] border border-gray-200">
            <NavLink
              to="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsAboutMenuOpen(false)}
            >
              Our Story
            </NavLink>
            <NavLink
              to="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsAboutMenuOpen(false)}
            >
              Philosophy
            </NavLink>
            <NavLink
              to="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsAboutMenuOpen(false)}
            >
              Process
            </NavLink>
          </div>
        )}
      </div>

      {/* Portfolio */}
      <NavLink
        to="/portfolio"
        onClick={() => handleNavClick("portfolio")}
        className={({ isActive }) =>
          `hover:text-gray-900 py-2 ${
            isActive ? "text-purple-500 font-medium" : "text-gray-700"
          }`
        }
      >
        Portfolio
      </NavLink>

      {/* Team */}
      <NavLink
        to="/team"
        className={({ isActive }) =>
          `hover:text-gray-900 py-2 ${
            isActive ? "text-purple-500 font-medium" : "text-gray-700"
          }`
        }
      >
        Team
      </NavLink>

      {/* Office */}
      <NavLink
        to="/office"
        className={({ isActive }) =>
          `hover:text-gray-900 py-2 ${
            isActive ? "text-purple-500 font-medium" : "text-gray-700"
          }`
        }
      >
        Office
      </NavLink>

      {/* Companies */}
      <NavLink to="#" className="text-gray-700 hover:text-gray-900 py-2">
        Companies
      </NavLink>

      {/* Focus Areas Dropdown */}
      <div className="relative">
        <button
          className="flex items-center text-gray-700 hover:text-gray-900 py-2"
          onClick={() => setIsFocusAreasMenuOpen(!isFocusAreasMenuOpen)}
        >
          Focus Areas <Plus className="ml-1 w-4 h-4" />
        </button>
        {isFocusAreasMenuOpen && (
          <div
            className={`absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 min-w-40 z-[100] border border-gray-200 ${vanillaSansClass}`}
          >
            <NavLink
              to="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsFocusAreasMenuOpen(false)}
            >
              AI & Machine Learning
            </NavLink>
            <NavLink
              to="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsFocusAreasMenuOpen(false)}
            >
              Enterprise
            </NavLink>
            <NavLink
              to="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsFocusAreasMenuOpen(false)}
            >
              Consumer
            </NavLink>
            <NavLink
              to="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsFocusAreasMenuOpen(false)}
            >
              Health
            </NavLink>
          </div>
        )}
      </div>

      {/* Insights */}
      <NavLink to="#" className="text-gray-700 hover:text-gray-900 py-2">
        Insights
      </NavLink>
    </div>
  );
}
