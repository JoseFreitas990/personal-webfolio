import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { Title } from "../components";
import {
  leftContactAnimation,
  rightContactAnimation,
} from "../components/Animation";
import Info from "../components/Info";
import { useScroll } from "../components/useScroll";
import { COLORS } from "../constants/constants";

const Container = styled.div`
  height: 100vh;
  background-color: ${COLORS.black80};
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const InfoContainer = styled(motion.div)``;
const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  background-color: ${COLORS.darkGrey};
  box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.3);
  height: 3rem;
  height: ${(props) => props.height};
  width: 18rem;
  border-radius: 1rem;
  margin: 0.5rem 2rem;
  padding: 0 1rem;
  color: white;
  margin-top: 2rem;
`;

const Body = styled.textarea`
  background-color: ${COLORS.darkGrey};
  box-shadow: 7px 7px 0px 0px rgba(0, 0, 0, 0.3);
  height: 12rem;
  width: 18rem;
  border-radius: 1rem;
  margin: 0.5rem 2rem;
  padding: 0.5rem 1rem;
  color: white;
  resize: none;
`;

const Button = styled.button`
  background-color: ${COLORS.secondary};
  box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.3);
  height: 3rem;
  width: 18rem;
  border-radius: 1rem;
  margin: 0.5rem 2rem;
  padding: 0 1rem;
  color: white;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 1rem;
  cursor: pointer;
`;

const Contact = () => {
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const [element, controls] = useScroll();
  return (
    <Container id='contact' ref={element}>
      <Title text='Contact' />
      <ContentContainer>
        <InfoContainer variants={leftContactAnimation} animate={controls}>
          <Info />
          <Info />
        </InfoContainer>
        <Form
          variants={rightContactAnimation}
          animate={controls}
          action='https://getform.io/f/1329fbb4-a525-4ce1-a88e-92fda11d91ea'
          method='POST'
        >
          <Input
            placeholder='Email'
            type='text'
            name='Email'
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />

          <Body
            placeholder='Body'
            name='Body'
            value={body}
            onChange={(e) => setBody(e.currentTarget.value)}
          />

          <Button type='submit'>Submit</Button>
        </Form>
      </ContentContainer>
    </Container>
  );
};

export default Contact;
