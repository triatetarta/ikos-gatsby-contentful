import React from "react"
import { graphql } from "gatsby"
import { SEO } from "../components"
import Image from "gatsby-image"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { motion } from "framer-motion"
import {
  pageAnimation,
  titleAnim,
  maskRevealShowcase,
} from "../animations/animations"
import Rows from "../components/Rows"

const projectTemplate = ({
  data: {
    project: {
      title,
      category,
      roomOneTitle,
      roomTwoTitle,
      infoPhoto,
      descOne,
      descTwo,
      descThree,
      info: { info },
      image: { fluid },
      photos,
    },
  },
}) => {
  return (
    <>
      <SEO title={`${title}`} />
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <Background>
          <BackgroundImage
            Tag="div"
            fluid={photos[0].fluid}
            className="bcg"
            preserveStackingContext={true}
          >
            <div className="hide">
              <motion.h2 variants={titleAnim}>{title}</motion.h2>
            </div>
          </BackgroundImage>
          <motion.div
            variants={maskRevealShowcase}
            className="mask"
          ></motion.div>
        </Background>
        <Wrapper>
          <article>
            <div className="img">
              <Image fluid={fluid} alt={title} />
              <motion.div
                variants={maskRevealShowcase}
                className="mask"
              ></motion.div>
            </div>
          </article>
          <article>
            <div className="hide">
              <motion.h2 variants={titleAnim}>{title}</motion.h2>
            </div>
            <div className="hide">
              <motion.h5 variants={titleAnim}>{category}</motion.h5>
            </div>
            <div className="hide">
              <motion.p variants={titleAnim}>{info}</motion.p>
            </div>
          </article>
        </Wrapper>
        <RowOne className="row-1">
          <div className="left-image">
            <Image fluid={photos[1].fluid} />
            <motion.div
              variants={maskRevealShowcase}
              className="mask"
            ></motion.div>
            <div className="text">
              <p>{infoPhoto}</p>
            </div>
          </div>
          <div className="right-image">
            <Image fluid={photos[2].fluid} />
            <motion.div
              variants={maskRevealShowcase}
              className="mask"
            ></motion.div>
          </div>
        </RowOne>
        <Rows
          roomOneTitle={roomOneTitle}
          roomTwoTitle={roomTwoTitle}
          descOne={descOne}
          descTwo={descTwo}
          descThree={descThree}
          photos={photos}
        />
      </motion.div>
    </>
  )
}

export const query = graphql`
  query GetSingleProject($slug: String) {
    project: contentfulProject(slug: { eq: $slug }) {
      title
      category
      roomOneTitle
      roomTwoTitle
      infoPhoto
      descOne
      descTwo
      descThree
      image {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyContentfulFluid
        }
      }
      info {
        info
      }
      photos {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

const Background = styled.div`
  position: relative;
  .hide {
    overflow: hidden;
  }

  .bcg {
    min-height: 30vh;

    h2 {
      padding-top: 2rem;
      text-align: center;
      text-transform: uppercase;
      font-family: var(--ff-secondary);
    }
  }

  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
  }

  @media screen and (max-width: 1024px) {
    .bcg {
      min-height: 25vh;
      h2 {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (max-width: 414px) {
    .bcg {
      min-height: 20vh;
      h2 {
        font-size: 1.2rem;
      }
    }
  }
`

const Wrapper = styled.section`
  width: var(--max-width);
  max-width: var(--max-width);
  margin: 6rem auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 2rem;

  .hide {
    overflow: hidden;
  }

  article {
    padding-right: 4rem;
    position: relative;
    .img {
      width: 400px;

      .mask {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: white;
      }
    }

    h2 {
      font-size: 2.2rem;
      font-family: var(--ff-secondary);
      padding-bottom: 0.5rem;
    }

    h5 {
      font-weight: lighter;
      display: inline-block;
      color: var(--clr-white);
      background-color: var(--clr-primary-5);
      padding: 0.2rem 0.3rem;
    }
    p {
      margin-bottom: 0;
      padding-top: 1rem;
    }
  }

  @media screen and (max-width: 1024px) {
    max-width: 90vw;
    grid-template-columns: 1fr 2fr;
    margin: 3.5rem auto;
    article {
      padding-right: 0rem;
      .img {
        width: 40vw;
      }

      h2 {
        font-size: 1.4rem;
        padding-top: 1rem;
      }

      h5 {
        font-size: 0.8rem;
      }
    }
  }

  @media screen and (max-width: 414px) {
    max-width: 90vw;
    margin: 3rem auto;
    grid-template-columns: 1fr;

    article {
      padding-right: 0rem;
      .img {
        width: 90vw;
      }

      h2 {
        font-size: 1.2rem;
        padding-top: 1rem;
      }

      h5 {
        font-size: 0.7rem;
      }
    }
  }
`

const RowOne = styled.div`
  width: var(--max-width);
  max-width: var(--max-width);
  margin: 0rem auto 6rem auto;
  display: grid;
  grid-template-columns: 2fr 3fr;
  column-gap: 2rem;

  .left-image,
  .right-image {
    overflow: hidden;
    position: relative;

    .mask {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: white;
    }
  }

  @media screen and (max-width: 1024px) {
    max-width: 90vw;
    margin: 2rem auto;
    grid-template-columns: 1fr 2fr;

    p {
      padding: 0.75rem 0 1rem 0;
    }
  }

  @media screen and (max-width: 414px) {
    max-width: 90vw;
    margin: 3rem auto;
    grid-template-columns: 1fr;

    .left-image {
      .text {
        p {
          padding: 0.75rem 0 1rem 0;
        }
      }
    }
  }
`

export default projectTemplate
