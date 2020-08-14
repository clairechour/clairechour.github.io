import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const AboutBlurb = () => {
  const data = useStaticQuery(graphql`
    query {
      cc: file(relativePath: { eq: "cc.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="about-blurb">
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <div className="btn-row">
              <Link to="/resume">View Resume</Link>
            </div>
          </div>
          <div className="images">
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutBlurb
