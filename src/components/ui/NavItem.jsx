import { NavLink } from "react-router-dom";

export default function NavItem({
  to,
  children,
  onClick,
  mobile = false,
  icon,
}) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        mobile
          ? `block py-3 px-4 text-md font-medium transition rounded-lg ${
              isActive
                ? "text-text-accent bg-blue-100"
                : "text-text-secondary hover:text-text-accent hover:bg-blue-50"
            }`
          : `relative py-0.5 text-sm font-medium transition
              ${
                isActive
                  ? "text-text-accent after:w-full"
                  : "text-text-secondary hover:text-text-accent after:w-0 hover:after:w-full"
              }
              after:absolute
              after:left-0
              after:bottom-0
              after:h-0.5
            after:bg-btn-primary
              after:transition-all
              after:duration-300`
      }
    >
      <div className="flex items-center gap-2.5">
        {mobile && icon}
        <span>{children}</span>
      </div>
    </NavLink>
  );
}