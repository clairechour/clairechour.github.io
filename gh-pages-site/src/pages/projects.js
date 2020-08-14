import React from "react"
import { Link } from "gatsby"


const ProjectsPage = () => {
  return (
      <div className="about-blurb">
        <div className="container">
          <div className="inner-blurb">
            <div className="content">
              <h3>projects</h3>
              <p>
              <b>Covid-19 Predictor</b>
              <br/>
              <i>Technologies: Python, Jupyter Notebook</i>
              <br/>
              Since overcrowded hospitals have been a reoccurring issue for many states due to Covid-19, I built a Logistic Regression model to predict hospitalization rates. This way, hospitals could
              better prepare and allocate enough resources for the pandemic and avoid situations in which hospitals are overcrowded and understaffed.
              <br/>
              <div className="btn-row">
                <a href="https://github.com/clairechour/Covid-19-Predictor">Click here for github</a>
              </div>
              <br/>
              <b>Spam/Ham Classification</b>
              <br/>
              <i>Technologies: Python, Jupyter Notebook</i>
              <br/>
              I built a Logistic Regression model to determine whether an email is classified as ham or spam.
              <br/>
              <div className="btn-row">
                <a href="https://github.com/clairechour/Spam-Ham-Classifier">Click here for github</a>
              </div>
              <br/>
              <b>Classifying Movies</b>
              <br/>
              <i>Technologies: Python, Jupyter Notebook</i>
              <br/>
              I utilized the k-Nearest Neighbors algorithm to classify whether a movie is romance or action.
              <br/>
              <div className="btn-row">
                <a href="https://github.com/clairechour/Classifying-Movies">Click here for github</a>
              </div>
              <br/>
              <b>Personal Website</b>
              <br/>
              <i>Technologies: CSS, HTML, Gatsby.js, GraphQL</i>
              <br/>
              This website exhibits my interests, experiences, and projects.
              <br/>
              <div className="btn-row">
                <a href="https://github.com/clairechour/clairechour.github.io">Click here for github</a>
              </div>
              <br/>
              <b>Business Intelligence Challenge</b>
              <br/>
              <i>Technologies: Python, SQL, Jupyter Notebook, Google Powerpoint</i>
              <br/>
              This is one of the Business Intelligence challenges I received in the past! I used PostgreSQL to run my queries via terminal.
              <br/>
              <div className="btn-row">
                <a href="https://github.com/clairechour/Business-Intelligence-Challenge">Click here for github</a>
              </div>
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProjectsPage
