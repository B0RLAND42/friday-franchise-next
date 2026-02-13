import styles from './HeroSection.module.scss';

function HeroSection({ title, bgImage }) {
  // SEE on STATIC ASSETS: https://nextjs.org/docs/pages/building-your-application/optimizing/static-assets

  return (
    <div 
      className={styles.showcase}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}>
        <img src="/images/friday-logo-font.png" alt="" />
        
        <p>The <span>ULTIMATE</span> Fan Site dedicated to the <span className={styles.spanItalic}>FRIDAY THE 13th</span> Franchise</p>
      </div>
      
    </div>
  );
}

export default HeroSection;