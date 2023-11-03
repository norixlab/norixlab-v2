import React from 'react';
import Link from 'next/link';
import Hero from '../components/portfolio/hero/Hero';

import About from '../components/portfolio/about/About';
import Skills from '../components/portfolio/skills/Skills';
import Projects from '../components/portfolio/projects/Projects';
import Contacts from '../components/portfolio/contacts/Contacts';
import Footer from '../components/portfolio/footer/Footer';
const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contacts />
            <Footer />
        </>
    );
};

export default Home;
