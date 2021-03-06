import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const query = graphql`
  {
    file(relativePath: { eq: "hero1.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Background = ({ children, image }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <Wrapper>
      <div className="blank"></div>

      <BackgroundImage
        Tag="div"
        fluid={image || fluid}
        className="bcg"
        preserveStackingContext={true}
      >
        {children}
      </BackgroundImage>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 100vw;
  overflow: hidden;

  .blank {
    flex: 1;
  }

  .bcg {
    flex: 2;
    position: relative;
    min-height: 80vh;
    width: 100%;
  }

  @media screen and (max-width: 414px) {
    max-width: 90vw;
    padding-top: 6rem;

    .blank {
      display: none;
    }

    .bcg {
      min-height: 50vh;
    }
  }

  @media screen and (max-width: 1024px) {
    max-width: 70vw;
    margin: 0 0 0 auto;

    .blank {
      display: none;
    }

    .bcg {
      min-height: 50vh;
    }
  }
`

export default Background
