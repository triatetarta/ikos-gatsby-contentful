import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"

const About = ({ projects }) => {
  return (
    <Wrapper id="about">
      <div className="title">
        <h2>
          your home is our <br />
          concern
        </h2>
      </div>
      <div className="row-1">
        <div className="left-side">
          <div className="left-img">
            <Image fluid={projects[5].image.fluid} />
          </div>
        </div>
        <div className="right-side">
          <div className="right-side-text">
            <h4>about us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              aspernatur facilis sapiente repellat possimus delectus impedit,
              beatae provident perferendis sequi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              suscipit repudiandae possimus voluptas, libero culpa distinctio
              quaerat provident eaque, animi aliquam perspiciatis tenetur
              dolores. Rerum?
            </p>
          </div>
          <div className="right-img">
            <Image fluid={projects[4].image.fluid} />
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

  h2 {
    font-weight: lighter;
    text-transform: uppercase;
    font-size: 1.9rem;
    font-family: var(--ff-secondary);
    line-height: 1.2;
  }

  .row-1 {
    display: flex;
    flex-direction: row;

    .left-side {
      padding: 1rem 2rem 1rem 0;
      flex: 1;
      .left-img {
        width: 100%;
      }
    }
    .right-side {
      flex: 1;
      padding: 10rem 0 1rem 2rem;

      .right-side-text {
        width: 90%;
        padding-bottom: 5rem;

        h4 {
          padding-bottom: 2rem;
          color: var(--clr-primary-5);
          font-family: var(--ff-secondary);
          font-size: 1.3rem;
          text-transform: uppercase;
        }
      }
      .right-img {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 414px) {
    max-width: 90vw;
    width: 90vw;
    margin: 0 auto;
    padding-top: 3rem;

    h2 {
      font-size: 1.5rem;
    }

    .row-1 {
      flex-direction: column;

      .left-side {
        .left-img {
          width: 80%;
        }
      }

      .right-side {
        padding: 1rem 0 0 0;

        .right-side-text {
          width: 100%;
          padding-bottom: 1rem;

          h4 {
            font-size: 1.1rem;
            padding-bottom: 1.3rem;
          }
        }
        .right-img {
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    max-width: 90vw;
    width: 90vw;
    margin: 0 auto;
  }
`

export default About
