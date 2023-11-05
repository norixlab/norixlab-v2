'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
    slideInFromBottom,
} from '../../../utils/motion';

import styles from './hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <motion.div initial="hidden" animate="visible" className={styles.contentBox}>
                <div className={styles.content}>
                    <div className={styles.titleBox}>
                        <motion.h1
                            initial={{ y: '-80%', opacity: 0 }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                transition: { duration: 1.5, delay: 0.7 },
                            }}
                            className={styles.title}>
                            norix
                            <span>lab</span>
                        </motion.h1>
                        <motion.span
                            initial={{ x: '-100%', opacity: 0 }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                transition: { duration: 2, delay: 1.3 },
                            }}
                            className={styles.underline}></motion.span>
                    </div>
                    <motion.div variants={slideInFromLeft(0.5, 1)} className={styles.subTitleBox}>
                        <p>Development of modern websites</p>
                    </motion.div>
                    <motion.p variants={slideInFromLeft(0.8, 1)} className={styles.description}>
                        I&apos;m a Full Stack Software Engineer with experience in Website, Mobile,
                        and Software development. Check out my projects and skills.
                    </motion.p>
                    <motion.a
                        initial={{ x: '-80%', opacity: 0 }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            transition: { duration: 1, delay: 0.3 },
                        }}
                        className={styles.buttonPrimary}>
                        click me
                    </motion.a>
                </div>
                <motion.div variants={slideInFromRight(0.8, 1)} className={styles.logoBox}>
                    <Image
                        src="/method-draw-image.svg"
                        alt="Logo Background"
                        height={550}
                        width={550}
                        className={styles.bgLogo}
                    />
                    <Image
                        src="/logo.svg"
                        height={600}
                        width={600}
                        alt="Logo"
                        className={styles.mainLogo}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
