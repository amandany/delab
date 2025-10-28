import React, { useContext, useState } from "react";
import text from "./text.json";
import "./Expertize.scss";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { AnimatePresence, motion } from "motion/react";
import classNames from "classnames";
import { Context } from "../../App";

const Expertize = () => {
  const { scroll } = useContext(Context);

  const [activeId, setActiveId] = useState(-1);
  return (
    <section className="expertise">
      <SectionHeader
        id="Expertize"
        title="our"
        description="expertise"
        colorTitle="var(--color-primary)"
        colorDescription="var(--color-accent-pink)"
      />

      <div className="expertise__list" style={{ pointerEvents: scroll ? "none" : undefined }}>
        {text.map((item, i) => (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{
              delay: 0.1 * i,
              duration: 0.3,
            }}
            viewport={{ once: true }}
            className={classNames("expertise__item", { "expertise__item--active": activeId === i })}
            key={i}
            onMouseEnter={() => {
              setActiveId(i);
            }}
            onMouseLeave={() => {
              setActiveId(-1);
            }}
            onClick={() => {
              setActiveId(i);
            }}
          >
            <div className="expertise__item-header">
              <span className="text-secondary">/{i + 1}</span>
              <p className="expertise__item-title h4">{item.title}</p>
            </div>
            <AnimatePresence key={i}>
              {activeId === i && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: "hidden" }}
                >
                  <p className="expertise__item-description">{item.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Expertize;
