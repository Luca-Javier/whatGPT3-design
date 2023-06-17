import "./Features.scss"
import { Feature } from "../../components"
import { features } from "./featuresArray"

function Features() {
  return (
    <div className="features section__padding" id="features">
      <div className="features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="features-features-container">
        {features.map(({ title, text }) => (
          <Feature key={title} text={text} title={title} />
        ))}
      </div>
    </div>
  )
}

export default Features
