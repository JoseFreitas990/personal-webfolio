import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { COLORS, Logo } from "../constants/constants";
import Button from "./Button";

import { headerAnimation } from "../components/Animation";

const Container = styled(motion.div)`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(18, 18, 18, 0.8);
  position: fixed;
  z-index: 10;
`;

const LogoImg = styled.img`
  width: 5rem;
  height: auto;
  padding-left: 1rem;
  cursor: pointer;
  z-index: 10;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
`;

const Text = styled(motion.a)`
  cursor: pointer;
  padding: 0 1rem;
  color: ${COLORS.white};
`;

const Header = () => {
  return (
    <Container
      variants={headerAnimation}
      transition={{ delay: 0.2, type: "tween" }}
    >
      <LogoImg src={Logo} onClick={() => window.scrollTo(0, 0)} />
      <RightContainer>
        <Text
          whileHover={{ scale: 1.1, color: COLORS.secondary }}
          whileTap={{ scale: 1.2 }}
          href='#about'
        >
          About me
        </Text>
        <Text
          whileHover={{ scale: 1.1, color: COLORS.secondary }}
          whileTap={{ scale: 1.2 }}
          href='#experience'
        >
          Experience
        </Text>

        <Button href='#contact' color={COLORS.secondary} />
      </RightContainer>
    </Container>
  );
};

export default Header;
