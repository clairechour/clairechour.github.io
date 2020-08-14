import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      gat: file(relativePath: { eq: "mini.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pup: file(relativePath: { eq: "pup.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pup: file(relativePath: { eq: "pup.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="main-text">Claire Chour</div>
          <div className="main-image">
            <Img fluid={data.gat.childImageSharp.fluid} />
          </div>
        </div>
        <div className="scroll">
          <span>Scroll down for my LinkedIn and Github</span>
        </div>
      </div>
      <div className="fixed-misc">Data Science and Statistics</div>
    </div>
  )
}

export default Banner
