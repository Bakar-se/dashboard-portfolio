import React from "react";

const About = () => {
  return (
    <main>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        About me
      </h1>
      <div className="mt-4">
        <p className=" leading-7 [&:not(:first-child)]:mt-6">
          Hello! I&apos;m Muhammad Abu Bakar, a passionate software engineer and
          dedicated Next.js developer. With a robust set of skills in both
          front-end and back-end development, I strive to be recognized as a
          versatile and accomplished engineer. My expertise spans HTML, CSS,
          JavaScript, TypeScript, React, Next.js, Node.js, Express.js, MongoDB,
          PostgreSQL, Prisma, and Tailwind CSS. I also excel in project
          management and technical writing, ensuring thorough and effective
          documentation.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-4">
          Professional Experience
        </h2>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <div className="my-8">
            <li className="font-semibold">
              MERN/Next.js Developer at Visonbird Technologies (Feb 2024 -
              Present)
            </li>
            <p className=" leading-7 [&:not(:first-child)]:mt-3 ml-3">
              Specializing in front-end web development with full-stack
              capabilities, I have successfully led the development of multiple
              applications. Additionally, I manage project documentation and
              utilize Jira for efficient project management.
            </p>
          </div>

          <div className="my-8">
            <li className="font-semibold">
              Unity Game Developer at Wittysol (Feb 2022 - May 2022)
            </li>
            <p className=" leading-7 [&:not(:first-child)]:mt-3 ml-3">
              Gained foundational knowledge in game development and created a
              First Person Shooter game.
            </p>
          </div>
          <div className="my-8">
            <li className="font-semibold">
              Front-end Developer Intern at Codek Technologies (Mar 2021 - Jul
              2021)
            </li>
            <p className=" leading-7 [&:not(:first-child)]:mt-3 ml-3">
              Proficient in HTML, CSS, JavaScript, React, Material UI, Tailwind
              CSS, and Framer Motion. Developed landing pages for clients and
              contributed to project documentation efforts.
            </p>
          </div>
        </ul>

        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-4">
          Education
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <div className="my-8">
            <li className="font-semibold">
              Bachelor&apos;s Degree in Software Engineering (2018 - 2022)
            </li>
            <p className=" leading-7 [&:not(:first-child)]:mt-3 ml-3 flex justify-between items-center">
              From: University of Gujrat <span>GPA: 3.08/4.0</span>
            </p>
          </div>
        </ul>
      </div>
    </main>
  );
};

export default About;
