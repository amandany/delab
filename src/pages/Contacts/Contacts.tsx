import React, { useState } from "react";
import "./Contacts.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Textarea from "../../components/Textarea/Textarea";
import man from "../../images/face-man.jpg";
import woman from "../../images/face-woman.png";
import { motion } from "motion/react";
import useIsMobile from "../../hooks/useIsMobile";
import toast from "react-hot-toast";
import Icons from "../../components/IconButton/Icons";
import { TELEGRAM_LINK } from "../../constants";

const BUDGETS = [
  { value: "$30000", label: "$30k" },
  { value: "$50000", label: "$50k" },
  { value: "$100000", label: "$100k" },
];

const Contacts = () => {
  const [budget, setBudget] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [highlightSendBtn, setHighlightSendBtn] = useState(false);
  const large_tablet = useIsMobile({ breakpoint: 1450 });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name?.trim() || !email?.trim() || !budget?.trim()) {
      toast.error("Please fill in all fields", { style: { maxWidth: "400px", width: "400px" } });
      return;
    }

    const payload = {
      name,
      email,
      budget,
      description: message || null,
    };
    setLoading(true);
    await fetch("https://api.delphi-labs.org/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(() => {
        toast.success("Thank you, we'll be in touch soon.");
        setHighlightSendBtn(true);
      })
      .catch(() => {
        toast.error("Failed to send request");
        setHighlightSendBtn(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onClickTG = () => {
    window.open(TELEGRAM_LINK);
  };

  return (
    <section id="contacts-section" className="contacts-section">
      <div className="contacts-section__content">
        <form onSubmit={onSubmit} className="contacts-form">
          <Input value={name} maxLength={100} name="name" placeholder="Your name" type="text" onChange={(e) => setName(e.target.value)} />
          <Input value={email} maxLength={100} name="email" placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
          <Input
            maxLength={60}
            value={budget}
            name="budget"
            placeholder="Estimate budget"
            type="text"
            onChange={(e) => {
              setBudget(e.target.value);
            }}
          />
          <div className="contacts-form__budget-buttons">
            {BUDGETS.map((budget) => (
              <Button
                aria-label={`Set budget to ${budget?.label || "0"}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setBudget(budget.value.toString());
                }}
                key={budget.value}
                variants="secondary"
              >
                {budget.label}
              </Button>
            ))}
          </div>
          <Textarea
            maxLength={3500}
            name="message"
            value={message}
            onChange={(e) => {
              if (e.target.value.length <= 3500) {
                setMessage(e.target.value);
              }
            }}
            placeholder="Message"
          />
          <div className="form-buttons">
            <Button
              className={highlightSendBtn ? "success-submit" : ""}
              isLoading={loading}
              variants="primary"
              type="submit"
              aria-label="Submit contact form"
            >
              Send →
            </Button>
            <p style={{ textAlign: "center", color: "gray" }}>OR</p>
            <Button
              style={{ background: "transparent", color: "black", display: "flex", gap: "12px" }}
              isLoading={loading}
              type="submit"
              aria-label="Submit contact form"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClickTG();
              }}
            >
              <p>Contact us on Telegram</p>
              <Icons iconName="telegram" />
            </Button>
          </div>
        </form>
        <p className="contacts-form__privacy-policy">By clicking on the button you agree with the privacy policy</p>
      </div>
      <div className="contacts-section__image">
        <img loading="lazy" className="image-woman" src={woman} alt="" />
        <div className="text-container">
          <motion.p
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            initial={{ x: -200 }}
            whileInView={{ x: large_tablet ? 0 : -100 }}
            className="lets"
          >
            let's
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            initial={{ x: 200 }}
            whileInView={{ x: large_tablet ? 0 : 120 }}
            className="work"
          >
            work
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.2 }}
            initial={{ y: 200, opacity: 0, x: large_tablet ? 0 : 150, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, x: large_tablet ? 0 : 150, scale: 1 }}
            className="together"
          >
            together
          </motion.p>
        </div>
        <img loading="lazy" className="image-man" src={man} alt="" />
      </div>
    </section>
  );
};

export default Contacts;
