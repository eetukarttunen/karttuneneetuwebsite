import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import Alapalkki from '../Alapalkki';
import Materiaaleja from '../Materiaaleja';

function Home () {
    return(
        <>
        <Hero />
        <Materiaaleja />
        <Alapalkki />
        </>

    );
}

export default Home;