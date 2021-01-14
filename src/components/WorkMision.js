import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"

const WorkMision = ({ projects }) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row-2">
          <div className="left-side">
            <div className="bottom-img">
              <Image fluid={projects[2].image.fluid} />
            </div>
            <div className="top-img">
              <Image fluid={projects[3].image.fluid} />
            </div>
          </div>
          <div className="right-side">
            <div className="title">
              <h3>
                Vision <span>&</span> Mission
              </h3>
              <div className="text">
                <p>
                  Ikos Construction is a London based building company that
                  offers integrated, tailored solutions, at very competitive
                  prices. Renovation, refurbishment and construction of
                  residential or commercial properties are our specialties.Our
                  activities include a wide range of projects, from renovation
                  of apartments, offices and restaurants, to home extensions and
                  loft conversions. Furthermore, our sister company Tekton
                  Joinery that specializes in high-end furniture manifucture and
                  bespoke joinery, allows us to provide a fully tailored and
                  high quality style.
                </p>
              </div>
            </div>
            <div className="title">
              <h3>
                History <span>&</span> Work
              </h3>
              <div className="text">
                <p>
                  We aspire to build strong human relationships based on the
                  constant search for the best for the property, the environment
                  and above all our clients. Our collaborations with architects,
                  decorators, designers and specialized builders who share our
                  same values have produced results of unique style and premium
                  quality. Ikos Construction adheres to high standards that come
                  from our core value: providing first class work on time and
                  budget. Our project management process, which includes our
                  personal involvement in each project, ensures the successful
                  and optimal implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--clr-grey-10);
  margin-top: 6rem;

  .container {
    width: var(--max-width);
    margin: 0 auto;
    padding: 5rem 0 2rem 0;
    .row-2 {
      display: flex;
      flex-direction: row;

      .left-side {
        position: relative;
        flex: 1;
        .bottom-img {
          width: 80%;
          position: absolute;
          right: 4rem;
        }
        .top-img {
          width: 50%;
          position: absolute;
          top: 22vh;
          left: 0;
        }
      }
      .right-side {
        flex: 1;
        .title {
          h3 {
            padding-bottom: 1rem;
            font-family: var(--ff-secondary);
            font-weight: lighter;
            span {
              color: var(--clr-primary-5);
            }
          }
          .text {
            padding-bottom: 1.5rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    max-width: 90vw;
    width: 90vw;
    margin: 0 auto;
    margin-top: 3rem;

    .container {
      max-width: 90vw;
      width: 90vw;
      padding: 2rem 1rem 2rem 1rem;

      .row-2 {
        .left-side {
          .bottom-img {
            width: 80%;
            position: absolute;
            right: 4rem;
            top: 4rem;
          }
          .top-img {
            width: 70%;
            top: 26vh;
            left: 4rem;
          }
        }
        .right-side {
          .title {
            h3 {
            }
            .text {
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 414px) {
    max-width: 90vw;
    width: 90vw;
    margin: 0 auto;
    margin-top: 3rem;

    .container {
      max-width: 90vw;
      width: 90vw;
      padding: 2rem 0 2rem 0;

      .row-2 {
        flex-direction: column;
        .left-side {
          width: 100%;
          display: flex;
          flex-direction: column;
          .bottom-img {
            top: 0;
            position: relative;
            margin-left: 5rem;
          }
          .top-img {
            display: none;
          }
        }
        .right-side {
          width: 100%;
          padding: 0 1rem;
          .title {
            margin-top: 3rem;
            h3 {
              padding-bottom: 1rem;
            }
            .text {
              padding-bottom: 0;
            }
          }
        }
      }
    }
  }
`

export default WorkMision
