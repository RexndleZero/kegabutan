import React from "react";
import Projectcard from "./Projectcard";

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
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 ">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        <button className="rounded-full  border-2 border-blue-700 px-6 py-3 text-xl cursor-pointer">
          All
        </button>
        <button className="rounded-full  border-2 border-slate-700 hover:border-white px-6 py-3 text-xl cursor-pointer">
          Web
        </button>
      </div>
      <div>
        {projectsData.map((project) => (
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
