import Link from 'next/link';
import React from 'react';
import styles from './button.module.css';
const Button = ({ title, url }) => {
    return (
        <div className={styles.btn}>
            <Link href={url}>{title}</Link>
        </div>
    );
};

export default Button;
