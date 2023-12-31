'use client';
import React from 'react';
import { FaTelegramPlane, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';

import { motion } from 'framer-motion';
import { slideInFromTop, slideInFromBottom } from '../../../utils/motion';
import styles from './contacts.module.css';

// import Button from './../../button/Button';
import Link from 'next/link';
const Contacts = () => {
    return (
        <motion.section initial="hidden" whileInView="visible" className={styles.contacts} id="contacts">
            <div className={styles.container}>
                <motion.div  className={styles.inner}>
                    <motion.h2 variants={slideInFromTop(0.3, 2)} className={styles.title}>
                        Contact <span>Me!</span>
                    </motion.h2>
                    <div className={styles.contactsCard}>
                        <motion.div
                            variants={slideInFromBottom(0.3, 2)}
                            className={styles.cardItem}>
                            <div className={styles.ringItem}></div>
                            <div className={styles.ringItem}></div>
                            <div className={styles.ringItem}></div>
                            <Link href="#" className={styles.cardLink}>
                                <FaTelegramPlane size={50} className={styles.icon} />
                            </Link>
                        </motion.div>
                        <motion.div
                            variants={slideInFromBottom(0.5, 2)}
                            className={styles.cardItem}>
                            <div className={styles.ringItem}></div>
                            <div className={styles.ringItem}></div>
                            <div className={styles.ringItem}></div>
                            <Link href="#" className={styles.cardLink}>
                                <FaWhatsapp size={50} className={styles.icon} />
                            </Link>
                        </motion.div>
                        <motion.div
                            variants={slideInFromBottom(0.7, 2)}
                            className={styles.cardItem}>
                            <div className={styles.ringItem}></div>
                            <div className={styles.ringItem}></div>
                            <div className={styles.ringItem}></div>
                            <Link href="#" className={styles.cardLink}>
                                <FaInstagram size={50} className={styles.icon} />
                            </Link>
                        </motion.div>
                        <motion.div
                            variants={slideInFromBottom(0.9, 2)}
                            className={styles.cardItem}>
                            <div className={styles.ringItem}></div>
                            <div className={styles.ringItem}></div>
                            <div className={styles.ringItem}></div>
                            <Link href="#" className={styles.cardLink}>
                                <SlSocialVkontakte size={50} className={styles.icon} />
                            </Link>
                        </motion.div>
                    </div>

                    {/* <form className={styles.form} action="#">
                      <div className={styles.inputBox}>
                          <input type="text" name="name" placeholder="Your Name*" required />
                          <input type="email" name="email" placeholder="Your Email*" required />
                      </div>
                      <div className="form__input-box">
                          <input type="number" name="phone" placeholder="Phone (optional)" />
                          <input type="text" name="subject" placeholder="Email Subject" />
                      </div>
                      <textarea
                          className="form__message"
                          name="message"
                          id="message"
                          placeholder="Your Message..."></textarea>
                      <Button title="Send Message" type='' />
                      <input className="btn form__btn" type="submit" value="Send Message" />
                  </form> */}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Contacts;
