import React from "react"
import {
  Layout,
  SEO,
  Showcase,
  About,
  WorkMision,
  ResidentialCommercial,
  Newsletter,
  Scroll,
} from "../components/"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const {
    allContentfulHomePage: { nodes: projects },
  } = data

  return (
    <Layout>
      <Scroll showBelow={250} />
      <SEO title="Home" />

      <Showcase />
      <About projects={projects} />
      <WorkMision projects={projects} />
      <ResidentialCommercial projects={projects} />
      <Newsletter />
    </Layout>
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
