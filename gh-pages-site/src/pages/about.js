import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "me.jpg" }) {
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
            <h3>about me</h3>
            <p>Hello there! I'm Claire, a third-year data science and statistics major
            at UC Berkeley interested in data analytics, research, and machine learning.
            You can view my resume below and reach me @ claire.chour@berkeley.edu!
            <br/>
            <br/>
            I am passionate about volunteering and utilizing my analytics skills to provide
            social impact to my community. Data can be super messy and unstructured, and I hope to transform
            it into eye-opening stories anyone can understand.
            <br/>
            <br/>
            When I am not busy analyzing data, you can find me going out on spontaneous adventures
            with friends, trying new foods, and traveling around the world with my family. The photo
            you saw earlier was taken in Austria, where I visited my relatives last summer!
            </p>
            <div className="btn-row">
              <Link to="/resume">View Resume</Link>
            </div>
          </div>
          <div className="images">
            <div className="top-right">
              <Img fluid={data.logo.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
