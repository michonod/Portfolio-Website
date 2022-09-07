import React from "react";
import {
  ContactLeft,
  ContactRight,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  WrapperLeft,
  WrapperRight,
} from "./styles";

interface ContactProps {
  position: "left" | "right";
}

const Contacts = ({ position }: ContactProps) => {
  return (
    <div>
      {position === "left" && (
        <ContactLeft>
          <WrapperLeft>
            <InstagramIcon style={{ color: "#e6683c" }} />
            <LinkedinIcon style={{ color: "#0072b1" }} />
            <FacebookIcon style={{ color: "#0165E1" }} />
            <GithubIcon style={{ color: " #171515" }} />
          </WrapperLeft>
        </ContactLeft>
      )}

      {position === "right" && (
        <ContactRight>
          <WrapperRight>mihail_davidevski@outlook.com</WrapperRight>
        </ContactRight>
      )}
    </div>
  );
};

export default Contacts;
