module.exports = {
  siteMetadata: {
    title: `Keaton Sentak`,
    description: `My personal portfolio site which highlights some of my projects. `,
    author: `Keaton Sentak`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `keaton-gatsby-portfolio`,
        short_name: `keaton-portfolio`,
        start_url: `https://keatonsentak.com/`,
        icon: `src/images/favicon.png`
      }
    }
  ]
};
