module.exports = {
  pathPrefix: "/fpidrive",
  siteMetadata: {
    title: "FPIDrive Site",
    author: "Victor Mira",
    description: "Un sitio para aprender Innovación a través de las nuevas tecnologías y la IoT"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/web-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    `gatsby-plugin-netlify`
  ],
}
