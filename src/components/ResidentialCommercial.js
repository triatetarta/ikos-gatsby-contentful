import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"

const ResidentialCommercial = ({ projects }) => {
  return (
    <Wrapper id="projects">
      <div className="row-1">
        <div className="left-column">
          <div className="text">
            <h2>Residential Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              repudiandae explicabo fugit dolorum laudantium ipsum temporibus
              quisquam magnam asperiores impedit!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              culpa.
            </p>
            <ul>
              <li>Lorem, ipsum.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
            <Link to="/projects">
              <button>all projects</button>
            </Link>
          </div>
        </div>
        <div className="right-column">
          <div className="right-img">
            <Image fluid={projects[0].image.fluid} />
          </div>
        </div>
      </div>
      <div className="row-2">
        <div className="left-column">
          <div className="left-img">
            <Image fluid={projects[1].image.fluid} className="img" />
          </div>
        </div>
        <div className="right-column">
          <div className="text">
            <h2>Commercial Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              repudiandae explicabo fugit dolorum laudantium ipsum temporibus
              quisquam magnam asperiores impedit!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              culpa.
            </p>
            <ul>
              <li>Lorem, ipsum.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
            <Link to="/projects">
              <button>all projects</button>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding-top: 6rem;
  max-width: var(--max-width);
  width: var(--max-width);
  margin: 0 auto;

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
          margin-bottom: 3rem;
          font-family: var(--ff-secondary);
        }

        p {
          margin-bottom: 2rem;
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
          padding: 0.8rem 2rem;
          font-size: 1rem;
          cursor: pointer;
        }
      }
    }
    .right-column {
      flex: 1;

      .right-img {
        width: 70%;
        margin-left: 4rem;
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
      }
    }
    .right-column {
      flex: 1;

      .text {
        padding: 2rem 2rem 2rem 0;

        h2 {
          text-transform: uppercase;
          margin-bottom: 3rem;
          font-family: var(--ff-secondary);
        }

        p {
          margin-bottom: 2rem;
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
          padding: 0.8rem 2rem;
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
      margin-bottom: 2rem;

      .left-column {
        .text {
          padding: 2rem 2rem 2rem 0;

          h2 {
            font-size: 1.5rem;
            margin-bottom: 2rem;
          }

          p {
            margin-bottom: 1rem;
          }

          ul {
            margin-bottom: 2rem;

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
        width: 100%;
        .right-img {
          width: 80%;
          margin: 0;
          padding: 0rem 1rem;
        }
      }
    }

    .row-2 {
      flex-direction: column-reverse;
      margin-bottom: 3rem;

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
            margin-bottom: 2rem;
          }

          p {
            margin-bottom: 1rem;
          }

          ul {
            margin-bottom: 2rem;

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
