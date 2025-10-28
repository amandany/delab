import React from "react";
import "./ProjectCard.scss";
import arrow from "../../images/arrow-right-down.svg";
import { motion } from "motion/react";

interface IProjectCard {
  title: string;
  id: string;
  description: string;
  image: string;
  url: string;
  color: string;
  active: boolean;
  disabled?: boolean;
}

const ProjectCard = ({ title, id, description, image, url, color, active, disabled }: IProjectCard) => {
  return (
    <motion.div
      animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="project-card"
      id={id}
    >
      <div className="project-card-image">
        <img loading="lazy" className="project-card-image" src={image} alt={title} />
      </div>
      <div className="project-card-content">
        <p className="project-card-title" style={{ color: color }}>
          {title} {id}
        </p>
        <p className="project-card-description">{description}</p>
        <div className="project-card-footer">
          <p>#web3</p>
          {!disabled && (
            <a aria-label={`Open project ${title} link`} href={url} target="_blank" rel="noopener noreferrer">
              <button aria-label={`Open project ${title} link`} className="arrow-link">
                <img src={arrow} alt="↘" />
              </button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
