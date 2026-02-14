import styles from './HeroTvSection.module.scss';


function HeroTvSection({ title, description, bgImage }) {
  // SEE on STATIC ASSETS: https://nextjs.org/docs/pages/building-your-application/optimizing/static-assets

  return (
    <div 
      className={styles.showcase}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}>
        <img src="/images/series.png" alt="" />
      </div>
      
    </div>
  );
}

export default HeroTvSection;