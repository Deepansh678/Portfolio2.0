import { motion } from "framer-motion";
import {
  VerticalTimelineElement,
  VerticalTimeline,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import SectionWrapper from "../utils/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const ExperienceCard = ({
  experience,
}: {
  experience: {
    title: string;
    company: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
  };
}) => {
  return (
    <VerticalTimelineElement
      className=""
contentStyle={{
  background: "#0f172a",
  color: "#fff",
  border: "1px solid rgba(6,182,212,0.2)",
  boxShadow: "0 0 20px rgba(6,182,212,0.15)",
}}
contentArrowStyle={{
  borderRight: "7px solid #06b6d4",
}}
date={experience.date}
iconStyle={{
  background: "#f8fafc",  // light gray instead of pure white
  border: "2px solid #06b6d4",
  boxShadow: "0 0 12px rgba(6,182,212,0.6)",
}}

icon={
    <div className="flex items-center justify-center w-full h-full">
      <img
        src={experience.icon}
        alt={experience.company}
        className="w-[60%] h-[60%] object-contain"
      />
    </div>
  }
    >
      <div className="text-white text-xl">{experience.title}</div>
      <div className="text-md">{experience.company}</div>
      <ul className="list-disc list-inside text-sm text-secondary">
        {experience.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div id="experience" className="m-10">
      <motion.div
        variants={textVariant(0) as any}
        className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
      >
        Work Experience
      </motion.div>
      <motion.div
        className="mt-10 flex flex-col"
        variants={fadeIn("right", "spring", 0.5, 0.5) as any}
      >
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard experience={experience} key={index} />
          ))}
        </VerticalTimeline>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Experience);
