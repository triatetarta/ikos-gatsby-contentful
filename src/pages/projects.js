import React from "react"
import { graphql } from "gatsby"
import { SEO, Projects } from "../components"
import { motion } from "framer-motion"
import { pageAnimation } from "../animations/animations"

const ProjectsPage = props => {
  const {
    allContentfulProject: { nodes },
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
        <SEO title="Projects" />
        <Projects nodes={nodes} />
      </motion.div>
    </>
  )
}

export const query = graphql`
  {
    allContentfulProject {
      nodes {
        id
        slug
        title
        category
        date
        info {
          info
        }
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ProjectsPage
