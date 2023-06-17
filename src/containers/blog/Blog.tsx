import "./Blog.sass"
import { Article } from "../../components"
import { articles, bigArticle } from "./articles"

function Blog() {
  return (
    <div className="blog section__margin" id="blog">
      <div className="blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="blog-container">
        <div className="blog-container__article">
          <Article {...bigArticle} />
        </div>
        <div className="blog-container__articles">
          {articles.map(({ title, src, date }) => (
            <Article key={src} src={src} title={title} date={date} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
