import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image01 from "../images/01.png";
import vanvet from "../images/vanvet.jpg";

const Portfolio = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = async (id) => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_API}/api/product`);
            const data = await res.json()
            console.log(data, 'ddddddddd')
              if (data) setProducts(data);
        } catch (error) {
            console.error('error with fetch product: ', error)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <div className="my-4 py-4 mt-32" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Products</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>

                <div className="px-10" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-2">
                        {products.map((p, idx) => {
                            return (
                                <a type="link" key={p._id} href={`/product/${p._id}`}>
                                    <div className="group rounded-2xl shadow-xl w-auto m-3 transform transition duration-500 hover:scale-110 portofolio-card">
                                        <div className="relative">
                                            <img src={'https://i.ibb.co/Xhn9yG1/vanvet.jpg'} alt="Portfolio" className="rounded-t-2xl z-0" />
                                            <div className="absolute flex w-full h-full top-0 opacity-0 bg-black justify-center rounded-t-2xl rounded-b img-hover">
                                                <button className="focus:outline-none">
                                                    <svg className="w-20 h-20 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="py-4 px-2">
                                            <h2 className="text-theme-blue text-center text-xl text-ellipsis text-nowrap overflow-hidden">{p.title}</h2>
                                            {/* <p className="font-light text-gray-400 text-center">{"item.type"}</p> */}
                                        </div>
                                    </div>
                                </a>
                            )
                        })}

                        {/* <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <img src={image01} loading='lazy' alt='image01' />
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Payroll Management System</h4>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Get Info
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <img src={vanvet} loading='lazy' alt='image01' />
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Event Management System</h4>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Get Info
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;