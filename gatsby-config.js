require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Ikos Construction Ltd`,
    description: `Ikos Construction is a London based construction company that offers integrated, tailored solutions, at very competitive prices. Renovation, refurbishment and construction of residential or commercial properties are our specialties.`,
    author: `@threequarters`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Montserrat", "Crimson Text"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ikos.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint:
          "https://ikosconstruction.us7.list-manage.com/subscribe/post?u=cc9667491d7b05c9d5a964fc9&amp;id=fd40aea35a",
        timeout: 3500,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
