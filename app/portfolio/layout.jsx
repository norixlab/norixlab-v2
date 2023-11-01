import React from 'react';
import Header from '../components/portfolio/header/Header';


const LayoutPortfolio = ({ children }) => {
    return (
        <>
            <Header />

            {children}
        </>
    );
};

export default LayoutPortfolio;
