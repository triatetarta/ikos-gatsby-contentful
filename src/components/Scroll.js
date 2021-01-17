import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { ArrowTop } from "../animations/animations"

const Scroll = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true)
  const [hover, setHover] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <ArrowStyled>
      <div className="container">
        {show && (
          <Link to="/#nav">
            <motion.svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={() => setHover(false)}
            >
              <circle
                cx="50.0767"
                cy="49.9233"
                r="27.0529"
                transform="rotate(-90 50.0767 49.9233)"
                stroke="black"
                strokeWidth="2"
              />
              <motion.path
                variants={ArrowTop}
                initial="exit"
                animate={hover ? "enter" : "exit"}
                d="M50.7071 35.0072C50.3166 34.6167 49.6834 34.6167 49.2929 35.0072L42.9289 41.3711C42.5384 41.7617 42.5384 42.3948 42.9289 42.7854C43.3195 43.1759 43.9526 43.1759 44.3431 42.7854L50 37.1285L55.6569 42.7854C56.0474 43.1759 56.6805 43.1759 57.0711 42.7854C57.4616 42.3948 57.4616 41.7617 57.0711 41.3711L50.7071 35.0072ZM51 64.4299L51 35.7143L49 35.7143L49 64.4299L51 64.4299Z"
                fill="black"
              />
            </motion.svg>
          </Link>
        )}
      </div>
    </ArrowStyled>
  )
}

const ArrowStyled = styled.div`
  z-index: 2;
  position: fixed;
  bottom: 4vh;
  right: 5vw;

  @media screen and (max-width: 414px) {
    svg {
      width: 3rem;
      height: 3rem;
    }
  }
`

export default Scroll
