import styles from './HeroMovieSection.module.scss';


function HeroMovieSection({ title, bgImage }) {
  // SEE on STATIC ASSETS: https://nextjs.org/docs/pages/building-your-application/optimizing/static-assets

  return (
    <div 
      className={styles.showcase}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}>
        <img src="/images/film.png" alt="" />
        <img src="/images/browse.png" alt="" />
      </div>
      
    </div>
  );
}

export default HeroMovieSection;