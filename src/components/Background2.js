import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled, { keyframes } from "styled-components"

const query = graphql`
  {
    file(relativePath: { eq: "background2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Background2 = ({ children, image }) => {
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

const fadeIn = keyframes`
from {
    background-color: rgba(255,255,255,0.8)
}
to{
    background-color: rgba(255,255,255,0.2)
}
`

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 100vw;
  margin: 0 auto;
  margin-bottom: 10rem;
  .blank {
    flex: 1;
  }
  .bcg {
    flex: 2;
    position: relative;
    min-height: 30vh;
    width: 100vw;
    animation: ${fadeIn} 2s ease 1 forwards;
  }
  .bcg::before {
    opacity: 1;
  }

  @media screen and (max-width: 414px) {
    margin-bottom: 5rem;
  }
`

export default Background2
