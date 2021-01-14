import React, { useState } from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import FilterButtons from "./Filterbuttons"
import { Link } from "gatsby"

const Projects = ({ nodes: data }) => {
  const [projects, setProjects] = useState(data)

  const setBackToAll = () => {
    setProjects(data)
  }

  return (
    <Wrapper>
      <FilterButtons
        projects={data}
        setBackToAll={setBackToAll}
        setProjects={setProjects}
      />

      <div className="section-center">
        {projects.map(item => {
          const { id, category, title, slug } = item
          const fluid = item.image.fluid

          return (
            <article key={id}>
              <Link to={`/projects/${slug}`}>
                <div className="container">
                  <Image fluid={fluid} className="img" />
                  <div className="info">
                    <p>— {category} —</p>
                    <h3>{title}</h3>
                  </div>
                </div>
              </Link>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 0 auto 6rem auto;
  .section-center {
    margin: 3rem auto 0 auto;
    max-width: var(--max-width);
    display: grid;
    gap: 2rem;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr;

    .img {
      height: 20rem;
      transition: var(--transition);
    }
    article {
      transition: var(--transition);
      position: relative;
    }
    article:hover {
      box-shadow: var(--dark-shadow);
      cursor: pointer;
    }

    .container {
      position: relative;
      overflow: hidden;

      .img {
        opacity: 1;
      }

      .info {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        opacity: 0;
        transition: var(--transition);
        color: var(--clr-white);
        background-color: rgba(0, 0, 0, 0.5);
        padding: 1rem 0;
        text-align: center;

        p {
          margin-bottom: 0.5rem;
          color: var(--clr-white);
          text-transform: uppercase;
        }
      }
      &:hover .info {
        opacity: 1;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .section-center {
      display: grid;
      gap: 2rem;
      grid-gap: 2rem;
      max-width: 80vw;
      grid-template-columns: 1fr 1fr;

      .container {
        .img {
          opacity: 0.9;
        }
        .info {
          opacity: 1;
          z-index: 5;
          top: 0%;
          left: 0%;
          transform: translate(0%, 0%);
        }
      }
    }
  }

  @media screen and (max-width: 414px) {
    .section-center {
      display: grid;
      gap: 2rem;
      grid-gap: 2rem;
      max-width: 80vw;
      grid-template-columns: 1fr !important;

      .container {
        .img {
          opacity: 0.9;
        }
        .info {
          opacity: 1;
          z-index: 5;
          top: 0%;
          left: 0%;
          transform: translate(0%, 0%);
        }
      }
    }
  }
`

export default Projects
