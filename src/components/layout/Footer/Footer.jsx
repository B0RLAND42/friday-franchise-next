import Link from 'next/link';
import styles from './Footer.module.scss'

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <Link href='/' >
          {/* <span className={styles.logoEnds}>&lt; </span>  */}
          <span className={styles.logoMain}>
          &copy; {getCurrentYear()} Friday The 13th FanSite
        </span>
          {/* <span className={styles.logoEnds}>&#47;&gt;</span> */}
        </Link>
      </div>
      <nav>
        <ul>
          
          <li>
            <Link href='/terms' className={styles.blend}>Terms of Use </Link>
          </li>
          <li>
            <Link href='/about' className={styles.blend}>About Friday The 13th FanSite </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;