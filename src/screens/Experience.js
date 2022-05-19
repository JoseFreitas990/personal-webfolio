import React from "react";
import styled from "styled-components";
import { ExpBox, Title } from "../components";
import { COLORS, ExperienceArray } from "../constants/constants";
import { FaCalculator } from "react-icons/fa";
import { motion } from "framer-motion";
import { experienceAnimation } from "../components/Animation";
import { useScroll } from "../components/useScroll";
const Container = styled.div`
  height: 100vh;
  background-color: ${COLORS.black80};
`;

const ContentContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 7rem;
`;
const Experience = () => {
  const [element, controls] = useScroll();

  return (
    <Container id='experience' ref={element}>
      <Title text='Experience' />

      <ContentContainer animate={controls} variants={experienceAnimation}>
        {ExperienceArray.map((item, index) => {
          return <ExpBox object={item} />;
        })}
      </ContentContainer>
    </Container>
  );
};

export default Experience;
