import Link from "next/link";
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
            <Link href="https://www.instagram.com/michonod/" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <InstagramIcon style={{ color: "#e6683c" }} />
              </a>
            </Link>
            <Link
              href="https://www.linkedin.com/in/mihail-davidevski/"
              passHref
            >
              <a target="_blank" rel="noopener noreferrer">
                <LinkedinIcon style={{ color: "#0072b1" }} />
              </a>
            </Link>
            <Link href="https://www.facebook.com/majkl.david/" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <FacebookIcon style={{ color: "#0165E1" }} />
              </a>
            </Link>
            <Link href="https://github.com/michonod" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <GithubIcon style={{ color: " #171515" }} />
              </a>
            </Link>
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
