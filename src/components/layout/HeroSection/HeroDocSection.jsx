import styles from './HeroDocSection.module.scss';


function HeroDocSection({ title, description, bgImage }) {
  // SEE on STATIC ASSETS: https://nextjs.org/docs/pages/building-your-application/optimizing/static-assets

  return (
    <div 
      className={styles.showcase}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}>
        <img src="/images/docs.png" alt="" />
        <img src="/images/making.png" alt="" />
      </div>
      
    </div>
  );
}

export default HeroDocSection;