import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "/node_modules/flag-icons/css/flag-icons.min.css";

import { AiOutlineHome, AiFillGithub } from 'react-icons/ai';
import { RiContactsLine } from 'react-icons/ri';
import { BsCodeSlash, BsGear } from 'react-icons/bs';
import { SlSocialLinkedin } from 'react-icons/sl';
import { SiGmail } from 'react-icons/si';

function Header({ handleBackToHome, handleBackToTech, handleBackToProjects, btnCvRef, btnFinalFormRef, handleChangeLanguage, currentLanguage }) {

    const [config, setConfig] = useState(false);
    const optionRef = useRef();
    const optionBoxRef = useRef();


    useEffect(() => {
        if (config) {
            optionRef.current.classList.add('optionAnimate');
            optionRef.current.classList.remove('optionAnimateReverse');
            setTimeout(() => {
                optionBoxRef.current.classList.remove('hidden');
            }, 300)
        } else {
            optionRef.current.classList.add('optionAnimateReverse');
            optionRef.current.classList.remove('optionAnimate');
            setTimeout(() => {
                optionBoxRef.current.classList.add('hidden');
            }, 500)
        }
    }, [config]);
    const handleClick = () => {
        setConfig(!config);
    };
    /* THEME FUNCTIONS */
    const navBarRef = useRef();



    function handleDefaultTheme() {
        navBarRef.current.classList.remove('navPurpleTheme');
        optionBoxRef.current.classList.remove('configPurpleTheme');
        navBarRef.current.classList.remove('navPinkTheme');
        optionBoxRef.current.classList.remove('configPinkTheme');
        btnCvRef.current.classList.remove('cvButtonPurpleTheme');
        btnCvRef.current.classList.remove('cvButtonPinkTheme');
        btnFinalFormRef.current.classList.remove('cvButtonPinkTheme');
        btnFinalFormRef.current.classList.remove('cvButtonPurpleTheme');

        navBarRef.current.classList.add('navDefaultTheme');
        optionBoxRef.current.classList.add('configDefaultTheme');
        btnCvRef.current.classList.add('cvButtonDefaultTheme');
        btnFinalFormRef.current.classList.add('cvButtonDefaultTheme');
    }
    function handlePurpleTheme() {
        navBarRef.current.classList.remove('navDefaultTheme');
        optionBoxRef.current.classList.remove('configDefaultTheme');
        navBarRef.current.classList.remove('navPinkTheme');
        optionBoxRef.current.classList.remove('configPinkTheme');
        btnCvRef.current.classList.remove('cvButtonDefaultTheme');
        btnCvRef.current.classList.remove('cvButtonPinkTheme');
        btnFinalFormRef.current.classList.remove('cvButtonDefaultTheme');
        btnFinalFormRef.current.classList.remove('cvButtonPinkTheme');

        navBarRef.current.classList.add('navPurpleTheme');
        optionBoxRef.current.classList.add('configPurpleTheme');
        btnCvRef.current.classList.add('cvButtonPurpleTheme');
        btnFinalFormRef.current.classList.add('cvButtonPurpleTheme');
    }
    function handlePinkTheme() {
        navBarRef.current.classList.remove('navDefaultTheme');
        optionBoxRef.current.classList.remove('configDefaultTheme');
        navBarRef.current.classList.remove('navPurpleTheme');
        optionBoxRef.current.classList.remove('configPurpleTheme');
        btnCvRef.current.classList.remove('cvButtonDefaultTheme');
        btnCvRef.current.classList.remove('cvButtonPurpleTheme');
        btnFinalFormRef.current.classList.remove('cvButtonPurpleTheme');
        btnFinalFormRef.current.classList.remove('cvButtonDefaultTheme');

        navBarRef.current.classList.add('navPinkTheme');
        optionBoxRef.current.classList.add('configPinkTheme');
        btnCvRef.current.classList.add('cvButtonPinkTheme');
        btnFinalFormRef.current.classList.add('cvButtonPinkTheme');
    }

    /* THEME FUNCTIONS END */


    return (

        <nav ref={navBarRef} className='z-40 navDefaultTheme flex flex-col justify-between overflow-y-hidden gap-8  items-center pt-4 w-16 h-full fixed bg-transparent '>
            <div className='flex flex-col hoverNavThemeDefault gap-6 '>
                <div className=" flex justify-between ">
                    <div ref={optionRef}>
                        <BsGear size={35} onClick={handleClick} className=' cursor-pointer' />
                    </div>
                    <div ref={optionBoxRef} className="bg-[#0c0c0c] h-16 flex flex-col rounded-md border-2  p-2 configDefaultTheme  fixed left-14 ">
                        <div className="flex gap-2">
                            <span onClick={handleDefaultTheme} className="w-5 h-5 bg-green-300 rounded-full cursor-pointer hover:opacity-40"></span>
                            <span onClick={handlePurpleTheme} className="w-5 h-5 bg-purple-700 rounded-full cursor-pointer hover:opacity-40"></span>
                            <span onClick={handlePinkTheme} className="w-5 h-5 bg-pink-700 rounded-full cursor-pointer hover:opacity-40"></span>
                        </div>
                        <div className="flex justify-center items-center m-2 text-white">
                            <button onClick={handleChangeLanguage} className="cursor-pointer flex hover:opacity-40"><span className={currentLanguage === 'en' ? 'fi fi-br' : 'fi fi-us'}></span>
                                <div className="text-sm flex flex-col h-full items-start">
                                    <p className="text-white ml-2">{currentLanguage === 'en' ? 'PT-BR' : 'EN'}</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <AiOutlineHome size={35} onClick={handleBackToHome} className=' cursor-pointer hover:border-b-2 border-green-200' />
                <RiContactsLine size={35} onClick={handleBackToTech} className=' cursor-pointer hover:border-b-2 border-green-200' />
                <BsCodeSlash size={35} onClick={handleBackToProjects} className=' cursor-pointer hover:border-b-2 border-green-200' />
            </div>
            <div className='flex flex-col mb-6 gap-6 z-60'>
                <a href="https://github.com/joaomiraya" target="_blank"><AiFillGithub className=' cursor-pointer hover:border-b-2 border-green-200' size={35} /></a>
                <a href="https://linkedin.com/in/joaomiraya" target="_blank"><SlSocialLinkedin className=' cursor-pointer hover:border-b-2 border-green-200' size={35} /></a>
            </div>
        </nav>

    )

}

export default Header;