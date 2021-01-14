import React from "react"
import Background from "./Background"
import Arrow from "./Arrow"
import styled from "styled-components"
import { Link } from "gatsby"

const Showcase = () => {
  return (
    <Wrapper>
      <div className="card">
        <article>
          <div className="container">
            <div className="first">
              <h3>If you can dream it, we can create it</h3>
            </div>

            <div className="second">
              <h1>let your home be unique and stylish</h1>
            </div>

            <div className="third">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                magnam, ea accusamus debitis nulla impedit autem quod voluptatum
                ex, dicta officiis beatae quibusdam officia consequatur unde
                quisquam sapiente ab dolorum?
              </p>
            </div>

            <div className="fourth">
              <Link to="/projects">
                <Arrow />
              </Link>
            </div>
          </div>
        </article>
      </div>
      <Background />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 0 auto;
  position: relative;
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
        }

        svg {
          margin-top: 1.6rem;
        }
      }
    }
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
          .fourth {
            svg {
              width: 10rem;
              height: 10rem;
            }
          }
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

          .fourth {
            order: 3;
            margin-top: 3rem;
            svg {
              width: 7rem;
              height: 7rem;
            }
          }
        }
      }
    }
  }
`

export default Showcase
