import React from "react";
import "./ProcessCard.scss";
import classNames from "classnames";
import { motion } from "motion/react";
import { MOTION_EXIT, MOTION_IN_VIEW, MOTION_INITIAL, MOTION_TRANSITION } from "../../constants";
import useIsMobile from "../../hooks/useIsMobile";

interface ProcessCardProps {
  id: string;
  title: string;
  description?: string;
  image?: string;
  variant?: "default" | "description-first" | "simple";
  pos: string;
}

type IHoverCard = Pick<ProcessCardProps, "id" | "title" | "description">;

const HoverCard = ({ id, title, description }: IHoverCard) => {
  return (
    <div className="hover-card">
      <p className="hover-card-title">
        {id} {title}
      </p>
      <p className="hover-card-description">{description}</p>
    </div>
  );
};

type ITitle = Pick<ProcessCardProps, "id" | "title" | "image">;

const Title = ({ id, title, image }: ITitle) => {
  return (
    <div className="process-card-title-wrapper">
      <p className="card-id">{id}</p>
      <p className="card-title">{title}</p>
      {image && <img loading="lazy" src={image} alt={title} />}
    </div>
  );
};

const ProcessCard = ({ id, description, title, image, variant = "default", pos }: ProcessCardProps) => {
  const isMobile = useIsMobile({ breakpoint: 820 });
  if (variant === "simple") {
    if (isMobile)
      return (
        <div className="process-card--mobile">
          <motion.p
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0 }}
            whileInView={{ opacity: 1, x: -50 }}
            initial={{ x: -150, opacity: 0 }}
          >
            Smart Code
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: -50, opacity: 0 }}
          >
            Deep Thinking
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            whileInView={{ opacity: 1, x: 50 }}
            initial={{ x: 0, opacity: 0 }}
          >
            Scalable Results
          </motion.p>
        </div>
      );
    return (
      <motion.div
        transition={MOTION_TRANSITION}
        initial={MOTION_INITIAL}
        whileInView={MOTION_IN_VIEW}
        exit={MOTION_EXIT}
        viewport={{ once: true }}
        className={classNames("process-card", `process-card--${variant}`, pos)}
      >
        <p>{title}</p>
      </motion.div>
    );
  }

  if (variant === "description-first") {
    return (
      <motion.div
        transition={MOTION_TRANSITION}
        initial={MOTION_INITIAL}
        whileInView={MOTION_IN_VIEW}
        exit={MOTION_EXIT}
        viewport={{ once: true }}
        className={classNames("process-card", `process-card--${variant}`, pos)}
      >
        <HoverCard title={title} id={id} description={description} />
        <Title image={image} title={title} id={id} />
      </motion.div>
    );
  }

  return (
    <motion.div
      transition={MOTION_TRANSITION}
      initial={MOTION_INITIAL}
      whileInView={MOTION_IN_VIEW}
      exit={MOTION_EXIT}
      viewport={{ once: true }}
      className={classNames("process-card", `process-card--${variant}`, pos)}
    >
      <Title title={title} id={id} />
      <HoverCard title={title} id={id} description={description} />
    </motion.div>
  );
};

export default ProcessCard;
