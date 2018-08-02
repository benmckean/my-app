module.exports = {
  siteMetadata: {
    title: 'First React',
    description:'Description of the website should go here',
    keywords:'survival, blog, ethical, sustainable'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve:'gatsby-source-contentful',
      options:{
        spaceId:'s8kdiwcldncq',
        accessToken:'66d17695097e81b0c8524f86c5e5e57f369b1a8129c1b6f13e50e2412099553d'
      }
    }
  ],
}

