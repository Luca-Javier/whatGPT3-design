import "./Feature.scss"

interface IFeature {
  title: string
  text: string
}

function Feature({ title, text }: IFeature) {
  return (
    <div className="feature-container">
      <div className="feature__heading">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="feature-text">{text}</div>
    </div>
  )
}

export default Feature
