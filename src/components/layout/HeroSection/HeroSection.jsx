import styles from './HeroSection.module.scss';

function HeroSection({ title, bgImage }) {
  // SEE on STATIC ASSETS: https://nextjs.org/docs/pages/building-your-application/optimizing/static-assets

  return (
    <div 
      className={styles.showcase}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}>
        <img src="/images/friday13.png" alt="" />
        <img src="/images/franchise.png" alt="" />
      </div>
      
    </div>
  );
}

export default HeroSection;