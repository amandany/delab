import React from "react";
import "./WhatWeBuild.scss";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { motion } from "motion/react";
import { MOTION_EXIT, MOTION_IN_VIEW, MOTION_INITIAL, MOTION_TRANSITION } from "../../constants";

const InfoCard = ({ title, description, tag, className }: { title: string; description: string; tag: string; className?: string }) => (
  <motion.div
    transition={MOTION_TRANSITION}
    initial={MOTION_INITIAL}
    whileInView={MOTION_IN_VIEW}
    exit={MOTION_EXIT}
    className={`info-card ${className}`}
  >
    <p className="info-card__title h4">{title}</p>
    <p className="info-card__description body">{description}</p>
    <span className="info-card__tag caption">{tag}</span>
  </motion.div>
);

const WhatWeBuild = () => {
  return (
    <section className="what-we-build">
      <div className="container">
        <SectionHeader
          style={{ marginBottom: "60px" }}
          title="what we"
          description="build"
          colorTitle="var(--color-white)"
          colorDescription="var(--color-accent-green)"
          id="Services"
        />

        <div className="what-we-build__section-upper">
          <InfoCard
            title="dApp"
            description="A dApp is a blockchain-based application that runs without middlemen, making it more secure and transparent. By investing in dApp development, your business can lower costs, build stronger customer trust, and unlock new revenue opportunities."
            tag="#apps"
          />

          <motion.div
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="what-we-build__mission"
          >
            <p className="h5">
              At <span className="highlight-pink">Delphi Labs</span> - we believe that Web3 is not just about crypto but also about
            </p>
            <p className="what-we-build__mission-believe h5">
              <span className="believe-center highlight-green text-uppercase">CREATING IMMERSIVE & </span>
              <span className="believe-right highlight-green text-uppercase">MEANINGFUL EXPERIENCES</span>
            </p>
          </motion.div>
        </div>
        <div className="what-we-build__section-lower">
          <InfoCard
            title="Tokens"
            description="We design, develop, and support various types of tokens tailored to your product — from utility tokens to community-driven meme tokens. Our team delivers a full launch cycle: from concept and smart contract development to listing, market making, and ongoing technical support. We help your product confidently enter the Web3 space and reach a wider audience."
            tag="#tokens"
          />

          <InfoCard
            title="Web3 App"
            description="A Web3 app connects users to your business through blockchain, offering ownership and privacy. Unlike a fully decentralized dApp, a Web3 app blends blockchain with traditional systems, giving you flexibility and control. It helps you reach new markets and stay ahead in the digital economy."
            tag="#apps"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
