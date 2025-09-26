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


      {/* Insights */}
      <NavLink to="#" className="text-gray-700 hover:text-gray-900 py-2">
        Insights
      </NavLink>

            <NavLink
        to="/invest"
        className={({ isActive }) =>
          `hover:text-gray-900 py-2 ${
            isActive ? "text-purple-500 font-medium" : "text-gray-700"
          }`
        }
      >
        Invest with Us
      </NavLink>

      <NavLink
        to="/pitch"
        className={({ isActive }) =>
          `hover:text-gray-900 py-2 ${
            isActive ? "text-purple-500 font-medium" : "text-gray-700"
          }`
        }
      >
        Pitch Us
      </NavLink>
    </div>
  );
}
