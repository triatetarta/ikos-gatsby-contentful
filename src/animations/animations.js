export const pageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export const navAnimation = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
    },
  },
}

export const scrollAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export const footerAnim = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    y: 300,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
}

export const titleAnim = {
  hidden: { y: "100%", skewX: 10 },
  show: {
    y: "0%",
    skewX: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
}

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 2,
    },
  },
}

export const photoAnim = {
  hidden: {
    scale: 1.5,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
}

export const photoReveal = {
  hidden: {
    // x: "0%",
    y: "80%",
  },
  show: {
    // x: "0%",
    y: "0%",
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
}

export const maskReveal = {
  hidden: {
    // x: "0%",
    y: "0%",
  },
  show: {
    // x: "100%",
    y: "-100%",
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
}
export const maskRevealShowcase = {
  hidden: {
    x: "0%",
  },
  show: {
    x: "-100%",

    transition: {
      duration: 1.4,
      ease: "easeOut",
    },
  },
}

export const ArrowText = {
  enter: {
    rotate: -360,
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    },
  },
  exit: {
    rotate: 0,
    transition: {
      duration: 0.2,
    },
  },
}

export const ArrowArrow = {
  enter: {
    x: 5,
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
    },
  },
  exit: {
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
}
export const ArrowTop = {
  enter: {
    y: 5,
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
    },
  },
  exit: {
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
}

export const slider = {
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { ease: "easeOut", duration: 1 },
  },
}

export const sliderContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: "easeOut",
    },
  },
}

export const lineHover = {
  hidden: {
    x: "-110%",
  },
  show: {
    x: "0%",
    transition: {
      type: "tween",
      duration: 0.3,
      ease: "linear",
    },
  },
}

export const topTitleVariant = {
  notHovered: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
  hovered: {
    transition: {
      staggerChildren: 0.07,
    },
  },
}

export const topSpanVariant = {
  notHovered: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  hovered: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

export const bottomTitleVariant = {
  notHovered: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
  hovered: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export const bottomSpanVariant = {
  notHovered: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  hovered: {
    opacity: 0,
    y: "100%",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}
