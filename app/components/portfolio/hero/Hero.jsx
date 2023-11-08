'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import Image from 'next/image';
import Link from 'next/link';

import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../../../utils/motion';
import { AiFillInstagram, AiOutlineGithub } from 'react-icons/ai';
import { SlSocialVkontakte } from 'react-icons/sl';
import { BiLogoTelegram } from 'react-icons/bi';
import Button from '../../button/Button';
import styles from './hero.module.css';

const Hero = () => {
    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Frontend Developer', 'Good Guy!'],
            typeSpeed: 80,
            backSpeed: 80,
            backDelay: 1000,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <motion.section initial="hidden" whileInView="visible" className={styles.home} id="home">
            <div className={styles.container}>
                <div className={styles.inner}>
                    <motion.div variants={slideInFromTop(0.2, 2)} className={styles.content}>
                        <motion.p variants={slideInFromRight(0.2, 2)}>Hello, It&apos;s Me</motion.p>
                        <motion.h1 variants={slideInFromLeft(0.2, 2)}>Sergey Taydakov</motion.h1>
                        <h3>
                            And I&apos;m a <span ref={el} />
                        </h3>
                        <motion.p variants={slideInFromRight(0.2, 2)}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
                            tempore necessitatibus officiis dolor voluptatibus eos adipisci et?
                        </motion.p>
                        <ul className={styles.social}>
                            <li>
                                <Link className={styles.socialLink} href="#">
                                    <AiFillInstagram size={22} />
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.socialLink} href="#">
                                    <AiOutlineGithub size={22} />
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.socialLink} href="#">
                                    <SlSocialVkontakte size={20} />
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.socialLink} href="#">
                                    <BiLogoTelegram size={20} />
                                </Link>
                            </li>
                        </ul>

                        <Button title="My Resume" url="#" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 2, delay: 0.7 } }}>
                        <Image
                            className={styles.img}
                            src="/assets/hero.png"
                            alt="My photo"
                            width={500}
                            height={600}
                            quality={75}
                        />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;
