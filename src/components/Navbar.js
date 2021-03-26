import React, { useContext, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyContext } from "../context/context"
import { motion, AnimateSharedLayout } from "framer-motion"
import {
  navAnimation,
  topSpanVariant,
  topTitleVariant,
  bottomTitleVariant,
  bottomSpanVariant,
} from "../animations/animations"
import { navLinks } from "../data"

const Navbar = () => {
  const { isSidebarOpen, showSidebar } = useContext(GatsbyContext)

  const [titleHovered, setTitleHovered] = useState(false)

  const [hovered, setHovered] = useState(undefined)
  const [selected, setSelected] = useState(0)
  const [state] = useState({
    isOutside: true,
    isOutsideItem: true,
  })

  const handleTitleHover = () => setTitleHovered(prevState => !prevState)

  return (
    <StyledNavbar
      variants={navAnimation}
      initial="hidden"
      animate="show"
      id="nav"
    >
      <div className="logo">
        <Link to="/">
          <motion.div
            className="title-container"
            onMouseEnter={handleTitleHover}
            onMouseLeave={handleTitleHover}
          >
            <motion.h1
              className="shown"
              initial="notHovered"
              animate={titleHovered ? "hovered" : "notHovered"}
              variants={topTitleVariant}
            >
              <motion.span variants={topSpanVariant}>Ι</motion.span>
              <motion.span variants={topSpanVariant}>k</motion.span>
              <motion.span variants={topSpanVariant}>o</motion.span>
              <motion.span variants={topSpanVariant}>s</motion.span>
              <motion.span
                className="space"
                variants={topSpanVariant}
              ></motion.span>
              <motion.span variants={topSpanVariant}>C</motion.span>
              <motion.span variants={topSpanVariant}>o</motion.span>
              <motion.span variants={topSpanVariant}>n</motion.span>
              <motion.span variants={topSpanVariant}>s</motion.span>
              <motion.span variants={topSpanVariant}>t</motion.span>
              <motion.span variants={topSpanVariant}>r</motion.span>
              <motion.span variants={topSpanVariant}>u</motion.span>
              <motion.span variants={topSpanVariant}>c</motion.span>
              <motion.span variants={topSpanVariant}>t</motion.span>
              <motion.span variants={topSpanVariant}>i</motion.span>
              <motion.span variants={topSpanVariant}>o</motion.span>
              <motion.span variants={topSpanVariant}>n</motion.span>
            </motion.h1>

            <motion.h1
              className="shown"
              initial="notHovered"
              animate={titleHovered ? "hovered" : "notHovered"}
              variants={bottomTitleVariant}
            >
              <motion.span variants={bottomSpanVariant}>Ι</motion.span>
              <motion.span variants={bottomSpanVariant}>k</motion.span>
              <motion.span variants={bottomSpanVariant}>o</motion.span>
              <motion.span variants={bottomSpanVariant}>s</motion.span>
              <motion.span
                className="space"
                variants={bottomSpanVariant}
              ></motion.span>
              <motion.span variants={bottomSpanVariant}>C</motion.span>
              <motion.span variants={bottomSpanVariant}>o</motion.span>
              <motion.span variants={bottomSpanVariant}>n</motion.span>
              <motion.span variants={bottomSpanVariant}>s</motion.span>
              <motion.span variants={bottomSpanVariant}>t</motion.span>
              <motion.span variants={bottomSpanVariant}>r</motion.span>
              <motion.span variants={bottomSpanVariant}>u</motion.span>
              <motion.span variants={bottomSpanVariant}>c</motion.span>
              <motion.span variants={bottomSpanVariant}>t</motion.span>
              <motion.span variants={bottomSpanVariant}>i</motion.span>
              <motion.span variants={bottomSpanVariant}>o</motion.span>
              <motion.span variants={bottomSpanVariant}>n</motion.span>
            </motion.h1>

            <h1 className="hidden">
              <span>I</span>
              <span>k</span>
              <span>o</span>
              <span>s</span>
              <span className="space"></span>
              <span>C</span>
              <span>o</span>
              <span>n</span>
              <span>s</span>
              <span>t</span>
              <span>r</span>
              <span>u</span>
              <span>c</span>
              <span>t</span>
              <span>i</span>
              <span>o</span>
              <span>n</span>
            </h1>
          </motion.div>
        </Link>
      </div>
      <AnimateSharedLayout
        transition={{ type: "spring", damping: 5, mass: 0.1 }}
      >
        <ul
          onMouseEnter={() => {
            state.isOutside = false
          }}
          onMouseLeave={() => {
            setHovered(undefined)
            state.isOutside = true
          }}
        >
          {navLinks.map(({ title, link }, i) => (
            <Link to={link} key={i}>
              <li
                key={i}
                className={`title`}
                onMouseEnter={() => {
                  setHovered(i)
                }}
                onClick={() => {
                  setSelected(i)
                }}
              >
                {i === hovered && (
                  <motion.div
                    layoutId="hoverHere"
                    style={{
                      width: "100%",
                      height: 1,
                      borderRadius: 4,
                      position: "absolute",
                      left: 0,
                      right: 0,
                      marginLeft: "auto",
                      marginRight: "auto",
                      bottom: -4,
                      backgroundColor: "#404040",
                    }}
                  />
                )}

                {i === selected && state.isOutside && (
                  <motion.div
                    key={i}
                    layoutId="hoverHere"
                    style={{
                      width: "20px",
                      height: 1,
                      borderRadius: 4,
                      position: "absolute",
                      left: 0,
                      right: 0,
                      marginLeft: "auto",
                      marginRight: "auto",
                      bottom: -4,
                      backgroundColor: "#404040",
                    }}
                  />
                )}

                {title}
              </li>
            </Link>
          ))}
          <li
            className={`title`}
            style={{ color: "gray" }}
            onClick={() => {
              setSelected(undefined)
              setHovered(undefined)
            }}
          ></li>
        </ul>
      </AnimateSharedLayout>
      <div className="mobile">
        {!isSidebarOpen && (
          <button onClick={showSidebar}>
            <svg
              width="32"
              height="30"
              viewBox="0 0 70 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="8.74228e-08"
                y1="1"
                x2="70"
                y2="1.00001"
                stroke="black"
                strokeWidth="2"
              />
              <line
                x1="36"
                y1="13"
                x2="70"
                y2="13"
                stroke="black"
                strokeWidth="2"
              />
              <line
                x1="13"
                y1="26"
                x2="70"
                y2="26"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </button>
        )}
      </div>
    </StyledNavbar>
  )
}

export default Navbar

const StyledNavbar = styled(motion.nav)`
  width: 90vw;
  max-width: var(--max-width);
  min-height: 10vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    flex: 1;

    a {
      text-decoration: none;
      color: var(--clr-black);
      .title-container {
        position: relative;
        overflow-y: hidden;

        h1 {
          display: flex;
          user-select: none;
          line-height: 90%;
          font-size: 2rem;
          font-weight: 100;

          .space {
            margin: 0 8px;
          }

          &.shown {
            position: absolute;
            top: 0;
            will-change: transform, opacity;
          }
          &.hidden {
            visibility: hidden;
            opacity: 0;
          }
          span {
            display: block;
            margin: 0 1px;
          }
        }
      }
    }
  }
  ul {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    li {
      cursor: pointer;
      position: relative;
      color: var(--clr-black);

      a {
        text-decoration: none;
        color: var(--clr-black);
        position: relative;
      }
    }
  }

  .mobile {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    max-width: 90vw;
    margin: 0 auto;

    .logo {
      a {
        .title-container {
          h1 {
            font-size: 1.8rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 414px) {
    max-width: 90vw;
    width: 90vw;
    margin: 0 auto;

    .logo {
      a {
        display: inline-block;

        .title-container {
          h1 {
            font-size: 1.1rem;
          }
        }
      }
    }

    ul {
      display: none;
    }

    .mobile {
      display: block;
      button {
        cursor: pointer;
        outline: none;
        background: none;
        border: none;
      }
    }
  }
`
