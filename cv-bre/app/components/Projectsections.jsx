"use client";
import React, { useState } from "react";
import Projectcard from "./Projectcard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Step-by-Step membuat aplikasi berbasis web ruteangkot",
    description: "Project pertama di kuliahan",
    image: "",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Penyewaan Camera",
    description: "tugas besar pemograman",
    image: "",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const Projectsections = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 ">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div>
        {filteredProjects.map((project) => (
          <Projectcard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}{" "}
      </div>
    </>
  );
};

export default Projectsections;
