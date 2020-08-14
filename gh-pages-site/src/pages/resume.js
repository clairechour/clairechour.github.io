import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ResumePage = () => {
  const data = useStaticQuery(graphql`
    query {
      resume: file(relativePath: { eq: "myresume.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="resume">
      <div className="container">
        <div className="row">
          <div className="main-text"></div>
          <div className="main-image">
            <Img fluid={data.resume.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumePage
