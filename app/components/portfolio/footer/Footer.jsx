import React from 'react';
import { TbChevronsUp } from 'react-icons/tb';
import styles from './footer.module.css';
import Link from 'next/link';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <div>
                        <p className={styles.copy}>Copyright &copy; by norixlab 2023</p>
                    </div>
                    {/* <div className={styles.btn}> */}
                        <Link href="#home" className={styles.btn}>
                            <TbChevronsUp size={20} color="#323946" />
                            {/* <i className="bx bx-chevrons-up"></i> */}
                        </Link>
                    {/* </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
