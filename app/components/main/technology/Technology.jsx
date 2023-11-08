'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromBottom } from '../../../utils/motion';
import styles from './technology.module.css';
import Button from '../../button/Button';
import Image from 'next/image';
const Technology = () => {
    return (
        <motion.div className={styles.techology}>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <div className={styles.imageBox}>
                        <Image src="/assets/CSS3_logo.svg.png" width={300} height={300} alt="css" />
                    </div>
                    <div className={styles.textBox}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                            voluptas, aliquam aperiam doloribus quibusdam cum voluptatum delectus
                            aliquid obcaecati quidem omnis unde! Officia odio similique voluptatem
                            alias. Sequi, vitae porro.
                        </p>
                    </div>
                </div>
                <motion.div className={styles.content}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: { duration: 3 } }}
                        // animate={{}}
                        exit={{ opacity: 0 }}
                        className={styles.imageBox}>
                        <Image src="/assets/CSS3_logo.svg.png" width={300} height={300} alt="css" />
                    </motion.div>
                    <div className={styles.textBox}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                            voluptas, aliquam aperiam doloribus quibusdam cum voluptatum delectus
                            aliquid obcaecati quidem omnis unde! Officia odio similique voluptatem
                            alias. Sequi, vitae porro.
                        </p>
                    </div>
                </motion.div>
                <div className={styles.content}>
                    <div className={styles.imageBox}>
                        <Image src="/assets/CSS3_logo.svg.png" width={300} height={300} alt="css" />
                    </div>
                    <div className={styles.textBox}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                            voluptas, aliquam aperiam doloribus quibusdam cum voluptatum delectus
                            aliquid obcaecati quidem omnis unde! Officia odio similique voluptatem
                            alias. Sequi, vitae porro.
                        </p>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.imageBox}>
                        <Image src="/assets/CSS3_logo.svg.png" width={300} height={300} alt="css" />
                    </div>
                    <div className={styles.textBox}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                            voluptas, aliquam aperiam doloribus quibusdam cum voluptatum delectus
                            aliquid obcaecati quidem omnis unde! Officia odio similique voluptatem
                            alias. Sequi, vitae porro.
                        </p>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.imageBox}>
                        <Image src="/assets/CSS3_logo.svg.png" width={300} height={300} alt="css" />
                    </div>
                    <div className={styles.textBox}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                            voluptas, aliquam aperiam doloribus quibusdam cum voluptatum delectus
                            aliquid obcaecati quidem omnis unde! Officia odio similique voluptatem
                            alias. Sequi, vitae porro.
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className={styles.buttonsBox}>
                <div className={styles.container}>
                    <Button title="Prev" url="/" />
                    <Button title="next" url="#" />
                </div>
            </div> */}
        </motion.div>
    );
};

export default Technology;
