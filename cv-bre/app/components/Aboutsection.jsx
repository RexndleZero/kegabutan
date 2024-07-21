"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import Tabbutton from "./Tabbutton";

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul>
        <li>JavaScript</li>
        <li>Golang</li>
        <li>Next JS</li>
        <li>MongoDB</li>
        <li>XAMPP</li>
        <li>Node.js</li>
        <li>Laravel</li>
      </ul>
    ),
  },
  {
    title: "education",
    id: "education",
    content: (
      <ul>
        <li>Fullstack JS</li>
        <li>University of OXFORD</li>
      </ul>
    ),
  },
  {
    title: "certifications",
    id: "certifications",
    content: (
      <ul>
        <li> Oracle Academy </li>
      </ul>
    ),
  },
  {
    title: "experience",
    id: "experience",
    content: (
      <ul>
        <li>Clash of Champions Indonesian Winner</li>
      </ul>
    ),
  },
];

const Aboutsection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-8 xl:gap-16 sm:py-16 xl:pl-16">
        <Image
          src="/mnt/data/image.png"
          alt="backend"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am an experienced backend developer with expertise in using
            MongoDB and XAMPP. I am proficient in JavaScript and Golang, and I
            have some knowledge of PHP. Currently, I am enhancing my skills by
            learning Next.js to develop more advanced web applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((tabData) => (
              <Tabbutton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title.charAt(0).toUpperCase() + tabData.title.slice(1)}
              </Tabbutton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutsection;
