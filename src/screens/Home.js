import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { COLORS, Me1 } from "../constants/constants";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";

import {
  imageAnimation,
  principleTextAnimation,
} from "../components/Animation";
const Container = styled.div`
  height: 100vh;
  background-color: ${"#121212"};
  z-index: -1;
`;

const ContentContainer = styled.div`
  height: 92%;
  display: flex;

  align-items: center;
  justify-content: space-around;
`;

const ImageContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-right: 10vh;
  opacity: 0.1;
`;
const Image = styled.img`
  width: 25rem;
  height: auto;
  z-index: 2;
`;

const TextContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-bottom: 6rem;
  color: white;
  z-index: 2;
`;

const BigText = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  z-index: 2;
`;

const SmallerText = styled.p`
  font-size: 2.5rem;
  line-height: 3rem;
  font-weight: 300;
  z-index: 2;
`;

const ColoredText = styled.span`
  color: ${COLORS.secondary};
`;

const Home = () => {
  const [element, controls] = useScroll();
  return (
    <Container id='home' ref={element}>
      <ContentContainer>
        <ImageContainer
          variants={imageAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <Image src={Me1} alt='Profile Picture' />
        </ImageContainer>
        <TextContainer
          variants={principleTextAnimation}
          animate={controls}
          transition={{ delay: 0.3, type: "spring", stiffness: 40 }}
        >
          <BigText>
            Hey, I am <ColoredText>José</ColoredText>
          </BigText>
          <SmallerText>
            a <ColoredText>power platform</ColoredText> developer
          </SmallerText>
          <SmallerText>
            & <ColoredText>front-end</ColoredText> enthusiast
          </SmallerText>
        </TextContainer>
      </ContentContainer>
    </Container>
  );
};

export default Home;
