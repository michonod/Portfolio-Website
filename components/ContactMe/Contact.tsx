import React, { FormEvent, useState } from "react";
import { SubmitButton } from "../Button/styles";
import { Div, Form, Input, Label, TextArea, Title } from "./styled";
import EmailService from "../../helpers/services/email-service";

const Contact = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [messageValue, setMessageValue] = useState<string>();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // EmailService.sendEmail({
    //   from_name: `From ${name} with ${email} address`,
    //   from_email: "mihail_davidevski@outlook.com",
    //   message: messageValue,
    // });
    setName("");
    setEmail("");
    setMessageValue("");
  };
  return (
    <Div id="contact">
      <Title>Contact me</Title>
      <Form onSubmit={submitHandler}>
        <Label htmlFor="name">Your name</Label>
        <Input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <Label htmlFor="email">Your email</Label>
        <Input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label htmlFor="message">Message</Label>
        <TextArea
          rows={4}
          cols={50}
          onChange={(e) => setMessageValue(e.target.value)}
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </Div>
  );
};

export default Contact;
