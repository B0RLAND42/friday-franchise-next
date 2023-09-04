import styles from './HeroDocSection.module.scss';


function HeroDocSection({ title, description, bgImage }) {
  // SEE on STATIC ASSETS: https://nextjs.org/docs/pages/building-your-application/optimizing/static-assets

  return (
    <div 
      className={styles.showcase}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}>
        <h1><span>{title}</span></h1>
        <p>The Making of <span>FRIDAY THE 13th</span></p>
      </div>
      
    </div>
  );
}

export default HeroDocSection;