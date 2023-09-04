import Link from 'next/link';
import styles from './Footer.module.scss';
import { FaGithub } from "react-icons/fa";

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <Link href='/' >
          <span className={styles.logoMain}>
          &copy; {getCurrentYear()} Friday The 13th FanSite
        </span>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/about' className={styles.blend}>About Friday The 13th FanSite </Link>
          </li>
        </ul>
      </nav>
        <a href="https://github.com/B0RLAND42"  target="_blank" rel="noreferrer">
          <FaGithub className={styles.gitIcon} size={30} style={{ color: "#FFFFFF" }}/>
        </a>
    </footer>
  );
}

export default Footer;