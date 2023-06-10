import styles from './ArticleDetailTv.module.scss';
import Image from 'next/image';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button/Button';
import ButtonLink from '@/components/common/ButtonLink';
import { useRouter } from 'next/router';

function ArticleDetail (props) {
  const router = useRouter();

  // function handleNavigate(){
  //   router.push(router.pathname + '/' + props.id);
  // }
  
  return (
    <div className={styles.back}>
    <Card size="single">
      {/* CARD MAIN */}
      <div className={styles.articleMain}>
        <div className={styles.imageBox}>
          <Image 
            className={styles.nextImage}
            src={props.image} 
            alt={props.title} 
            fill={true}
            sizes="100vw"
            priority={true}
          />
        </div>
        <div className={styles.articleContent}>
          <h1>{props.title}</h1>
          <h3><span>First Aired</span> {props.year}</h3>
          <p>{props.description}</p><br></br>
          <h3><span>Episodes</span></h3>
          {/* <p>{props.episodes}</p><br></br> */}
          <h3>{props.episode1}</h3>
          <p>{props.episode1detail}</p>
          <h3>{props.episode2}</h3>
          <p>{props.episode2detail}</p>
          <h3>{props.episode3}</h3>
          <p>{props.episode3detail}</p>
          <h3>{props.episode4}</h3>
          <p>{props.episode4detail}</p>
          <h3>{props.episode5}</h3>
          <p>{props.episode5detail}</p>
          <h3>{props.episode6}</h3>
          <p>{props.episode6detail}</p>
          <h3>{props.episode7}</h3>
          <p>{props.episode7detail}</p>
          <h3>{props.episode8}</h3>
          <p>{props.episode8detail}</p>
          <h3>{props.episode9}</h3>
          <p>{props.episode9detail}</p>
          <h3>{props.episode10}</h3>
          <p>{props.episode10detail}</p>
          <h3>{props.episode11}</h3>
          <p>{props.episode11detail}</p>
          <h3>{props.episode12}</h3>
          <p>{props.episode12detail}</p>
          <h3>{props.episode13}</h3>
          <p>{props.episode13detail}</p>
          <h3>{props.episode14}</h3>
          <p>{props.episode14detail}</p>
          <h3>{props.episode15}</h3>
          <p>{props.episode15detail}</p>
          <h3>{props.episode16}</h3>
          <p>{props.episode16detail}</p>
          <h3>{props.episode17}</h3>
          <p>{props.episode17detail}</p>
          <h3>{props.episode18}</h3>
          <p>{props.episode18detail}</p>
          <h3>{props.episode19}</h3>
          <p>{props.episode19detail}</p>
          <h3>{props.episode20}</h3>
          <p>{props.episode20detail}</p>
          <h3>{props.episode21}</h3>
          <p>{props.episode21detail}</p>
          <h3>{props.episode22}</h3>
          <p>{props.episode22detail}</p>
          <h3>{props.episode23}</h3>
          <p>{props.episode23detail}</p>
          <h3>{props.episode24}</h3>
          <p>{props.episode24detail}</p>
          <h3>{props.episode25}</h3>
          <p>{props.episode25detail}</p>
          <h3>{props.episode26}</h3>
          <p>{props.episode26detail}</p>
        </div>
      </div>
      {/* CARD FOOTER */}
      <div className={styles.articleFooter}>
      { props.url ? 
          <ButtonLink path={props.url} target="_blank">
            BACK
          </ButtonLink> :
          <Button type="button" onClick={() => router.back()}>
            BACK
          </Button>
        }
      {/* { props.url ? 
          <ButtonLink path={props.url} target="_blank">
            EPISODES
          </ButtonLink> :
          <Button onClick={handleNavigate}>
            EPISODES
          </Button>
        } */}
      </div>
    </Card>
    </div>
  );
}

export default ArticleDetail;