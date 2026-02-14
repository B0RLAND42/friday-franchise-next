import styles from './ArticleItem.module.scss';
import Image from 'next/image';
import Card from '@/components/common/Card';
import { useRouter } from 'next/router';

function ArticleItem(props) {
  const router = useRouter();

  function handleNavigate() {
    router.push(router.pathname + '/' + props.id);
  }

  // Determine image source
  const imageSrc = props.image || props.urlToImage;

  return (
    <Card size="grid">
      <div className={styles.articleMain}>
        {/* Make the image clickable */}
        <div
          className={styles.imageBox}
          onClick={handleNavigate}
          style={{ cursor: 'pointer' }}
        >
          {imageSrc && (
            <Image
              className={styles.nextImage}
              src={imageSrc}
              alt={props.title || 'Article Image'}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
        </div>

        {/* Remove the title */}
        {/* <div className={styles.articleContent}>
          <h2>{props.title}</h2>
        </div> */}
      </div>

      {/* Remove the footer button entirely */}
      {/* <div className={styles.articleFooter}></div> */}
    </Card>
  );
}

export default ArticleItem;
