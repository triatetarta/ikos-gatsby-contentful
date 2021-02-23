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
  const [element1, controls1] = useScroll()
  return (
    <Wrapper id="projects">
      <motion.div
        ref={element}
        variants={scrollAnimation}
        animate={controls}
        initial="hidden"
        className="row-1"
      >
        <div className="left-column">
          <div className="text">
            <div className="hide">
              <motion.h2 variants={titleAnim}>Residential Projects</motion.h2>
            </div>
            <div className="hide">
              <motion.p variants={titleAnim}>
                Most of our projects relate to residential properties, such as
                flats, houses and summer studios.
                <br />
                <br />
                We are capable of undertaking:
              </motion.p>
            </div>

            <ul>
              <div className="hide">
                <motion.li variants={titleAnim}>
                  Kitchen - bathroom refurbishment.
                </motion.li>
              </div>
              <div className="hide">
                <motion.li variants={titleAnim}>
                  Full interior fit-outs.
                </motion.li>
              </div>
              <div className="hide">
                <motion.li variants={titleAnim}>
                  Extension - Loft conversion.
                </motion.li>
              </div>
            </ul>
            <Link to="/projects">
              <div className="hide">
                <ButtonBlack variants={titleAnim}>
                  <div class="btn-container">
                    <Link to="/projects" role="button">
                      all projects
                    </Link>
                    <div class="ease"></div>
                  </div>
                </ButtonBlack>
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
      </motion.div>
      <motion.div
        ref={element1}
        variants={scrollAnimation}
        animate={controls1}
        initial="hidden"
        className="row-2"
      >
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
                Other than residential properties, Ikos has worked on commercial
                projects, such as restaurants, bars, coffee shops, offices and
                other businesses.
                <br />
                <br />
                Some of our clients are:
              </motion.p>
            </div>

            <ul>
              <div className="hide">
                <motion.li variants={titleAnim}>
                  Stirling Ackroyd and Suzi Tros.
                </motion.li>
              </div>
              <div className="hide">
                <motion.li variants={titleAnim}>The Nook Cafe.</motion.li>
              </div>
              <div className="hide">
                <motion.li variants={titleAnim}>
                  The Prostate Cancer Research Centre.
                </motion.li>
              </div>
              <div className="hide">
                <motion.li variants={titleAnim}>Hygge Pygge Cafe.</motion.li>
              </div>
              <div className="hide">
                <motion.li variants={titleAnim}>We Grill.</motion.li>
              </div>
            </ul>
            <Link to="/projects">
              <div className="hide">
                <ButtonBlack variants={titleAnim}>
                  <div class="btn-container">
                    <Link to="/projects" role="button">
                      all projects
                    </Link>
                    <div class="ease"></div>
                  </div>
                </ButtonBlack>
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
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

const ButtonBlack = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  text-align: center;
  .btn-container {
    margin: 1rem;
  }

  .btn-container > a {
    float: left;
    font: 100 1.2rem/50px sans-serif;
    text-align: center;
    background: transparent;
    color: #333;
    border: 1px solid #333;
    width: 230px;
    margin-top: -2px;
    cursor: pointer;
    -webkit-transition: all ease 0.25s;
    -moz-transition: all ease 0.25s;
    -o-transition: all ease 0.25s;
    transition: all ease 0.25s;
  }

  .btn-container > a:hover {
    background: rgba(255, 255, 255, 0);
    color: #fff;
  }

  .ease {
    background: #ffffff;
    width: 0px;
    height: 50px;
    -webkit-transition: all ease 0.25s;
    -moz-transition: all ease 0.25s;
    -o-transition: all ease 0.25s;
    transition: all ease 0.25s;
  }

  .btn-container:hover .ease {
    background: #333;
    border: 0;
    width: 230px;
  }

  @media screen and (max-width: 1024px) {
    .btn-container > a {
      width: 130px;
      font: 100 1rem/50px sans-serif;
    }
    .btn-container:hover .ease {
      background: #333;
      border: 0;
      width: 130px;
    }
  }

  @media screen and (max-width: 414px) {
    .btn-container > a {
      width: 120px;
      font: 100 0.8rem/50px sans-serif;
    }
    .btn-container:hover .ease {
      background: #333;
      border: 0;
      width: 120px;
    }
  }
`

export default ResidentialCommercial
