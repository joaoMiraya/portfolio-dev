import React, { useState, useEffect, useRef } from 'react';
import ArrowAnimation from './ReutComp/ArrowAnimation';




function Home({ t }) {
    const textRef = useRef();



    function typeWriter(element) {
        const text = textRef.current.innerHTML;
        if (!text) {
            return;
        }
        const textArray = text.split('');
        element.innerHTML = '';
        textArray.forEach((letra, i) => {
            setTimeout(() => {
                if (element) { // verifica se o elemento ainda existe
                    element.innerHTML += letra;
                }
            }, 75 * i);
        });
    }

    useEffect(() => {
        typeWriter(textRef.current);
    }, [])
    return (
        <>
            <div className='container bg-[url(./public/images/bgteste.png)] bg-fixed bg-cover bg-repeat-space flex flex-col justify-between text-center h-screen text-white p-4 sm:justify-start  '>
                <div className=' sm:w-full md:flex w-4/5 md:flex-col md:w-full md:h-full  md:justify-evenly md:pl-[30%] md:text-center text-2xl ml-16 xl:pr-16 mt-20'>

                    <h1 className=' sm:text-4xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-[#FFD700] '
                        id='titleAnimation'
                        ref={textRef}
                    >
                     {t('primaryText')}
                    </h1>
                    <div className='text-white mt-6 xl:pr-8'>
                        <h1 className='textAnimate mt-32 xl:mr-12'>
                            {t('secondText')}  
                        </h1>
                    </div>
                </div>

                <div className='pl-16 flex w-full justify-center arrow-animate '>
                    <ArrowAnimation />
                </div>
            </div>


        </>
    )
}

export default Home;