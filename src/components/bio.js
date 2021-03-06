import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/bio.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
            linkedin
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center', 
        marginTop: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p style={{
          marginBottom: 0
        }}>
        Written by <strong>{author.name}</strong>, {author.summary}
        {` `}
        Check me out on 
        {` `}
        <a href={`https://github.com/${social.github}`}>
          github
        </a>
        {` `}
        and 
        {` `} 
        <a href={`https://linkedin.com/in/${social.linkedin}`}>
          linkedin
        </a>
        .
      </p>
    </div>
  )
}

export default Bio


