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
                    <motion.div variants={slideInFromTop(0.2, 1)} className={styles.titleBox}>
                        <h1 className={styles.title}>norixlab</h1>
                    </motion.div>
                    <motion.div variants={slideInFromLeft(0.5, 1)} className={styles.subTitleBox}>
                        <span>Development of modern websites</span>
                    </motion.div>
                    <motion.p variants={slideInFromLeft(0.8, 1)} className={styles.description}>
                        I&apos;m a Full Stack Software Engineer with experience in Website, Mobile,
                        and Software development. Check out my projects and skills.
                    </motion.p>
                    <motion.a variants={slideInFromLeft(1, 1)} className={styles.buttonPrimary}>
                        click me
                    </motion.a>
                </div>
                <motion.div variants={slideInFromRight(0.8, 1)} className={styles.logoBox}>
                    <Image
                        src="/method-draw-image.svg"
                        alt="Logo Background"
                        height={550}
                        width={550}
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
