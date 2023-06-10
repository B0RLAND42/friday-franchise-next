import styles from './HeroTermsSection.module.scss';


function HeroSection({ title, description, bgImage }) {
  // SEE on STATIC ASSETS: https://nextjs.org/docs/pages/building-your-application/optimizing/static-assets

  return (
    <div 
      className={styles.showcase}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}>
        <h1><span>{title}</span></h1>
        
        <p>Cupcake ipsum dolor sit amet biscuit powder chocolate tootsie roll. <br></br>Gummies shortbread sesame snaps pastry muffin apple pie chocolate.</p>
      </div>
      
    </div>
  );
}

export default HeroSection;