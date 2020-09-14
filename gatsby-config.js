module.exports = {
  siteMetadata: {
    title: `Feitec`,
    description: `Pagina para la comunidad estudiantil del insituto tecnologico de costa rica`,
    author: `Feitec TI department`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://feitec-admin.herokuapp.com",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "user",
          "age",
          "asociacion",
          "carrera",
          "consejo",
          "contacto",
          "evento",
          "infovariada",
          "normativa",
          "organofederado",
          "sede",
          "eventohistorico",
          "grupocultural",
          "grupodeportivo",
          "categoriacontacto",
          "directorio",
          "Noticia",
          "rutabuses",
        ],
        queryLimit: 1000,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Feitec`,
        short_name: `Feitec`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}