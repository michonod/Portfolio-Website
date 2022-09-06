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
            <InstagramIcon />
            <LinkedinIcon />
            <FacebookIcon />
            <GithubIcon />
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
