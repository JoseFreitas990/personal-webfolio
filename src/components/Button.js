import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants/constants";

const Text = styled.b`
  font-weight: 400;
  font-size: 1.1rem;

  color: black;
`;

const ButtonContainer = styled(motion.a)`
  height: 2.5rem;
  background-color: ${(props) => props.color};
  width: 8rem;
  border-radius: 1rem;
  margin-left: 0.5rem;

  text-decoration: none !important;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover ${Text} {
    color: white;
  }

  &:active ${Text} {
    color: ${COLORS.darkGrey};
  }
`;
const Button = ({ color, href }) => {
  return (
    <ButtonContainer whileTap={{ scale: 1.1 }} href={href} color={color}>
      <Text>Contact</Text>
    </ButtonContainer>
  );
};

export default Button;
