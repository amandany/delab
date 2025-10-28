import React, { Suspense, useContext, useRef } from "react";
import "./Header.scss";
import Button from "../../components/Button/Button";
import HeaderImage from "../../images/header-image-cut.png";
import HeaderImageUp from "../../images/header-image-cut-up2.png";
import { Context } from "../../App";

const CircularText = React.lazy(() => import("../../components/CircularText/CircularText"));

const Header = () => {
  const { setScroll } = useContext(Context);
  const scrollTimer = useRef<any>(null);

  const onClickLetsTalk = () => {
    try {
      // disable scroll for 700ms in expertize page
      clearTimeout(scrollTimer.current);
      setScroll(true);
      scrollTimer.current = setTimeout(() => {
        setScroll(false);
      }, 700);

      const targetElement = document.getElementById("contacts-section");
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } catch (error) {
      console.error("Error scrolling to contacts section:", error);
    }
  };
  return (
    <div className="welcome-page">
      <div className="main-focus-container">
        <p className="main-focus">We build and support decentralized applications</p>
        <p className="quote">— Delphi Labs</p>
      </div>
      <p className="team-info">
        Our team: <span>more than 20</span> software engineers
      </p>
      <div className="dev-n-sup-container">
        <p className="dev-n-sup">
          We have been developing and supporting <span>50+</span> <br /> digital products
          <br />
          <br />
          /since 2021
        </p>
      </div>
      <Button aria-label="Let’s talk" onClick={onClickLetsTalk} className="welcome-button" variants="contact">
        Let’s talk
      </Button>
      <div className="header-woman">
        <Suspense fallback={<div style={{ position: "absolute" }} />}>
          <CircularText className="circular-text circular-text-wrapper--tilt-strong-forward" />
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <img src={HeaderImageUp} alt="" className="header-woman-image header-woman-image-head" />
            <img src={HeaderImage} alt="" className="header-woman-image" />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default Header;
