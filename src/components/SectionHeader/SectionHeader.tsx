import React from "react";
import "./SectionHeader.scss";
import { motion } from "motion/react";
import { MOTION_EXIT, MOTION_IN_VIEW, MOTION_INITIAL, MOTION_TRANSITION } from "../../constants";

type Props = {
  title: string;
  description: string;
  colorDescription: string;
  colorTitle: string;
  style?: React.CSSProperties;
  id?: string;
  className?: string;
};

const SectionHeader = (props: Props) => {
  return (
    <motion.div
      transition={MOTION_TRANSITION}
      initial={MOTION_INITIAL}
      whileInView={MOTION_IN_VIEW}
      exit={MOTION_EXIT}
      id={props.id}
      className={`section-header ${props.className}`}
      style={props.style}
    >
      <p className="section-header-start" style={{ color: props.colorTitle }}>
        {props.title}
      </p>
      <p className="section-header-end" style={{ color: props.colorDescription }}>
        {props.description}
      </p>
    </motion.div>
  );
};

export default SectionHeader;
