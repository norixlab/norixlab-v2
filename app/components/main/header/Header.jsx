'use client';
import React from 'react';
import { mainLinks } from '../links';

import styles from './header.module.css';
import Image from 'next/image';
import { BiLogoGithub, BiLogoTelegram } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { TbMenuDeep } from 'react-icons/tb';

import Link from 'next/link';

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image src="/logo.svg" width={90} height={90} alt='Logo'/>
                    </Link>
                </div>
                <nav>
                    <ul
                        className={
                            isOpen ? [styles.links, styles.active].join(' ') : [styles.links]
                        }>
                        {mainLinks.map((link) => (
                            <li key={link.id}>
                                <Link className={styles.link} href={link.url}>
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={styles.socialIcons}>
                    <Link href="#">
                        <BiLogoGithub className={styles.socialIcon} size={30} />
                    </Link>
                    <Link href="#">
                        <BiLogoTelegram className={styles.socialIcon} size={30} />
                    </Link>
                    <div className={styles.mobMenuBtn} onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <IoClose size={30} /> : <TbMenuDeep size={30} />}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
