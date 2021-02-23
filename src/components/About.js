import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"
import { useScroll } from "./useScroll"
import { motion } from "framer-motion"
import {
  scrollAnimation,
  titleAnim,
  photoReveal,
  maskReveal,
} from "../animations/animations"

const About = ({ projects }) => {
  const [element, controls] = useScroll()
  return (
    <Wrapper
      ref={element}
      variants={scrollAnimation}
      animate={controls}
      id="about"
    >
      <div className="title hide">
        <motion.h2 variants={titleAnim}>
          your home is our <br />
          concern
        </motion.h2>
      </div>
      <div className="row-1">
        <div className="left-side">
          <div className="hide">
            <motion.div className="left-img" variants={photoReveal}>
              <Image fluid={projects[5].image.fluid} />
              <motion.div variants={maskReveal} className="mask"></motion.div>
            </motion.div>
          </div>
        </div>
        <div className="right-side">
          <div className="right-side-text">
            <div className="hide">
              <motion.h4 variants={titleAnim}>about us</motion.h4>
            </div>
            <div className="hide">
              <motion.p variants={titleAnim}>
                Ikos was established in London in 2014 by its director, Christos
                and started undertaking small refurbishments around Northwest
                London.
                <br />
                <br />
              </motion.p>
            </div>
            <div className="hide">
              <motion.p variants={titleAnim} s>
                Its high quality work helped the company expand to a medium size
                contractor, managing a team of reliable builders, and running
                multiple residential and commercial projects.
              </motion.p>
            </div>
          </div>
          <div className="hide">
            <motion.div className="right-img" variants={photoReveal}>
              <Image fluid={projects[4].image.fluid} />
              <motion.div variants={maskReveal} className="mask"></motion.div>
            </motion.div>
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

  h2 {
    font-weight: lighter;
    text-transform: uppercase;
    font-size: 1.9rem;
    font-family: var(--ff-secondary);
    line-height: 1.2;
  }

  .row-1 {
    display: flex;
    flex-direction: row;

    .left-side {
      padding: 1rem 2rem 1rem 0;
      flex: 1;
      overflow: hidden;
      position: relative;

      .left-img {
        width: 100%;
        height: 100%;
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
    .right-side {
      flex: 1;
      padding: 10rem 0 1rem 2rem;

      .right-side-text {
        width: 90%;
        padding-bottom: 5rem;

        h4 {
          padding-bottom: 2rem;
          color: var(--clr-primary-5);
          font-family: var(--ff-secondary);
          font-size: 1.3rem;
          text-transform: uppercase;
        }

        p {
          margin-bottom: 0;
        }
      }
      .right-img {
        width: 100%;
        height: 100%;
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

  @media screen and (max-width: 414px) {
    max-width: 90vw;
    width: 90vw;
    margin: 0 auto;
    padding-top: 3rem;

    h2 {
      font-size: 1.5rem;
    }

    .row-1 {
      flex-direction: column;

      .left-side {
        .left-img {
          width: 80%;
        }
      }

      .right-side {
        padding: 1rem 0 0 0;

        .right-side-text {
          width: 100%;
          padding-bottom: 1rem;

          h4 {
            font-size: 1.1rem;
            padding-bottom: 1.3rem;
          }
        }
        .right-img {
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    max-width: 90vw;
    width: 90vw;
    margin: 0 auto;
  }
`

export default About
