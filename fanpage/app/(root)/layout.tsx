import Header from "./_component/header";
import React from 'react';
import Sidebar from './_component/sidebar';
import styles from './_css/layout.module.css';
import { ClerkProvider } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const RootLayout = async ({children} : {children : React.ReactNode}) => {
    const user = await currentUser()
    if(!user) redirect("/sign-in")
    return (
        <ClerkProvider>
        <div className={styles.layout}>
            <Header/>
            <div className={styles.container}>
                <Sidebar />
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
        </ClerkProvider>
    )
}

export default RootLayout