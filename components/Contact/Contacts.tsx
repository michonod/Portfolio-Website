import Link from "next/link";
import React from "react";
import {
  ContactLeft,
  ContactRight,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkA,
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
                <InstagramIcon />
              </a>
            </Link>
            <Link
              href="https://www.linkedin.com/in/mihail-davidevski/"
              passHref
            >
              <a target="_blank" rel="noopener noreferrer">
                <LinkedinIcon />
              </a>
            </Link>
            <Link href="https://www.facebook.com/majkl.david/" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </a>
            </Link>
            <Link href="https://github.com/michonod" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <GithubIcon />
              </a>
            </Link>
          </WrapperLeft>
        </ContactLeft>
      )}

      {position === "right" && (
        <ContactRight>
          <WrapperRight>
            <LinkA
              href="mailto:mihail_davidevski@outlook.com"
              target="_blank"
              rel="noreferrer"
            >
              mihail_davidevski@outlook.com
            </LinkA>
          </WrapperRight>
        </ContactRight>
      )}
    </div>
  );
};

export default Contacts;
