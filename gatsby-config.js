module.exports = {
  siteMetadata: {
    title: `Greivin.net`,
    description: `Blog sobre programación en Javascript React & Gatsby.`,
    author: `@gcruzrios`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`post`],
        //If using single types place them in this array.
        //singleTypes: [`home-page`, `contact`],
        // loginData: {
        //   identifier: "gcruzrios",
        //   password: "Grvn240675$$",
        // },
      },
    },
    //{
      // resolve: `gatsby-plugin-manifest`,
      // options: {
      //   name: `gatsby-starter-default`,
      //   short_name: `starter`,
      //   start_url: `/`,
      //   background_color: `#663399`,
      //   theme_color: `#663399`,
      //   display: `minimal-ui`,
      //   icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      // },
    //},

    //`gatsby-plugin-gatsby-cloud`,
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
