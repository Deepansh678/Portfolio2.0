import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../utils/SectionWrapper";
import { projects } from "../constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

type Props = {
  project: {
    title: string;
    description: string;
    githubLink: string;
    liveDemoLink: string;
    image: string;
  };
  index: number;
};

const ProjectCard = ({ project, index }: Props) => {
  const delay = (index + 1) * 0.15;

  return (
    <motion.div
      variants={fadeIn("up", "spring", delay, 0.75) as any}
      className="relative rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-white/5 hover:from-blue-500/40 hover:to-purple-500/40 transition duration-300"
    >
      <div className="bg-bg rounded-2xl p-3 h-full flex flex-col shadow-md hover:shadow-2xl transition duration-300 group">

        {/* IMAGE */}
        <div className="overflow-hidden rounded-xl relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[200px] object-cover transition duration-500 group-hover:scale-110"
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />
        </div>

        {/* CONTENT */}
        <div className="mt-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-white">
            {project.title}
          </h3>

          <p className="text-sm text-gray-400 mt-1 flex-grow">
            {project.description}
          </p>

          {/* BUTTONS */}
          <div className="flex gap-3 mt-4">
            <a
              href={project.githubLink}
              target="_blank"
              className="text-xs px-3 py-1 bg-white/10 rounded-md border border-white/10 hover:bg-white/20 transition"
            >
              <FontAwesomeIcon icon={faGithub} /> Github
            </a>

            {project.liveDemoLink && (
              <a
                href={project.liveDemoLink}
                target="_blank"
                className="text-xs px-3 py-1 bg-blue-500/80 rounded-md hover:bg-blue-600 transition"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="m-10" id="projects">
      
      {/* TITLE */}
      <motion.div
        variants={textVariant(0) as any}
        className="text-white font-black md:text-[60px] sm:text-[50px] text-[30px]"
      >
        Projects
      </motion.div>

      {/* DESCRIPTION */}
      <motion.div
        variants={fadeIn("", "", 0.1, 1) as any}
        className="leading-8 mt-4 hidden md:block text-gray-400 max-w-3xl"
      >
        Following projects showcase my skills and experience through real-world applications. Each project reflects my passion for building modern, scalable, and user-friendly web applications.
      </motion.div>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects);