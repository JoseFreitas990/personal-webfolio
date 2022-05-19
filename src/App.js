import { motion } from "framer-motion";
import styled from "styled-components";
import "./App.css";
import { Header, Parallax, ScrollToTop } from "./components";
import { Home, About, Contact, Experience } from "./screens";
import React, { useEffect, useState } from "react";
const Sections = styled.div`
  scroll-snap-type: y mandatory;

  > * {
    scroll-snap-align: start;
    padding-top: 8vh;
  }
`;

function App() {
  return (
    <motion.div initial='hidden' animate='show'>
      <ScrollToTop />
      <Header />
      <Sections>
        <Home />
        <About />
        <Experience />
        <Contact />
      </Sections>
      <Parallax />
    </motion.div>
  );
}

export default App;
