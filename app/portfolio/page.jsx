'use client'
import React from 'react';
import Link from 'next/link';
import { motion, useScroll } from "framer-motion";
import Hero from '../components/portfolio/hero/Hero';

import About from '../components/portfolio/about/About';
import Skills from '../components/portfolio/skills/Skills';
import Projects from '../components/portfolio/projects/Projects';
import Contacts from '../components/portfolio/contacts/Contacts';
import styles from '../page.module.css'
const Home = () => {
    const { scrollYProgress } = useScroll();
    return (
        <>
        <motion.div className={styles.progressBar} style={{ scaleX: scrollYProgress }} />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contacts />
         </>   
        
    );
};

export default Home;
