import React from "react";
import "./FAQ.scss";
import questions from "./questions.json";
import FAQQuestion from "./FAQQuestion";
import { motion } from "motion/react";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.15,
    },
  },
};

const FAQ = () => {
  return (
    <section className="FAQ">
      <h2 id="Faq" className="FAQ-header">
        FAQ
      </h2>
      <motion.div variants={container} initial="hidden" whileInView="visible" className="FAQ-questions-container">
        {questions.map((question, index) => (
          <FAQQuestion key={index} question={question} />
        ))}
      </motion.div>
    </section>
  );
};

export default FAQ;
