import styles from './Layout.module.scss';
import Header from './Header';
import Footer from './Footer';
import { Barlow_Condensed } from 'next/font/google';

const lato = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal']
})

function Layout(props) {
  return (
    <div className={`${styles.app} ${lato.className}`}>
      <Header />
      <main className={styles.main}>
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
