import React from "react"
import Background from "./Background"
import Arrow from "./Arrow"
import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { titleAnim, fade, maskRevealShowcase } from "../animations/animations"

const Showcase = () => {
  return (
    <Wrapper>
      <div className="card">
        <article>
          <motion.div className="container">
            <div className="first hide">
              <motion.h3 variants={titleAnim}>
                If you can dream it, we can create it
              </motion.h3>
            </div>

            <div className="second hide">
              <motion.h1 variants={titleAnim}>
                let your home be unique and stylish
              </motion.h1>
            </div>

            <div className="third hide">
              <motion.p variants={titleAnim}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                magnam, ea accusamus debitis nulla impedit autem quod voluptatum
                ex, dicta officiis beatae quibusdam officia consequatur unde
                quisquam sapiente ab dolorum?
              </motion.p>
            </div>
            <div className="fourth hide">
              <motion.div variants={fade} className="fourth-div">
                <Link to="/projects">
                  <Arrow />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </article>
      </div>

      <div className="hide">
        <Background />
        <motion.div variants={maskRevealShowcase} className="mask"></motion.div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 0 auto;
  position: relative;

  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
  }

  .card {
    position: absolute;
    left: 0;
    top: 25%;
    width: 100%;
    height: 90vh;
    z-index: 1;

    article {
      max-width: var(--max-width);
      margin: 0 auto;

      .container {
        width: 700px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        h3 {
          font-family: var(--ff-primary);
          font-weight: lighter;
          padding: 0.5rem 0;
        }
        h1 {
          text-transform: uppercase;
          font-weight: lighter;
          letter-spacing: 3px;
          line-height: 1.1;
          padding: 0.5rem 0;
          font-family: var(--ff-secondary);
        }
        p {
          padding: 0.5rem 0;
          margin-bottom: 0;
        }

        svg {
          margin-top: 1.6rem;
        }
      }
    }
  }

  .hide {
    overflow: hidden;
  }

  @media screen and (max-width: 1024px) {
    max-width: 90vw;
    margin: 0 0 0 auto;

    .card {
      top: 6vh;

      article {
        .container {
          max-width: 650px;
          flex-wrap: wrap;
        }
      }
    }
  }

  @media screen and (max-width: 414px) {
    max-width: 90vw;
    margin: 0 auto;

    .card {
      top: 2.2vh;
      height: 90vh;
      z-index: 1;

      article {
        .container {
          width: 300px;
          flex-wrap: wrap;

          .first {
            order: 2;
            display: none;
          }

          .second {
            order: 1;
            h1 {
              line-height: 1.3;
              padding-left: 1rem;
              font-size: 2.5rem;
            }
          }

          .third {
            order: 4;
            display: none;
          }

          .hide {
            order: 3;
            margin-top: 3rem;
          }
        }
      }

      .hide {
        overflow-x: hidden;
      }
    }
  }
`

export default Showcase
