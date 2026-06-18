import { NavLink } from "react-router-dom";

export default function NavItem({
  to,
  children,
  onClick,
  mobile = false,
}) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        mobile
          ? `block py-3 text-lg font-medium transition ${
              isActive
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-600"
            }`
          : `relative py-0.5 text-sm font-medium transition
              ${
                isActive
                  ? "text-blue-600 after:w-full"
                  : "text-gray-700 hover:text-blue-600 after:w-0 hover:after:w-full"
              }
              after:absolute
              after:left-0
              after:bottom-0
              after:h-0.5
            after:bg-blue-500
              after:transition-all
              after:duration-300`
      }
    >
      {children}
    </NavLink>
  );
}