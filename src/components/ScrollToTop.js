import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants/constants";
import { AiOutlineArrowUp } from "react-icons/ai";

import { motion } from "framer-motion";

const Container = styled(motion.a)`
  background-color: ${COLORS.secondary};
  width: 6vh;
  height: 6vh;
  bottom: 2.5vh;
  right: 2.5vh;
  position: fixed;

  border-radius: 3rem;
  color: ${COLORS.black};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Arrow = motion(AiOutlineArrowUp);
const ScrollToTop = () => {
  return (
    <Container
      href='#home'
      whileTap={{ scale: 1.4 }}
      whileHover={{ scale: 1.2 }}
    >
      <Arrow size={"2rem"} whileHover={{ scale: 1.5 }} />
    </Container>
  );
};

export default ScrollToTop;
