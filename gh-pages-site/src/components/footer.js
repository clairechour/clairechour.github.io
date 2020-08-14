import React from "react"

// Socials
import linkedin from "../images/linkedin.svg"
import github from "../images/github.svg"

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="inner">
          <span>© 2020 Claire Chour</span>
          <div className="socials">
            <a href="https://linkedin.com/in/clairechour">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/clairechour">
              <img src={github} alt="Github" />
            </a>
          </div>
          <span>claire.chour@berkeley.edu</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
