import ArticleItem from '../ArticleItem/ArticleItem'
import Container from '@/components/common/Container/Container';
import styles from './ArticlesList.module.scss';

function ArticlesList(props) {
  const { articles } = props;

  return (
    <div className={styles.back}>
    <Container>
      {articles.map((article, index) => (
        <ArticleItem
          key={article.id ? article.id : index}
          id={article.id ? article.id : index}
          image={article.image}
          // urlToImage={article.urlToImage}
          // url={article.url}
          title={article.title}
          description={article.description}
          category={article.category}
        />
      ))}
    </Container>
    </div>
  );
}

export default ArticlesList;