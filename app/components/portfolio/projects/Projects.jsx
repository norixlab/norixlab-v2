'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromBottom, slideInFromTop } from '../../../utils/motion';
import styles from './projects.module.css';
import { projects } from '../data';
import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';
import Image from 'next/image';

const Projects = () => {
    return (
        <section className={styles.projects} id="projects">
            <div className={styles.container}>
                <motion.div initial="hidden" whileInView="visible" className={styles.inner}>
                    <motion.h2 variants={slideInFromTop(0.2, 1)} className={styles.title}>
                        Lasted <span>Projects</span>
                    </motion.h2>

                    <div className={styles.wrapper}>
                        {projects.map((item) => (
                            <motion.div
                                key={item.id}
                                className={styles.projectsBox}
                                variants={slideInFromBottom(0.2, 2)}>
                                {/* <img src="assets/images/portfolio1.jpg" alt=""> */}
                                <Image
                                    src={item.imageUrl}
                                    className={styles.img}
                                    width={410}
                                    height={270}
                                />
                                <div className={styles.projectsLayer}>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                    <Link href={item.link} className={styles.projectLink}>
                                        <BiLinkExternal />
                                        {/* <i className="bx bx-link-external"></i> */}
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                        {/* <div className={styles.projectsBox}>
                          <img src="assets/images/portfolio2.jpg" alt="">
                          <div className="portfolio__layer">
                              <h4>Web Design</h4>
                              <p>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, et?
                              </p>
                              <a href="#">
                                  <i className="bx bx-link-external"></i>
                              </a>
                          </div>
                      </div>
                      <div className={styles.projectsBox}>
                          <img src="assets/images/portfolio3.jpg" alt="">
                          <div className="portfolio__layer">
                              <h4>Web Design</h4>
                              <p>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, et?
                              </p>
                              <a href="#">
                                  <i className="bx bx-link-external"></i>
                              </a>
                          </div>
                      </div>
                      <div className={styles.projectsBox}>
                          <img src="assets/images/portfolio4.jpg" alt="">
                          <div className="portfolio__layer">
                              <h4>Web Design</h4>
                              <p>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, et?
                              </p>
                              <a href="#">
                                  <i className="bx bx-link-external"></i>
                              </a>
                          </div>
                      </div>
                      <div className={styles.projectsBox}>
                          <img src="assets/images/portfolio5.jpg" alt="">
                          <div className="portfolio__layer">
                              <h4>Web Design</h4>
                              <p>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, et?
                              </p>
                              <a href="#">
                                  <i className="bx bx-link-external"></i>
                              </a>
                          </div>
                      </div>
                       <div className="portfolio__box">
                           <img src="assets/images/portfolio6.jpg" alt=""> 
                          <div className="portfolio__layer">
                              <h4>Web Design</h4>
                              <p>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, et?
                              </p>
                              <a href="#">
                                  <i className="bx bx-link-external"></i>
                              </a>
                          </div>
                      </div>  */}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
