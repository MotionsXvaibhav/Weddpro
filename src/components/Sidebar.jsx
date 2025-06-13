import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiShoppingCart,
  FiCalendar,
} from "react-icons/fi";
import weddlogo from "../assets/images/weddlogo.png";

const glowAnimationStyles = `
  @keyframes glowMove {
    0% {
      box-shadow:
        0 0 6px 2px rgba(187, 34, 0, 0.6),
        0 0 10px 4px rgba(255, 255, 255, 0.4),
        0 0 20px 6px rgba(187, 34, 0, 0.3);
    }
    50% {
      box-shadow:
        0 0 10px 4px rgba(187, 34, 0, 0.8),
        0 0 15px 6px rgba(255, 255, 255, 0.6),
        0 0 25px 10px rgba(187, 34, 0, 0.5);
    }
    100% {
      box-shadow:
        0 0 6px 2px rgba(187, 34, 0, 0.6),
        0 0 10px 4px rgba(255, 255, 255, 0.4),
        0 0 20px 6px rgba(187, 34, 0, 0.3);
    }
  }

  .glowing-outline {
    animation: glowMove 3s ease-in-out infinite;
  }

  .enquire-button {
    margin-top: 1rem;
    font-weight: 600;
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }
`;

export default function Sidebar() {
  const menuItems = [
    { name: "Home", path: "/home", icon: <FiHome size={20} /> },
    { name: "About", path: "/about", icon: <FiUser size={20} /> },
    { name: "Shop", path: "/shop", icon: <FiShoppingCart size={20} /> },
    { name: "Booking", path: "/booking", icon: <FiCalendar size={20} /> },
  ];

  return (
    <>
      <style>{glowAnimationStyles}</style>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed left-0 top-0 h-full w-64 bg-[#BB2200] z-50 p-8 flex-col">
        {/* Logo */}
        <div className="mb-12">
          <img
            src={weddlogo}
            alt="Logo"
            style={{ width: "256px", height: "auto" }}
          />
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `block text-sm uppercase tracking-wider transition-colors px-6 py-3 relative overflow-visible w-full ${
                      isActive
                        ? "bg-white text-black rounded-l-[10px] rounded-r-none pr-[30px] mr-[-40px]"
                        : "text-white hover:text-gray-300"
                    }`
                  }
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {item.icon} {item.name}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom CTA */}
        <div
          className="mt-auto p-4 rounded-xl border border-white glowing-outline flex flex-col items-center text-center"
          style={{ backgroundColor: "#E7D7C0" }}
        >
          <p className="text-black italic select-none">We'd love to</p>
          <p className="text-black italic select-none">hear your story!</p>

          <button
            className="enquire-button select-none"
            style={{
              backgroundColor: "#BB2200",
              color: "white",
              borderColor: "#BB2200",
              boxShadow:
                "0 0 10px 2px rgba(187, 34, 0, 0.7), 0 0 20px 6px rgba(187, 34, 0, 0.5)",
            }}
            onClick={() =>
              window.open("https://wa.me/917735214860", "_blank")
            }
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 15px 4px rgba(187, 34, 0, 1), 0 0 30px 10px rgba(187, 34, 0, 0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 10px 2px rgba(187, 34, 0, 0.7), 0 0 20px 6px rgba(187, 34, 0, 0.5)";
            }}
          >
            Enquire
          </button>
        </div>
      </div>

      {/* Gradient Separator Line */}
      <div
        className="hidden md:block fixed left-64 top-0 h-full w-[6px] z-40"
        style={{
          background: "linear-gradient(to bottom, white, #FF6B6B, #BB2200)",
          boxShadow: "0 0 10px 2px rgba(255, 107, 107, 0.7)",
        }}
      />

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#BB2200] border-t border-red-700 flex justify-around items-center py-2 z-50">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center text-white ${
                isActive ? "font-bold text-black" : "opacity-75"
              }`
            }
          >
            {item.icon}
            <span className="text-xs mt-1 uppercase tracking-wider">
              {item.name}
            </span>
          </NavLink>
        ))}
      </nav>
    </>
  );
}
