import React, { useMemo, useState } from "react";
import arrow from "../../images/arrow-right-up.svg";
import classNames from "classnames";
import "./FAQQuestion.scss";
import { motion } from "motion/react";

type Props = {
  question: {
    question: string;
    answer: string;
  };
};

const FAQQuestion = ({ question }: Props) => {
  const [open, setOpen] = useState(false);

  const answer = useMemo(
    () =>
      question.answer
        .replaceAll(/<pink>/gi, "<span class='pink'>")
        .replaceAll(/<\/pink>/gi, "</span>")
        .replaceAll(/<purple>/gi, "<span class='purple'>")
        .replaceAll(/<\/purple>/gi, "</span>"),
    [question.answer]
  );

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={item} className={classNames("faq-question", { "faq-question--open": open })} onClick={() => setOpen(!open)}>
      <div className="faq-question-header">
        <h3>{question.question}</h3>
        <img loading="lazy" src={arrow} alt="↗" />
      </div>
      <div className="faq-question-answer">
        <p dangerouslySetInnerHTML={{ __html: answer }}></p>
      </div>
    </motion.div>
  );
};

export default FAQQuestion;
