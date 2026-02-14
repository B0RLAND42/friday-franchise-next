import styles from "./ArticleDetailDoc.module.scss";
import Image from "next/image";
import Card from "@/components/common/Card";
import { useRouter } from "next/router";

function ArticleDetail(props) {
  const router = useRouter();

  function handleNavigateBack() {
    router.push("/fridaydoc"); // Navigate back
  }

  return (
    <div className={styles.back}>
      <Card size="single">
        <div className={styles.articleMain}>
          {/* Full-image background */}
          <div className={styles.imageBox}>
            <Image
              className={styles.nextImage}
              src={props.image}
              alt={props.title}
              fill
              sizes="100vw"
              priority
            />
            {/* Optional dark overlay for readability */}
            <div className={styles.overlay}></div>

            {/* Text content on top of image */}
            <div className={styles.articleContent}>
              <h1>{props.title}</h1>
              <h3>
                <span>Director</span> {props.director}
              </h3>
              <h3>
                <span>Release Date</span> {props.year}
              </h3>
              <p>{props.description}</p>
              <button type="button" onClick={handleNavigateBack}>
                BACK
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ArticleDetail;
