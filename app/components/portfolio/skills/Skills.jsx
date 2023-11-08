'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { GrReactjs } from 'react-icons/gr';
import { BiCodeAlt } from 'react-icons/bi';
import { FaWordpressSimple } from 'react-icons/fa6';
import { slideInFromBottom, slideInFromTop } from '../../../utils/motion';
import Button from '../../button/Button';
import styles from './skills.module.css';
const Skills = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            className={styles.services}
            id="skills">
            <div className={styles.container}>
                <motion.div className={styles.inner}>
                    <motion.h2 variants={slideInFromTop(0.2, 2)} className={styles.title}>
                        My <span>Skills</span>
                    </motion.h2>

                    <motion.div variants={slideInFromBottom(0.2, 2)} className={styles.wrapper}>
                        <div className={styles.servicesBox}>
                            <BiCodeAlt size={60} color="#0ef" />
                            {/* <i className='bx bx-code-alt'></i> */}
                            <h3>HTML CSS JS</h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                                voluptas quam harum neque vel ratione. Iure distinctio aut itaque
                                necessitatibus!
                            </p>
                            <Button title="View Projects" url="#" />
                            {/* <a className="btn" href="#">
                              Read More
                          </a> */}
                        </div>

                        <div className={styles.servicesBox}>
                            <GrReactjs size={60} color="#0ef" />
                            {/* <i className="bx bxl-react"></i> */}
                            <h3>ReactJS NextJS</h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                                voluptas quam harum neque vel ratione. Iure distinctio aut itaque
                                necessitatibus!
                            </p>
                            <Button title="View Projects" url="#" />
                            {/* <a className="btn" href="#">
                              Read More
                          </a> */}
                        </div>

                        <div className={styles.servicesBox}>
                            <FaWordpressSimple size={60} color="#0ef" />
                            {/* <i className="bx bxl-wordpress"></i> */}
                            <h3>WordPress</h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                                voluptas quam harum neque vel ratione. Iure distinctio aut itaque
                                necessitatibus!
                            </p>
                            <Button title="View Projects" url="#" />
                            {/* <a className="btn" href="#">
                              Read More
                          </a> */}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Skills;
