import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <main className="bg-gradient-to-r from-blue-400 to-indigo-700 mx-auto">
        <div className="text-center sm:py-8 md:py-12 lg:py-16 xl:py-20">
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            <span className="block xl:inline text-yellow-200">Hi, </span>{" "}
            <span className="block text-white xl:inline">I am Leonardo</span>
          </h1>
          <p className="mt-3 text-lg text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            Software Engineer based in Indonesia
          </p>
          <div className="mt-5 flex items-center justify-center space-x-8 text-white text-2xl">
            <a href="https://github.com/leonardoong" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/leonardo-ong/" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
