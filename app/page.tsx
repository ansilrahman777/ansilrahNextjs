"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="relative w-full">
      <Navbar />
      <div className="w-full h-screen bg-black overflow-x-hidden">
        <div className="w-full mx-auto relative bg-cover bg-no-repeat sm:aspect-video py-20">
          {/* <div className="absolute md:-top-24 md:-right-32 sm:-right-[7rem] -right-[1rem] top-0 opacity-40 w-[15%] h-[20%] gradiant rounded-full blur-3xl"></div> */}
          {/* <div className="absolute md:-left-[45%] sm:-left-[42%] -left-[40%] opacity-10 w-[50%] h-full my-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl"></div> */}

          <div className="h-full flex flex-col lg:flex-row justify-between items-center">
          <div className="hidden lg:flex lg:w-[40%]">
              <img
                src="ansil.png"
                alt="ansil Rahman"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="h-full xl:w-[50%] lg:w-[60%] sm:w-[70%] w-full text-white flex flex-col gap-4 justify-center">
              <h1 className="xl:text-2xl lg:text-2xl md:text-2xl text-2xl font-extrabold leading-tight tracking-tight">
                Hi there, I am
              </h1>
              <h1 className="xl:text-5xl lg:text-5xl md:text-5xl text-5xl font-bold leading-tight text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400">
                Ansil Rahman!
              </h1>
              <p className="text-lg font-mono lg:my-8 my-4 leading-relaxed text-gray-200">
                A passionate Python/Django developer with 1.5+ years of experience. I specialize in building high-performance web applications with expertise in Django, PostgreSQL, TailwindCSS, React, and more. Let's build something amazing together!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 lg:mt-6 mt-4">
                <Link href="/" className="w-full sm:w-auto md:px-8 px-6 md:py-4 py-3 md:text-xl text-lg font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg transition-all duration-300">
                  Hire Me
                </Link>
                <Link href="/about" className="w-full sm:w-auto md:px-8 px-6 md:py-4 py-3 md:text-xl text-lg font-semibold rounded-lg border-2 border-gray-200 text-white hover:bg-gray-100 hover:text-black shadow-lg transition-all duration-300">
                  About Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
