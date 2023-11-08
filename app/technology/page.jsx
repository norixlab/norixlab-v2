import React from 'react';
import Header from '../components/main/header/Header';
import Technology from '../components/main/technology/Technology';
import styles from '../page.module.css';
const pageTechnology = () => {
    return (
        <>
            <Header />
            <section className={styles.section}>
                <div className={styles.container}>
                    <Technology />
                </div>
            </section>
        </>
    );
};

export default pageTechnology;
