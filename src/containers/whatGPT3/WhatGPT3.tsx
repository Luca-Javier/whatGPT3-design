import "./WhatGPT3.scss"
import Feature from "../features"

function WhatGPT3() {
  return (
    <div className="whatgpt3 section__margin" id="whpt3">
      <div className="whatgpt3__feature">
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="whatgpt3-heading">
        <h2 className="gradient__text">
          The possibilities are beyond your imagination
        </h2>
        <p>Explore The Library</p>
      </div>
      <div className="whatgpt3-features-container">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  )
}

export default WhatGPT3
