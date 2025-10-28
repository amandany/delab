import React from "react";
import "./Wisdom.scss";
import face from "../../images/face.png";
import { motion } from "motion/react";
import { MOTION_EXIT } from "../../constants";
import useIsMobile from "../../hooks/useIsMobile";

const Wisdom = () => {
  const isTablet = useIsMobile({ breakpoint: 1100 });
  const isMobile = useIsMobile({ breakpoint: 700 });
  return (
    <section className="wisdom-section">
      <motion.img
        transition={{ duration: 0.3 }}
        initial={{ scale: 0.5, x: -300, y: 130 }}
        whileInView={{ scale: 1, x: isTablet ? -200 : -370, y: isMobile ? 50 : 130 }}
        className="wisdom-face"
        src={face}
        alt="wisdom"
        viewport={{ once: true }}
        loading="lazy"
      />
      <motion.p
        transition={{ delay: 0.4, duration: 0.6 }}
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={MOTION_EXIT}
        className="upper"
        viewport={{ once: true }}
      >
        From ancient
      </motion.p>
      <motion.p
        transition={{ delay: 0.6, duration: 0.8 }}
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={MOTION_EXIT}
        className="center"
        viewport={{ once: true }}
      >
        wisdom
      </motion.p>
      <div className="down">
        <motion.p
          transition={{ delay: 0.8, duration: 1 }}
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="down-up"
          viewport={{ once: true }}
        >
          to Modern
        </motion.p>
        <motion.p
          transition={{ delay: 1, duration: 1.2 }}
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="down-lower"
          viewport={{ once: true }}
        >
          Web3 Solutions ↓
        </motion.p>
      </div>
    </section>
  );
};

export default Wisdom;
