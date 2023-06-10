import styles from './HeroSection.module.scss';


function HeroSection({ title, bgImage }) {
  // SEE on STATIC ASSETS: https://nextjs.org/docs/pages/building-your-application/optimizing/static-assets

  return (
    <div 
      className={styles.showcase}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}>
        <h1><span>{title}</span></h1>
        <p>The <span>ULTIMATE</span> Fan Site dedicated to the Friday The 13th Franchise!</p>
      </div>
      
    </div>
  );
}

export default HeroSection;