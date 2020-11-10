/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Content CMS',
    description: 'Content Management System with Gatsby',
    author: 'ke'
  },
  plugins: [{
    resolve: `gatsby-plugin-styled-components`,
    options: {
      // Add any options here
    },
  }],
}
