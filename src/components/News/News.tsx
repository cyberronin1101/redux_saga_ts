import { newsProps } from "./News.props";
import styles from "./News.module.css";

const News = ({ news, title }: newsProps): JSX.Element => {
  if (!news.length) {
    return <></>;
  }
  return (
    <div className={styles.news}>
      {title && <h2 className={styles.header}>{title}</h2>}
      {news.map((newsItem) => (
        <article key={newsItem.title} className={styles.newsItem}>
          <h3 className={styles.title}>
            <a href={newsItem.url} target={"_blank"} rel={"noreferrer"}>
              {newsItem.title}
            </a>
          </h3>
          <div className={styles.meta}>
            <span>{newsItem.points} points</span>
            <span>{newsItem.num_comments} comments</span>
            <span>{new Date(newsItem.created_at).toLocaleDateString()}</span>
            <span>{newsItem.author}</span>
          </div>
        </article>
      ))}
    </div>
  );
};

export default News;
