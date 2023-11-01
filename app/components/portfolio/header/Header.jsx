'use client';
import React from 'react';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';
import { TbMenuDeep } from 'react-icons/tb';
import { usePathname } from 'next/navigation';
import { menuLinks } from '../links';
import styles from './header.module.css';
const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = usePathname();
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <Link className={styles.logo} href="/">
                        Portfolio
                    </Link>

                    <ul
                        className={
                            isOpen
                                ? [styles.menuList, styles.menuActive].join(' ')
                                : styles.menuList
                        }>
                        {menuLinks.map((link) => (
                            <li key={link.id} >
                                <Link className={styles.listLink} href={link.url} onClick={()=> setIsOpen(!isOpen)}>
                                    {/* ${pathname === '/' ? 'active' : ''} */}
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.mobMenuBtn} onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <IoClose size={30} /> : <TbMenuDeep size={30} />}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
