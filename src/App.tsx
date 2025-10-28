import React, { createContext, Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { ReactLenis } from "lenis/react";
import SuspenseLoader from "./components/Loader/SuspenseLoader";
import { Toaster } from "react-hot-toast";

const Header = React.lazy(() => import("./pages/Header/Header"));
const WhatWeBuild = React.lazy(() => import("./pages/WhatWeBuild/WhatWeBuild"));
const Expertize = React.lazy(() => import("./pages/Expertize/Expertize"));
const Process = React.lazy(() => import("./pages/Process/Process"));
const Wisdom = React.lazy(() => import("./pages/Wisdom/Wisdom"));
const Projects = React.lazy(() => import("./pages/Projects/Projects"));
const Contacts = React.lazy(() => import("./pages/Contacts/Contacts"));
const FAQ = React.lazy(() => import("./pages/FAQ/FAQ"));
const Footer = React.lazy(() => import("./pages/Footer/Footer"));

export const Context = createContext({ scroll: false, setScroll: (_: boolean) => {} });

const App = () => {
  const [scroll, setScroll] = useState(false);
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <Toaster />
      <ReactLenis root options={{ duration: 1 }} />
      <Context value={{ scroll, setScroll }}>
        <div className="app">
          <Navbar />
          <div className="center-container">
            <Header />
          </div>
          <div className="build_expertise_bg">
            <div className="center-container">
              <WhatWeBuild />
              <Expertize />
            </div>
          </div>
          <div className="center-container">
            <Process />
            <Wisdom />
            <Projects />
          </div>
          <div className="contacts_bg">
            <div className="center-container">
              <Contacts />
            </div>
          </div>
          <div className="center-container">
            <FAQ />
            <Footer />
          </div>
        </div>
      </Context>
    </Suspense>
  );
};

export default App;
