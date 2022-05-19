import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Title } from "../components";
import {
  aboutText,
  aboutTextAnimation,
  aboutTextContainerAnimation,
  astronautAnimation,
} from "../components/Animation";
import { useScroll } from "../components/useScroll";
import { COLORS, Spaceman } from "../constants/constants";
const Container = styled.div`
  height: 100vh;
  background-color: ${COLORS.darkGrey};
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled(motion.div)`
  width: 50%;
  margin-right: 10rem;
`;

const Text = styled(motion.p)`
  color: #757575;
  margin: 2rem 0;
  line-height: 2rem;
  font-size: 1rem;
`;

const Img = styled(motion.img)`
  margin-bottom: 3rem;
`;

const About = () => {
  const [element, controls] = useScroll();
  return (
    <Container id='about' ref={element}>
      <Title text='About Me' />
      <ContentContainer>
        <TextContainer
          variants={aboutTextContainerAnimation}
          animate={controls}
        >
          <Text variants={aboutTextAnimation} animate={controls}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non
            est euismod, posuere sem et, dapibus lectus. Aliquam metus nibh,
            tempus id bibendum ut, venenatis a velit. Morbi ullamcorper lectus
            non semper lobortis.
          </Text>
          <Text variants={aboutTextAnimation} animate={controls}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non
            est euismod, posuere sem et, dapibus lectus. Aliquam metus nibh,
            tempus id bibendum ut, venenatis a velit. Morbi ullamcorper lectus
            non semper lobortis.
          </Text>
          <Text variants={aboutTextAnimation} animate={controls}>
            Praesent accumsan tortor eu pulvinar pretium. Aenean vulputate
            bibendum lectus, sit amet pretium felis pretium pulvinar. Vivamus
            tincidunt venenatis lorem sed laoreet. Ut ut cursus velit. Praesent
            mattis molestie ligula quis lacinia. In quam libero, placerat non
            pretium ac, molestie sit amet eros.
          </Text>
          <Text variants={aboutTextAnimation} animate={controls}>
            Ut ut cursus velit. Praesent mattis molestie ligula quis lacinia. In
            quam libero, placerat non pretium ac, molestie sit amet eros.
          </Text>
        </TextContainer>
        <Img
          src={Spaceman}
          variants={astronautAnimation}
          animate='show'
          transition={{ repeat: "Infinity", duration: 20 }}
        />
      </ContentContainer>
    </Container>
  );
};

export default About;
