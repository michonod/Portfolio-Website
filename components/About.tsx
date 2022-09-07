import React from "react";
import { useTheme } from "@emotion/react";

const About = () => {
  const theme = useTheme();
  return (
    <div
      id="about"
      style={{ height: "100vh", backgroundColor: `${theme.color.primary}` }}
    >
      About
    </div>
  );
};

export default About;
