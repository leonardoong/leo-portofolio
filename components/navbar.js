import { Popover } from "@headlessui/react";

export default function NavBar() {
  return (
    <Popover className="relative">
      <div className="flex justify-items-end items-end border-b-2 border-gray-200 py-6 md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            {/* Font Prompt */}
            <span className="sr-only">Logo</span>
            <img className="h-8 w-auto sm:h-10" src="/logo.png" alt="Logo" />
          </a>
        </div>
        <a
          href="#home-section"
          className="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Home
        </a>
        <a
          href="#about-section"
          className="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          About
        </a>
        <a
          href="#career-section"
          className="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Career
        </a>
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
