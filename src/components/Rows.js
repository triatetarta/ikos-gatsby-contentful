import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { useScroll } from "./useScroll"
import { motion } from "framer-motion"
import {
  scrollAnimation,
  titleAnim,
  maskRevealShowcase,
} from "../animations/animations"

const Rows = ({ photos }) => {
  const [element, controls] = useScroll()
  const [element1, controls1] = useScroll()
  const [element2, controls2] = useScroll()
  return (
    <>
      <RowTwo
        ref={element}
        variants={scrollAnimation}
        animate={controls}
        className="row-2"
      >
        <div className="left-side">
          <div className="hide">
            <motion.h4 variants={titleAnim}>Room 1</motion.h4>
          </div>
          <div className="hide">
            <motion.p variants={titleAnim}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis excepturi vitae illo cupiditate. Corporis aperiam a
              porro nam vitae blanditiis molestiae omnis quos. Nisi similique
              numquam cum magnam possimus. Porro.
            </motion.p>
          </div>

          <div className="img">
            <Image fluid={photos[3].fluid} />
            <motion.div
              variants={maskRevealShowcase}
              className="mask"
            ></motion.div>
          </div>
        </div>
        <div className="right-side">
          <div className="hide">
            <motion.h4 variants={titleAnim}>Room 2</motion.h4>
          </div>
          <div className="hide">
            <motion.p variants={titleAnim}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis excepturi vitae illo cupiditate. Corporis aperiam a
              porro nam vitae blanditiis molestiae omnis quos. Nisi similique
              numquam cum magnam possimus. Porro.
            </motion.p>
          </div>

          <div className="img">
            <Image fluid={photos[4].fluid} />
            <motion.div
              variants={maskRevealShowcase}
              className="mask"
            ></motion.div>
          </div>
        </div>
      </RowTwo>
      <RowThree
        ref={element1}
        variants={scrollAnimation}
        animate={controls1}
        className="row-3"
      >
        <div className="img">
          <Image
            fluid={{ ...photos[5].fluid, aspectRatio: 8 / 3 }}
            imgStyle={{ objectFit: "cover", objectPosition: "50% 50%" }}
          />
          <p>description</p>
        </div>
        <motion.div variants={maskRevealShowcase} className="mask"></motion.div>
      </RowThree>
      <RowFour
        ref={element2}
        variants={scrollAnimation}
        animate={controls2}
        className="row-4"
      >
        <div className="img">
          <Image fluid={photos[6].fluid} />
          <p>description</p>
          <motion.div
            variants={maskRevealShowcase}
            className="mask"
          ></motion.div>
        </div>
        <div className="img">
          <Image fluid={photos[7].fluid} />
          <p>description</p>
          <motion.div
            variants={maskRevealShowcase}
            className="mask"
          ></motion.div>
        </div>
      </RowFour>

      <ButtonBlack>
        <div class="btn-container">
          <Link to="/projects" role="button">
            back to projects
          </Link>
          <div class="ease"></div>
        </div>
      </ButtonBlack>
    </>
  )
}

const RowTwo = styled(motion.div)`
  width: var(--max-width);
  max-width: var(--max-width);
  margin: 0rem auto 6rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;

  .hide {
    overflow: hidden;
  }

  .img {
    position: relative;
    overflow: hidden;
  }

  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
  }

  .left-side,
  .right-side {
    h4 {
      font-size: 1.2rem;
      font-weight: bold;
      padding-bottom: 1rem;
    }
    p {
      padding-bottom: 1rem;
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 1024px) {
    max-width: 90vw;
    margin: 0rem auto 3rem auto;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 414px) {
    max-width: 90vw;
    grid-template-columns: 1fr;
    margin: 0rem auto 3rem auto;

    .right-side {
      padding-top: 2rem;
    }
  }
`

const RowThree = styled(motion.div)`
  width: var(--max-width);
  max-width: var(--max-width);
  margin: 0rem auto 6rem auto;
  position: relative;

  .hide {
    overflow: hidden;
  }

  .img {
    position: relative;
    overflow: hidden;
  }

  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
  }

  p {
    padding-top: 1rem;
  }

  @media screen and (max-width: 1024px) {
    max-width: 100vw;
    grid-template-columns: 1fr;
    margin: 0rem auto 3rem auto;
    .img {
      p {
        margin-left: 10vw;
      }
    }
  }

  @media screen and (max-width: 414px) {
    max-width: 100vw;
    grid-template-columns: 1fr;
    margin: 0rem auto 3rem auto;

    .img {
      p {
        margin-left: 10vw;
      }
    }
  }
`

const RowFour = styled(motion.div)`
  width: var(--max-width);
  max-width: var(--max-width);
  margin: 0rem auto 6rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;

  .hide {
    overflow: hidden;
  }

  .img {
    position: relative;
    overflow: hidden;
  }

  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
  }

  p {
    padding-top: 1rem;
  }

  @media screen and (max-width: 1024px) {
    max-width: 90vw;
    grid-template-columns: 1fr;
    margin: 0rem auto 3rem auto;
  }

  @media screen and (max-width: 414px) {
    max-width: 90vw;
    grid-template-columns: 1fr;
    margin: 0rem auto 3rem auto;
  }
`

const ButtonBlack = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  .btn-container {
    width: 100%;
    max-width: 230px;
    margin: 60px;
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
`

export default Rows
