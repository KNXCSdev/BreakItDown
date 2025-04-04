import {
  HiOutlineArchiveBox,
  HiOutlineClipboardDocumentList,
  HiOutlineExclamationTriangle,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";

import { useLocation } from "react-router";
import MainNavLink from "./MainNavLink";

export default function MainNav() {
  const location = useLocation();

  return (
    <nav className="w-full">
      <ul className="flex list-none flex-col gap-4">
        <li>
          <MainNavLink link="/app">
            <HiOutlineExclamationTriangle
              className={`h-[2.6rem] w-[2.6rem] ${location.pathname === "/app" ? "text-blue-600" : "text-gray-400"}`}
            />
            <span>Coding Problems</span>
          </MainNavLink>
        </li>
        <li>
          <MainNavLink link="/archives">
            <HiOutlineArchiveBox
              className={`h-[2.6rem] w-[2.6rem] ${location.pathname === "/archives" ? "text-blue-600" : "text-gray-400"}`}
            />
            <span>Archives</span>
          </MainNavLink>
        </li>
        <li>
          <MainNavLink link="/about">
            <HiOutlineClipboardDocumentList
              className={`h-[2.6rem] w-[2.6rem] ${location.pathname === "/about" ? "text-blue-600" : "text-gray-400"}`}
            />
            <span>About</span>
          </MainNavLink>
        </li>
        <li>
          <MainNavLink link="/how-it-works">
            <HiOutlineWrenchScrewdriver
              className={`h-[2.6rem] w-[2.6rem] ${location.pathname === "/how-it-works" ? "text-blue-600" : "text-gray-400"}`}
            />
            <span>How it works</span>
          </MainNavLink>
        </li>
      </ul>
    </nav>
  );
}
