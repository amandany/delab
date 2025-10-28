import React from "react";
import "./CircularText.scss";

const CircularText = ({
  text = "SMART CONTRACTS • DEVELOPERS • BLOCKCHAIN • CRYPTOCURRENCY • BITCOIN • ETHEREUM • DECENTRALIZED • PROGRAMMING • ",
  radius = 300,
  className = "",
}: {
  text?: string;
  radius?: number;
  className?: string;
}) => {
  const containerSize = radius * 2 + 40;
  return (
    <div className={`circular-text-container ${className}`}>
      <div
        className="circular-text-wrapper"
        style={{
          width: `${containerSize}px`,
          height: `${containerSize}px`,
        }}
      >
        <svg width={containerSize} height={containerSize} className="circular-svg">
          <defs>
            <path id="circle-path" d={`M ${radius + 20}, 20 A ${radius}, ${radius} 0 1,1 ${radius + 19}, 20`} />
          </defs>

          <text className="circular-text">
            <textPath href="#circle-path" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default CircularText;
