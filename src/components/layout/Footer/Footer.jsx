import Link from 'next/link';
import styles from './Footer.module.scss';
import { FaGithub } from "react-icons/fa";

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className={styles.footer}>
        <Link href='/' className={styles.logoMain}>
          &copy; {getCurrentYear()} Friday The 13th FanSite
        </Link>
        <Link href='/about' className={styles.blend}>ABOUT FRIDAY THE 13TH FANSITE </Link>
        <a href="https://github.com/B0RLAND42"  target="_blank" rel="noreferrer">
          <FaGithub size={30} style={{ marginTop: '6px' }}/>
        </a>
    </footer>
  );
}

export default Footer;