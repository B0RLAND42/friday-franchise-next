import styles from './HeroTvSection.module.scss';


function HeroTvSection({ title, description, bgImage }) {
  // SEE on STATIC ASSETS: https://nextjs.org/docs/pages/building-your-application/optimizing/static-assets

  return (
    <div 
      className={styles.showcase}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}>
        <h1><span>the series</span></h1>
        <p>{description}</p>
      </div>
      
    </div>
  );
}

export default HeroTvSection;