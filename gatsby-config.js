module.exports = {
  siteMetadata: {
    title: `MIKI HAUS Jewelry`,
    description: `ผู้นำด้านมุกและเครื่องประดับอัญมณีของประเทศไทย เริ่มต้นความสุขชั่วนิรันดร์กับมิกิเฮาส์ เรามีสินค้าจิวเวลรี่ที่ตอบโจทย์ของแต่ละบุคคลให้คัดสรรมากมาย`,
    author: `@Bamee`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, 
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
        background_color: `#F7ECDA`,
        theme_color: `#F0CFC0`,
        display: `minimal-ui`,
        icon: `src/images/mikihaus-icon.jpg`, // This path is relative to the root of the site.
      },
    },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/src/posts`,  
      name: 'post'
    }  
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/src/images`,  
      name: 'images'
    }  
  },
  'gatsby-transformer-remark'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
