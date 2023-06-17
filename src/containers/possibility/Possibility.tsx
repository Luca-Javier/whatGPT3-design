import "./Possibility.scss"
import possibilitySrc from "/possibility.png"

function Possibility() {
  return (
    <div className="possibility section__padding" id="possibility">
      <div className="possibility-image">
        <img src={possibilitySrc} alt="possibility" />
      </div>
      <article className="possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </article>
    </div>
  )
}

export default Possibility
