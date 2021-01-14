import React from "react"
import { graphql } from "gatsby"
import { Layout, SEO, Projects } from "../components"

const ProjectsPage = ({ data }) => {
  const {
    allContentfulProject: { nodes },
  } = data

  return (
    <Layout>
      <SEO title="Projects" />
      <Projects nodes={nodes} />
    </Layout>
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
