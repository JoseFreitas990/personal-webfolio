export const headerAnimation = {
  hidden: { y: -100, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export const principleTextAnimation = {
  hidden: {
    x: window.screen.width + window.screen.width,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

export const astronautAnimation = {
  show: {
    x: [-10, -40, -30, 0, 45, -10],
    y: [-25, 5, -90, 10, -35, -25],
  },
};

export const aboutTextContainerAnimation = {};

export const aboutTextAnimation = {
  hidden: {
    x: -window.screen.width,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 40,
    },
  },
};

export const imageAnimation = {
  hidden: {
    scale: 1.5,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
  },
};

export const experienceAnimation = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.2,
      type: "tween",
    },
  },
};

export const projectAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      type: "tween",
    },
  },
};

export const leftContactAnimation = {
  hidden: {
    x: -window.screen.width,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      type: "tween",
    },
  },
};

export const rightContactAnimation = {
  hidden: {
    x: window.screen.width,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      type: "tween",
    },
  },
};
