import { IFeature } from "../../models"
import "./Feature.scss"

function Feature({ title, text, flexColumn = false }: IFeature) {
  return (
    <div className={`feature-container ${flexColumn && "flex-column"}`}>
      <div className="feature-heading">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="feature-text">{text}</div>
    </div>
  )
}

export default Feature
