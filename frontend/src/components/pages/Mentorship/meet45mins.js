import React from "react";
import { InlineWidget } from "react-calendly";

const meet45mins = () => {
  return (
    <div>
      <InlineWidget
        url="https://calendly.com/ashu-ydv2001/15min"
        styles={{ width: "1200px", height: "100vh" }}
      />
    </div>
  );
};

export default meet45mins;
