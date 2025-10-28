import React from "react";
import Loader from "./Loader";

const SuspenseLoader = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontSize: "40px",
        gap: "32px",
        overflow: "hidden",
      }}
    >
      <h1 style={{fontWeight: 'bold'}}>DELPHI LABS</h1>
      <div
        style={{
          paddingTop: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "32px",
        }}
      >
        <Loader />
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default SuspenseLoader;
