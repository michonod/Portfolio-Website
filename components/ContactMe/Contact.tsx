import React, { FormEvent, useState } from "react";
import { SubmitButton } from "../Button/styles";
import { Message, Div, Form, Input, Label, TextArea, Title } from "./styled";
import { sendEmail } from "../../helpers/services/email-service";

const Contact = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [messageValue, setMessageValue] = useState<string>();
  const [confirm, setConfirm] = useState(false);
  const [error, setError] = useState(false);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !messageValue) {
      setError(true);
      return;
    }
    if (name && email && messageValue) {
      setError(false);
      sendEmail({
        from_name: `From ${name} with ${email} address`,
        from_email: "mihail_davidevski@outlook.com",
        message: messageValue,
      });
      setName("");
      setEmail("");
      setMessageValue("");
      setConfirm(true);
    }
  };
  return (
    <Div id="contact">
      <Title>Contact me</Title>
      <Form onSubmit={submitHandler}>
        <Label htmlFor="name">Your name</Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setConfirm(false)}
        />
        <Label htmlFor="email">Your email</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setConfirm(false)}
        />
        <Label htmlFor="message">Message</Label>
        <TextArea
          rows={4}
          cols={50}
          value={messageValue}
          onChange={(e) => setMessageValue(e.target.value)}
          onFocus={() => setConfirm(false)}
        />
        {confirm && (
          <Message success>Thank you, your message has been sent!</Message>
        )}
        {error && <Message>Please fill all fields!</Message>}
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </Div>
  );
};

export default Contact;
