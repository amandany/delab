import React from "react";
import ProcessCard from "../../components/ProcessCard/ProcessCard";
import "./Process.scss";
import DEV_IMG from "../../images/DEV.png";
import SUP_IMG from "../../images/SUP.png";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

const Process = () => {
  return (
    <section className="process-section">
      <SectionHeader
        id="Process"
        title="our"
        description="Process"
        colorTitle="var(--color-white)"
        colorDescription="var(--color-accent-green)"
        className="process-section-header"
      />

      <div className="process-container">
        <ProcessCard
          pos="pos-1-2"
          id="/01"
          title="DISCOVERY"
          description="At this stage of Web3 application development, we specify requirements and define the project scope, budget, and timeframes"
        />

        <ProcessCard
          id="/02"
          title="Design"
          description="Based on the project requirements, we build the prototype for your solution and test it"
          pos="pos-1-3"
        />

        <ProcessCard
          id="/03"
          title="Development"
          description="At the development stage, our developers write the code for your Web3 project according to the approved design"
          image={DEV_IMG}
          pos="pos-2-1"
          variant="description-first"
        />

        <ProcessCard
          id="/04"
          title="Testing"
          description="The testing stage ensures our engeneers check app for bugs, vulnerabilities, and smart contract issues before launch"
          pos="pos-2-2"
        />

        <ProcessCard id="/05" pos="pos-3-2" title="Smart Code. Deep Thinking. Scalable Results" variant="simple" />

        <ProcessCard
          id="/05"
          title="Launch"
          description="We deploy your Web3 product to the mainnet, ensure all systems run smoothly, and support your team during the public rollout to maximize impact and user engagement"
          pos="pos-3-3"
        />

        <ProcessCard
          id="/06"
          title="Support"
          description="We provide ongoing support for your Web3 project, ensuring stability, security, and seamless updates as your product evolves"
          image={SUP_IMG}
          variant="description-first"
          pos="pos-4-2"
        />
      </div>
    </section>
  );
};

export default Process;
