import React, { FormEvent } from "react";
import { SubmitButton } from "../Button/styles";
import { Div, Form, Input, Label, TextArea, Title } from "./styled";

const Contact = () => {
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Div id="contact">
      <Title>Contact me</Title>
      <Form onSubmit={submitHandler}>
        <Label htmlFor="name">Your name</Label>
        <Input type="text" id="name" />
        <Label htmlFor="email">Your email</Label>
        <Input type="text" id="email" />
        <Label htmlFor="message">Message</Label>
        <TextArea rows={4} cols={50} />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </Div>
  );
};

export default Contact;
