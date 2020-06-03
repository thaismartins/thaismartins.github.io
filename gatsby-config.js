const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Brasil contra o Vírus`,
    description: `Rede colaborativa de combate ao COVID-19 no Brasil`,
    author: `@bracontraovirus`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `green`,
        showSpinner: true,
        trickle: false,
        minimum: 0.4,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-165310280-1',
        head: true,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://brcontraovirus.org`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `@images`,
        path: path.resolve(__dirname, 'src/images'),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@images': path.resolve(__dirname, 'src/images'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@layouts': path.resolve(__dirname, 'src/layouts'),
          '@templates': path.resolve(__dirname, 'src/templates'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@content': path.resolve(__dirname, 'src/content'),
        },
        extensions: ['.js', '.jsx'],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Nunito`,
            variants: [`400`, `700`, `800`],
          },
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brasil contra o Vírus`,
        short_name: `Brasil contra o Vírus`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#47bb8e`,
        icon: `src/images/favicon.png`,
        display: `standalone`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
