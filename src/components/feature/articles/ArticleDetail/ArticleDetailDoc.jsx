import styles from "./ArticleDetail.module.scss";
import Image from "next/image";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button/Button";
import ButtonLink from "@/components/common/ButtonLink";
import { useRouter } from "next/router";

function ArticleDetail(props) {
  const router = useRouter();

  function handleNavigateBack() {
    router.push("/fridaydoc"); // or "/docs" depending on your app
  }

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
            <h3>
              <span>Director</span> {props.director}
            </h3>
            <h3>
              <span>Release Date</span> {props.year}
            </h3>
            <p>{props.description}</p>
          </div>
        </div>
        {/* CARD FOOTER */}
        <div className={styles.articleFooter}>
          {props.url ? (
            <ButtonLink path={props.url} target="_blank">
              BACK
            </ButtonLink>
          ) : (
            <Button type="button" onClick={handleNavigateBack}>
              BACK
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}

export default ArticleDetail;
