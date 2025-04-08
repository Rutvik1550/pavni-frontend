import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Detail from '../components/Detail';


const ProductDetail = () => {
    return (
        <>
            <Hero isHero={false} />
            <Detail />
            <Footer />
        </>

    )
}

export default ProductDetail;

