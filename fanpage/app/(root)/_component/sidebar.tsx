import React from 'react';
import { FaUser, FaCalendarAlt, FaFolder } from 'react-icons/fa';
import Link from 'next/link';
import styles from '../_css/sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="./infor">
              <div className={styles.navLink}>
                <FaUser className={styles.icon} /> Thông tin bác sĩ
              </div>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="./media">
              <div className={styles.navLink}>
                <FaCalendarAlt className={styles.icon} /> Lịch khám
              </div>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="./infor">
              <div className={styles.navLink}>
                <FaFolder className={styles.icon} /> Hồ sơ khám bệnh
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
