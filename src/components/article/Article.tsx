import { IArticle } from "../../models"
import "./Article.sass"

function Article({ src, title, date }: IArticle) {
  return (
    <div className="article">
      <div className="article-image">
        <img src={src} alt={title} />
      </div>
      <div className="article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article
