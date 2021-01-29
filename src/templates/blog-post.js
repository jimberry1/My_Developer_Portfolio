import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const TitleStyle = styled.h1`
  width: 100%;
  text-align: center;
  text-decoration: underline;
`

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <div
      className="personalInfoBody"
      style={{ height: "100vh", color: "white" }}
    >
      <Link to="/Attempt1">Go back</Link>
      <hr />
      <TitleStyle>{post.frontmatter.title}</TitleStyle>
      <h4>
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const postQuery = graphql`
  query blogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
