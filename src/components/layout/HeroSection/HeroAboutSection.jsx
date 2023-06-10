import styles from './HeroAboutSection.module.scss';


function HeroSection({ title, description, bgImage }) {
  // SEE on STATIC ASSETS: https://nextjs.org/docs/pages/building-your-application/optimizing/static-assets

  return (
    <div 
      className={styles.showcase}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}>
        <h1><span>{title}</span></h1>
        <p>{description}</p>
        <p>For personal and entertainment purposes only.</p>
      </div>
      
    </div>
  );
}

export default HeroSection;