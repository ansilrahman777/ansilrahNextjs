"use client";
import Navbar from "../../components/Navbar";

export default function About() {
  return (
    <section className="bg-white dark:bg-black">
    <Navbar />
      <div className="gap-16 items-center py-12 px-6 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-20 lg:px-10">
        <div className="font-mono text-justify  mt-7 text-white sm:text-lg dark:text-white">
          <h2 className="mb-6 text-3xl tracking-tight font-extrabold text-white dark:text-white">
            Building Solutions, Not Just Code
          </h2>
          <p className="mb-6">
            I am Ansil Rahman, a passionate Python/Django developer with over 1.5 years of experience in building scalable, efficient, and
            user-friendly web applications. I specialize in crafting backend solutions with Django, PostgreSQL, and integrating modern front-end
            technologies like React and TailwindCSS.
          </p>
          <p className="mb-6">
            My expertise spans from creating robust APIs to designing and implementing secure, high-performance web systems. I strive to
            bridge the gap between innovative design and technical execution,delivering impactful solutions tailored to business needs.
          </p>
          <p>
            Let's create something extraordinary together — blending strategy,design, and development to solve problems and push boundaries.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-0">
          <img
            className="w-full rounded-lg shadow-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="Office Content 1"
          />
          <img
            className="mt-6 w-full lg:mt-12 rounded-lg shadow-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="Office Content 2"
          />
        </div>
      </div>
    </section>
  );
}
