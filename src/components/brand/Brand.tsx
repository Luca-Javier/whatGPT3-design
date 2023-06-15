import "./Brand.scss"
import { assets } from "./assets"

function Brand() {
  return (
    <div className="brand section__padding">
      {assets.map(({ alt, src }) => (
        <div>
          <img src={src} alt={alt} />
        </div>
      ))}
    </div>
  )
}

export default Brand
