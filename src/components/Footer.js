import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { scrollAnimation } from "../animations/animations"
import { useScroll } from "./useScroll"

const Footer = () => {
  const [element, controls] = useScroll()

  return (
    <Wrapper
      layout
      ref={element}
      variants={scrollAnimation}
      initial="hidden"
      animate={controls}
    >
      <div>
        <h2>Ikos Construction</h2>
        <h2>London</h2>
      </div>
      <div>
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
      <div className="copyright">
        <p>
          Copyright &copy; {new Date().getFullYear()} Ikos Construction - All
          Rights Reserved
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled(motion.footer)`
  padding: 4rem 0;
  background-color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: #7d9f41;
    text-align: center;
    font-weight: 400;
  }

  h3 {
    padding-top: 1rem;
    color: #636161;
    font-weight: 400;
    text-align: center;
  }

  .links {
    display: flex;
    width: 5rem;
    justify-content: space-around;
    text-align: center;
    padding-top: 0.5rem;

    a {
      text-align: center;
      color: #e7e7e7;
      text-decoration: none;
      font-size: 1.5rem;
      transition: var(--transition);

      &:hover {
        color: var(--clr-primary-5);
      }
    }
  }

  .contact-info {
    h3 {
      padding-top: 1rem;
      color: #636161;
    }
    .contact-links {
      p {
        padding-top: 0.5rem;
        margin-bottom: 0;
        text-align: center;
        font-weight: 300;
        color: #e7e7e7;
        a {
          text-decoration: none;
          color: #e7e7e7;
          transition: var(--transition);

          &:hover {
            color: var(--clr-primary-5);
          }
        }
      }
    }
  }

  .copyright {
    padding-top: 2rem;

    p {
      font-weight: 400;
      color: #636161;
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 414px) {
    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1rem;
    }

    .links {
      a {
        font-size: 1.3rem;
      }
    }

    .copyright {
      p {
        font-size: 0.75rem;
        text-align: center;
        padding: 0 2rem;
      }
    }
  }
`

export default Footer
