import React from "react"
import {
  SEO,
  Showcase,
  About,
  WorkMision,
  ResidentialCommercial,
  Newsletter,
  Scroll,
} from "../components/"
import { graphql } from "gatsby"
import { motion } from "framer-motion"
import { pageAnimation } from "../animations/animations"

const IndexPage = props => {
  const {
    allContentfulHomePage: { nodes: projects },
  } = props.data

  return (
    <>
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        key={props.location.pathname}
      >
        <Scroll showBelow={250} />
        <SEO title="Home" />
        <Showcase />
        <About projects={projects} />
        <WorkMision projects={projects} />
        <ResidentialCommercial projects={projects} />
        <Newsletter />
      </motion.div>
    </>
  )
}

export const query = graphql`
  {
    allContentfulHomePage {
      nodes {
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default IndexPage
