import React, { useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyContext } from "../context/context"

const Navbar = () => {
  const { isSidebarOpen, showSidebar } = useContext(GatsbyContext)

  return (
    <StyledNavbar id="nav">
      <div className="logo">
        <Link to="/">
          <h1>Ikos Construction</h1>
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/#about">About</Link>
        </li>
        <li>
          <Link to="/#projects">Projects</Link>
        </li>
        <li>
          <Link to="/#contact">Contact</Link>
        </li>
      </ul>

      <div className="mobile">
        {!isSidebarOpen && (
          <button onClick={showSidebar}>
            <svg
              width="32"
              height="30"
              viewBox="0 0 70 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="8.74228e-08"
                y1="1"
                x2="70"
                y2="1.00001"
                stroke="black"
                strokeWidth="2"
              />
              <line
                x1="36"
                y1="13"
                x2="70"
                y2="13"
                stroke="black"
                strokeWidth="2"
              />
              <line
                x1="13"
                y1="26"
                x2="70"
                y2="26"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </button>
        )}
      </div>
    </StyledNavbar>
  )
}

export default Navbar

const StyledNavbar = styled.nav`
  max-width: var(--max-width);
  width: var(--max-width);
  min-height: 10vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    flex: 1;
    a {
      text-decoration: none;
      color: var(--clr-black);

      h1 {
        font-size: 2rem;
        font-weight: 100;
      }
    }
  }
  ul {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    li {
      cursor: pointer;

      a {
        text-decoration: none;
        color: var(--clr-black);
      }
    }
  }

  .mobile {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    max-width: 90vw;
    margin: 0 auto;

    .logo {
      a {
        h1 {
          font-size: 1.8rem;
        }
      }
    }
  }

  @media screen and (max-width: 414px) {
    max-width: 90vw;
    width: 90vw;
    margin: 0 auto;

    .logo {
      a {
        display: inline-block;
        h1 {
          font-size: 1.1rem;
        }
      }
    }

    ul {
      display: none;
    }

    .mobile {
      display: block;
      button {
        cursor: pointer;
        outline: none;
        background: none;
        border: none;
      }
    }
  }
`
