import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'


const POST_ARCHIVE_QUERT = graphql`
query BlogPostArchive {
  allMarkdownRemark(limit: 5, sort: {
    order: DESC
    fields: [frontmatter___date]
  }) {
    totalCount
    edges {
      node {
        frontmatter {
          title
          slug
        }
      }
    }
  }
}
`
const Archive = ({ children }) => (
    <StaticQuery
  query = {POST_ARCHIVE_QUERT}

    render={({allMarkdownRemark}) => (
    <>
      <aside>
        <h3>Archive</h3>
        <ul>
        {allMarkdownRemark.edges.map(edge => (
            <li key={edge.node.frontmatter.slug}>
                <Link to = {`/posts${edge.node.frontmatter.slug}`}>
                {edge.node.frontmatter.title}
                </Link>
            </li>
        ))}
        </ul>
      </aside>
    </>
    )}
  />
)

export default Archive
