import React from "react"
import { createGlobalStyle } from "styled-components"
import { Layout } from "./src/components"
import { GatsbyProvider } from "./src/context/context"

const GlobalStyle = createGlobalStyle`
/*
=============== 
Variables
===============
*/

:root {
  /* dark shades of primary color*/
  --clr-primary-1: hsl(82, 41%, 19%);
  --clr-primary-2: hsl(82, 41%, 31%);
  --clr-primary-3: hsl(82, 41%, 37%);
  --clr-primary-4: hsl(82, 54%, 39%);
  /* primary/main color */
  --clr-primary-5: rgb(125, 159, 65);

  /* lighter shades of primary color */
  --clr-primary-6: hsl(82, 44%, 50%);
  --clr-primary-7: rgb(158, 206, 75);
  --clr-primary-8: hsl(82, 70%, 60%);
  --clr-primary-9: hsl(82, 91%, 65%);
  --clr-primary-10: hsl(82, 86%, 72%);
  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: rgb(241, 245, 248);
  --clr-white: #fff;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  --clr-black: #404040;
  --clr-cream: rgb(196, 190, 181);
  --ff-primary: "Montserrat", sans-serif;
  --ff-secondary: "Crimson Text", sans-serif;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1280px;
  --fixed-width: 620px;
}
/*
=============== 
Global Styles
===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: var(--ff-primary);
  background: var(--clr-white);
  color: var(--clr-black);
  line-height: 1.5;
  font-size: 0.875rem;
  overflow-x: hidden;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
img {
  width: 100%;
  display: block;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  line-height: 1.25;
  font-family: var(--ff-primary);
  font-weight: 400;
}
h1 {
  font-size: 2rem;
  margin-bottom: 0;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-3);
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 3.5rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
/*  global classes */

.btn {
  text-transform: uppercase;
  background: var(--clr-primary-7);
  color: var(--clr-primary-1);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 400;
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
}
.btn:hover {
  backdrop-filter: blur(8px);
  background: rgba(158, 206, 75, 0.6);
  color: var(--clr-primary-1);
}


`

export const wrapPageElement = ({ element, props }) => {
  return (
    <GatsbyProvider>
      <GlobalStyle />
      <Layout {...props}>{element}</Layout>
    </GatsbyProvider>
  )
}
