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
        <p>Browse information about all "Friday the 13th" movie releases</p>
      </div>
      
    </div>
  );
}

export default HeroMovieSection;