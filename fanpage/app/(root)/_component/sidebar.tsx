import React from 'react';
import styles from '../_css/sidebar.module.css';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="./infor">
              <div className={styles.navLink}>Thông tin bác sĩ</div>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="./media">
              <div className={styles.navLink}>Lịch khám </div>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="./infor">
              <div className={styles.navLink}>Lịch khám </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
