import "./Banner.scss"
import peopleSrc from "/people.png"
import aiSrc from "/ai.png"

function Header() {
  return (
    <div className="banner section__padding ">
      <div className="banner-content">
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="banner-content__input">
          <input type="email" placeholder="Enter your email" />
          <button>Get Started</button>
        </div>
        <div className="banner-content__people">
          <img src={peopleSrc} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="banner-image">{<img src={aiSrc} alt="ai" />}</div>
    </div>
  )
}

export default Header
