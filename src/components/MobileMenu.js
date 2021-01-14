import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GatsbyContext } from "../context/context"

const MobileMenu = () => {
  const { hideSidebar } = useContext(GatsbyContext)

  return (
    <Wrapper className="mobile-menu">
      <div className="container">
        <button onClick={hideSidebar}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="44.8492"
              y1="44.8493"
              x2="15.1508"
              y2="15.1508"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="15.1508"
              y1="44.8492"
              x2="44.8492"
              y2="15.1507"
              stroke="black"
              strokeWidth="3"
            />
          </svg>
        </button>
        <div className="links">
          <ul>
            <li>
              <Link onClick={hideSidebar} to="/#about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={hideSidebar} to="/#projects">
                Projects
              </Link>
            </li>
            <li>
              <Link onClick={hideSidebar} to="/#contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="social">
            <h3>Follow</h3>
            <div className="links">
              <a
                href="https://www.instagram.com/ikosconstructionlondon/"
                target="_blank"
                rel="noreferrer"
              >
                Ig
              </a>
              <a
                href="https://www.facebook.com/IkosConstruction/"
                target="_blank"
                rel="noreferrer"
              >
                Fb
              </a>
            </div>
          </div>
          <div className="contact-info">
            <h3>Contact</h3>
            <div className="contact-links">
              <p>
                <a href="tel:+44-7912-511121">+44(0)20 8144 9827</a>
              </p>
              <p>
                <a href="mailto:info@ikosconstruction.co.uk">
                  info@ikosconstruction.co.uk
                </a>
              </p>
              <p>
                459 Finchley Rd, West Hampstead, <br /> London, NW3 6HN
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    background: var(--clr-white);
    width: 80vw;
    height: 80vh;
    border-radius: var(--radius);
    position: relative;
    padding: 4rem 2rem 2rem 2rem;

    button {
      background: none;
      outline: none;
      border: none;
      cursor: pointer;
      position: absolute;
      top: 1rem;
      right: 1rem;
    }

    .links {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      height: 100%;

      ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        li {
          margin-top: 1rem;

          a {
            text-decoration: none;
            color: var(--black);
            font-size: 1.2rem;
            font-weight: bold;
          }
        }
      }

      .social {
        h3 {
          font-size: 0.8rem;
          text-align: center;
        }

        .links {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          a {
            text-decoration: none;
            text-transform: uppercase;
            color: var(--clr-primary-5);
            font-family: var(--ff-secondary);
            font-size: 1.3rem;
            margin: 0 0.5rem;
          }
        }
      }
      .contact-info {
        h3 {
          font-size: 0.8rem;
          text-align: center;
        }

        .contact-links {
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          p {
            text-align: center;
            a {
              text-decoration: none;
              color: var(--black);
              font-size: 1.1rem;
            }
          }
        }
      }
    }
  }
`

export default MobileMenu
