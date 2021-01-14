import React from "react"
import { graphql, Link } from "gatsby"
import { Layout } from "../components"
import Image from "gatsby-image"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const projectTemplate = ({
  data: {
    project: {
      title,
      category,
      info: { info },
      image: { fluid },
      photos,
    },
  },
}) => {
  return (
    <Layout>
      <Background>
        <BackgroundImage
          Tag="div"
          fluid={photos[0].fluid}
          className="bcg"
          preserveStackingContext={true}
        >
          <h2>{title}</h2>
        </BackgroundImage>
      </Background>
      <Wrapper>
        <article>
          <div className="img">
            <Image fluid={fluid} alt={title} />
          </div>
        </article>
        <article>
          <h2>{title}</h2>
          <h5>{category}</h5>
          <p>{info}</p>
        </article>
      </Wrapper>
      <RowOne className="row-1">
        <div className="left-image">
          <Image fluid={photos[1].fluid} />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              saepe numquam tempore recusandae temporibus natus accusamus vitae
              facere ipsum! Dolore?
            </p>
          </div>
        </div>
        <div className="right-image">
          <Image fluid={photos[2].fluid} />
        </div>
      </RowOne>
      <RowTwo className="row-2">
        <div className="left-side">
          <h4>Room 1</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis excepturi vitae illo cupiditate. Corporis aperiam a
            porro nam vitae blanditiis molestiae omnis quos. Nisi similique
            numquam cum magnam possimus. Porro.
          </p>
          <div className="img">
            <Image fluid={photos[3].fluid} />
          </div>
        </div>
        <div className="right-side">
          <h4>Room 2</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis excepturi vitae illo cupiditate. Corporis aperiam a
            porro nam vitae blanditiis molestiae omnis quos. Nisi similique
            numquam cum magnam possimus. Porro.
          </p>
          <div className="img">
            <Image fluid={photos[4].fluid} />
          </div>
        </div>
      </RowTwo>
      <RowThree className="row-3">
        <div className="img">
          <Image
            fluid={{ ...photos[5].fluid, aspectRatio: 8 / 3 }}
            imgStyle={{ objectFit: "cover", objectPosition: "50% 50%" }}
          />
          <p>description</p>
        </div>
      </RowThree>
      <RowFour className="row-4">
        <div className="img">
          <Image fluid={photos[6].fluid} />
          <p>description</p>
        </div>
        <div className="img">
          <Image fluid={photos[7].fluid} />
          <p>description</p>
        </div>
      </RowFour>
      <ButtonBottom className="back">
        <Link to="/projects">back to projects</Link>
      </ButtonBottom>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProject($slug: String) {
    project: contentfulProject(slug: { eq: $slug }) {
      title
      category
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
  .bcg {
    min-height: 30vh;

    h2 {
      padding-top: 2rem;
      text-align: center;
      text-transform: uppercase;
      font-family: var(--ff-secondary);
    }
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

  article {
    padding-right: 4rem;
    .img {
      width: 400px;
    }

    h2 {
      font-size: 2.2rem;
      font-family: var(--ff-secondary);
      margin-bottom: 0.5rem;
    }

    h5 {
      font-weight: lighter;
      display: inline-block;
      color: var(--clr-white);
      background-color: var(--clr-primary-5);
      padding: 0.2rem 0.3rem;
      margin-bottom: 1.4rem;
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
        margin-top: 1rem;
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
        margin-top: 1rem;
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

const RowTwo = styled.div`
  width: var(--max-width);
  max-width: var(--max-width);
  margin: 0rem auto 6rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;

  .left-side,
  .right-side {
    h4 {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 1rem;
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

const RowThree = styled.div`
  width: var(--max-width);
  max-width: var(--max-width);
  margin: 0rem auto 6rem auto;

  p {
    margin-top: 1rem;
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

const RowFour = styled.div`
  width: var(--max-width);
  max-width: var(--max-width);
  margin: 0rem auto 6rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;

  p {
    margin-top: 1rem;
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

const ButtonBottom = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  a {
    text-decoration: none;
    color: var(--black);
    border: 1px solid black;
    padding: 1rem 1rem;
  }

  @media screen and (max-width: 414px) {
    a {
      font-size: 0.75rem;
      padding: 0.75rem 0.75rem;
    }
  }
`

export default projectTemplate
