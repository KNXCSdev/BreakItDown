import { NavLink } from "react-router-dom";

interface MainNavLinkProps {
  children: React.ReactNode;
  link: string;
}

export default function MainNavLink({ children, link }: MainNavLinkProps) {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `flex items-center gap-[1.2rem] rounded-xl px-[2.4rem] py-[1.2rem] text-[1.6rem] font-medium transition hover:bg-blue-50 hover:text-blue-900 ${
          isActive ? "bg-blue-50 text-blue-900" : "text-gray-600"
        }`
      }
    >
      {children}
    </NavLink>
  );
}
