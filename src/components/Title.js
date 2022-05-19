import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants/constants";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 0;
`;

const Line = styled.div`
  width: 10rem;
  height: 0.5rem;
  margin: 0 1rem;
  background-color: ${COLORS.secondary};
`;

const Text = styled.h2`
  color: white;
  font-size: 3rem;
  font-weight: 300;
`;

const Title = ({ text }) => {
  return (
    <Container>
      <Line />
      <Text>{text}</Text>
      <Line />
    </Container>
  );
};

export default Title;
