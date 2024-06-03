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
            <Link href="./infor" >
              <div className={styles.navLink}>
                <FaUser className={styles.icon} /> 
                <span>Thông tin bác sĩ</span>
              </div>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="./media" >
              <div className={styles.navLink}>
                <FaCalendarAlt className={styles.icon} /> 
                <span>Lịch khám</span>
              </div>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="./infor" >
              <div className={styles.navLink}>
                <FaFolder className={styles.icon} /> 
                <span>Hồ sơ khám bệnh</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
