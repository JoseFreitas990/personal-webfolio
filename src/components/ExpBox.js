import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants/constants";
import { ReactComponent as Code } from "../assets/Code.svg";
import { motion } from "framer-motion";
import { FaCalculator } from "react-icons/fa";
const Image = styled(motion(Code))`
  width: 3.5rem;
  height: auto;
  padding-bottom: 1rem;
`;

const Title = styled.h2`
  color: ${COLORS.white};
  padding-bottom: 0.7rem;
`;

const Container = styled.div`
  background-color: ${COLORS.darkGrey};
  width: 18rem;
  height: 18rem;
  margin: 0 2rem;
  border-radius: 2rem;

  display: flex;
  flex-direction: column;
  padding-left: 2.5rem;
  padding-right: 1rem;
  padding-top: 3rem;

  &:hover {
    background: linear-gradient(180deg, #2e2e2e 5%, rgba(238, 14, 81, 1) 85%);
  }
`;

const Body = styled.p`
  color: ${COLORS.white};
  padding-right: 1rem;
`;
const ExpBox = ({ object, icon }) => {
  return (
    <Container>
      {icon}
      <Title>{object.title}</Title>
      <Body>{object.body}</Body>
    </Container>
  );
};

export default ExpBox;
