import Link from 'next/link';
import React, { useState } from 'react';
import styles from './Header.module.scss';
// CODEFEED ICON: https://react-icons.github.io/react-icons/search?q=mdoutlinecodeoff
// import { MdOutlineCodeOff } from 'react-icons/md';

function Header() {
  
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link href='/'>
          {/* <span className={styles.logoEnds}>&lt; </span>  */}
          <span className={styles.logoMain}>Friday the 13th</span>
          {/* <span className={styles.logoEnds}>&#47;&gt;</span> */}
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/fridaymovies' className={styles.blend}><span>Movies</span></Link>
          </li>
          <li>
            <Link href='/fridaytv' className={styles.blend}><span>TV Series</span></Link>
          </li>
          <li>
            <Link href='/fridaydoc' className={styles.blend}><span>Documentaries</span></Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;