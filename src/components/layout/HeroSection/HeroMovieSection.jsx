import styles from './HeroMovieSection.module.scss';


function HeroMovieSection({ title, bgImage }) {
  // SEE on STATIC ASSETS: https://nextjs.org/docs/pages/building-your-application/optimizing/static-assets

  return (
    <div 
      className={styles.showcase}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}>
        <h1><span>{title}</span></h1>
        <p>Browse <span>FRIDAY THE 13th</span> movie info</p>
      </div>
      
    </div>
  );
}

export default HeroMovieSection;