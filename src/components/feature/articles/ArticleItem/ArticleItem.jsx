import styles from './ArticleItem.module.scss';
import Image from 'next/image';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button/Button';
import ButtonLink from '@/components/common/ButtonLink';
import { useRouter } from 'next/router';

function ArticleItem(props) {
  const router = useRouter();

  function handleNavigate(){
    router.push(router.pathname + '/' + props.id);
  }

  return (
    <Card size="grid">
      {/* CARD MAIN */}
      <div className={styles.articleMain}>
        <div className={styles.imageBox}>
          { props.image ?
            <Image 
              className={styles.nextImage}
              src={props.image} 
              alt={props.title} 
              fill={true}
              sizes={"(max-width: 768px) 100vw, 50vw"}
            /> :
            <Image 
              className={styles.nextImage}
              src={props.urlToImage} 
              alt={props.title} 
              fill={true}
              sizes={"(max-width: 768px) 100vw, 50vw"}
            />
          } 
        </div>
        <div className={styles.articleContent}>
          <h2>{props.title}</h2>
        </div>
      </div>
      {/* CARD FOOTER */}
      <div className={styles.articleFooter}>
        { props.url ? 
          <ButtonLink path={props.url} target="_blank">
            More Info
          </ButtonLink> :
          <Button onClick={handleNavigate}>
            More Info
          </Button>
        }
      </div>
    </Card>
  );
}

export default ArticleItem;