import Header from "./_component/header";
import React from 'react';
import Sidebar from './_component/sidebar';
import styles from './_css/layout.module.css';

const RootLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <div className={styles.layout}>
            <Header/>
            <div className={styles.container}>
                <Sidebar />
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default RootLayout