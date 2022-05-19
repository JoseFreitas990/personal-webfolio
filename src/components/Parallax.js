import { ReactComponent as Ellipse2 } from "../assets/Ellipse2.svg";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as Ellipse1 } from "../assets/Ellipse1.svg";
import { ReactComponent as Ellipse3 } from "../assets/Ellipse3.svg";
import { Asteroid } from "../constants/constants";
const Parallax = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const EllipseImage1 = styled(Ellipse1)`
    position: absolute;
    top: 90vh;
    left: 6rem;
    z-index: 0;
  `;

  const EllipseImage2 = styled(Ellipse2)`
    position: absolute;
    top: 30vh;
    left: 62vw;
    z-index: 0;
  `;

  const EllipseImage3 = styled(Ellipse3)`
    position: absolute;
    top: 70vh;
    right: 15vw;
    z-index: 0;
  `;

  const Image = styled.img`
    position: absolute;
    top: 115vh;
    left: 15vw;
    z-index: 0;
    width: 10rem;
    height: auto;
  `;
  return (
    <div>
      <EllipseImage1 style={{ transform: `translateY(${offsetY * -0.3}px)` }} />
      <EllipseImage2 style={{ transform: `translateY(${offsetY * -0.5}px)` }} />
      <EllipseImage3 style={{ transform: `translateY(${offsetY * -0.2}px)` }} />
      <Image
        style={{
          transform: `translate(${offsetY * -0.3}px,${offsetY * 0.3}px) `,
        }}
        src={Asteroid}
      />
    </div>
  );
};

export default Parallax;
