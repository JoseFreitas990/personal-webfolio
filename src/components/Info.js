import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants/constants";
import { MdOutlineEmail } from "react-icons/md";

const Container = styled.div`
  background-color: ${COLORS.darkGrey};
  width: 18rem;
  height: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  color: ${COLORS.white};
  margin: 2rem 0;

  box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h4`
  padding: 0.5rem 0;
`;

const SecondaryText = styled.p`
  font-weight: 200;
`;

const WriteMe = styled.a`
  color: ${COLORS.secondary};
  text-decoration: underline;
  text-underline-offset: 2px;

  cursor: pointer;
`;

const Info = () => {
  return (
    <Container>
      <MdOutlineEmail size={50} color='white' />
      <Title>Email</Title>
      <SecondaryText>freitasze990@gmail.com</SecondaryText>
      <WriteMe href='mailto: freitasze990@gmail.com'>Write Me →</WriteMe>
    </Container>
  );
};

export default Info;
