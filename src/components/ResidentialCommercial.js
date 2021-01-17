import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { useScroll } from "./useScroll"
import { motion } from "framer-motion"
import {
  scrollAnimation,
  titleAnim,
  photoReveal,
  maskReveal,
} from "../animations/animations"

const ResidentialCommercial = ({ projects }) => {
  const [element, controls] = useScroll()
  return (
    <Wrapper
      ref={element}
      variants={scrollAnimation}
      animate={controls}
      initial="hidden"
      id="projects"
    >
      <div className="row-1">
        <div className="left-column">
          <div className="text">
            <div className="hide">
              <motion.h2 variants={titleAnim}>Residential Projects</motion.h2>
            </div>
            <div className="hide">
              <motion.p variants={titleAnim}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                repudiandae explicabo fugit dolorum laudantium ipsum temporibus
                quisquam magnam asperiores impedit!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, culpa.
              </motion.p>
            </div>

            <ul>
              <div className="hide">
                <motion.li variants={titleAnim}>Lorem, ipsum.</motion.li>
              </div>
              <div className="hide">
                <motion.li variants={titleAnim}>
                  Lorem ipsum dolor sit.
                </motion.li>
              </div>
              <div className="hide">
                <motion.li variants={titleAnim}>Lorem, ipsum dolor.</motion.li>
              </div>
            </ul>
            <Link to="/projects">
              <div className="hide">
                <motion.button variants={titleAnim}>all projects</motion.button>
              </div>
            </Link>
          </div>
        </div>
        <div className="right-column">
          <div className="hide">
            <motion.div variants={photoReveal} className="right-img">
              <Image fluid={projects[0].image.fluid} />
              <motion.div variants={maskReveal} className="mask"></motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="row-2">
        <div className="left-column">
          <div className="hide">
            <motion.div variants={photoReveal} className="left-img">
              <Image fluid={projects[1].image.fluid} className="img" />
              <motion.div variants={maskReveal} className="mask"></motion.div>
            </motion.div>
          </div>
        </div>
        <div className="right-column">
          <div className="text">
            <div className="hide">
              <motion.h2 variants={titleAnim}>Commercial Projects</motion.h2>
            </div>
            <div className="hide">
              <motion.p variants={titleAnim}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                repudiandae explicabo fugit dolorum laudantium ipsum temporibus
                quisquam magnam asperiores impedit!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, culpa.
              </motion.p>
            </div>

            <ul>
              <div className="hide">
                <motion.li variants={titleAnim}>Lorem, ipsum.</motion.li>
              </div>
              <div className="hide">
                <motion.li variants={titleAnim}>
                  Lorem ipsum dolor sit.
                </motion.li>
              </div>
              <div className="hide">
                <motion.li variants={titleAnim}>Lorem, ipsum dolor.</motion.li>
              </div>
            </ul>
            <Link to="/projects">
              <div className="hide">
                <motion.button variants={titleAnim}>all projects</motion.button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled(motion.section)`
  padding-top: 6rem;
  max-width: var(--max-width);
  width: var(--max-width);
  margin: 0 auto;

  .hide {
    overflow: hidden;
  }

  .row-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 6rem;

    .left-column {
      flex: 1;

      .text {
        padding: 2rem 2rem 2rem 0;

        h2 {
          text-transform: uppercase;
          padding-bottom: 3rem;
          font-family: var(--ff-secondary);
        }

        p {
          padding-bottom: 0;
          margin-bottom: 0;
        }

        ul {
          list-style: none;
          margin-bottom: 4rem;

          li {
            padding: 1rem 0;

            &::before {
              content: "— ";
            }
          }
        }

        button {
          border: none;
          outline: none;
          background-color: transparent;
          border: 1px var(--clr-black) solid;
          padding: 1rem 2rem;
          font-size: 1rem;
          cursor: pointer;
        }
      }
    }
    .right-column {
      flex: 1;
      position: relative;
      overflow: hidden;

      .right-img {
        width: 70%;
        margin-left: 4rem;
        overflow: hidden;
      }

      .mask {
        overflow: hidden;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: white;
      }
    }
  }

  .row-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 6rem;

    .left-column {
      flex: 1;

      .left-img {
        width: 70%;

        .mask {
          overflow: hidden;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background: white;
        }
      }
    }
    .right-column {
      flex: 1;

      .text {
        padding: 2rem 2rem 2rem 0;

        h2 {
          text-transform: uppercase;
          padding-bottom: 3rem;
          font-family: var(--ff-secondary);
        }

        p {
          padding-bottom: 2rem;
          margin-bottom: 0;
        }

        ul {
          list-style: none;
          margin-bottom: 4rem;

          li {
            padding: 1rem 0;

            &::before {
              content: "— ";
            }
          }
        }

        button {
          border: none;
          outline: none;
          background-color: transparent;
          border: 1px var(--clr-black) solid;
          padding: 1rem 2rem;
          font-size: 1rem;
          cursor: pointer;
        }
      }
    }
  }

  @media screen and (max-width: 414px) {
    max-width: 90vw;
    width: 90vw;
    margin: 0 auto;
    padding-top: 1rem;

    .row-1 {
      flex-direction: column;

      .left-column {
        .text {
          padding: 2rem 2rem 2rem 0;

          h2 {
            font-size: 1.5rem;
            padding-bottom: 2rem;
          }

          p {
            padding-bottom: 1rem;
            margin-bottom: 0;
          }

          ul {
            padding-bottom: 2rem;

            li {
              padding: 0.6rem 0;
            }
          }

          button {
            padding: 0.6rem 1.8rem;
            font-size: 1rem;
          }
        }
      }
      .right-column {
        .right-img {
          width: 80%;
          margin: 0;
          padding: 0rem 1rem;
        }
      }
    }

    .row-2 {
      flex-direction: column-reverse;
      padding-bottom: 3rem;

      .left-column {
        width: 100%;

        .left-img {
          margin-left: 5rem;
          width: 60%;
        }
      }
      .right-column {
        .text {
          padding: 2rem 2rem 2rem 0;

          h2 {
            font-size: 1.5rem;
            padding-bottom: 2rem;
          }

          p {
            padding-bottom: 1rem;
          }

          ul {
            padding-bottom: 2rem;

            li {
              padding: 0.6rem 0;
            }
          }

          button {
            padding: 0.6rem 1.8rem;
            font-size: 1rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    max-width: 90vw;
    width: 90vw;
    margin: 0 auto;
    padding-top: 1rem;

    h2 {
      font-size: 2.2rem;
    }
  }
`

export default ResidentialCommercial
