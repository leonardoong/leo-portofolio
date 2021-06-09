import { Popover } from "@headlessui/react";
import { Link } from "react-scroll";

export default function NavBar() {
  return (
    <Popover className="relative">
      <div className="flex justify-items-end items-end border-b-2 border-gray-200 py-6 md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#" className="cursor-pointer">
            {/* Font Prompt */}
            <span className="sr-only">Logo</span>
            <img className="h-8 w-auto sm:h-10" src="/logo.png" alt="Logo" />
          </a>
        </div>
        <Link
          to="home-section"
          spy={true}
          smooth={true}
          duration={500}
          style={{cursor : 'pointer !important'}}
          className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="about-section"
          spy={true}
          smooth={true}
          duration={500}
          style={{cursor : 'pointer !important'}}
          className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
        >
          About
        </Link>
        <Link
          to="career-section"
          spy={true}
          smooth={true}
          duration={500}
          style={{cursor : 'pointer !important'}}
          className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
        >
          Career
        </Link>
        {/* <a
          href="#"
          className="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Contact
        </a> */}
      </div>
    </Popover>
  );
}
