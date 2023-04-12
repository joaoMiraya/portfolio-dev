import React, { useEffect, useRef } from "react";
import photo from '../../assets/images/photo.png';
import { BsDownload } from 'react-icons/bs';

function AboutMe({ pdfCV, btnCvRef, pdfCVEn, t, currentLanguage }) {
    const CvPtRef = useRef();
    const CvEnRef = useRef();

    

    return (
        <>
            <div className="flex w-full justify-start animate-pulse	"> {/* BLUR EFFECT */}
                <div className="bg-green-200 w-20 h-20 rounded-full blur-3xl"></div>
            </div>
            <div className="text-white flex flex-col items-center">
                <h1 className="ml-16 text-3xl photo-aboutMe">{t('titleAbout')}</h1>
                <div className=" ml-16 ">
                    <img className="photo-aboutMe bounce object-contain w-[200px] h-[200px]  rounded-full" src={photo} alt="Photo" />
                </div>
                <div className="w-full pl-16 mt-6 text-center">
                    <p className="text-aboutMe">
                        {t('textAbout')}
                    </p>
                </div>
                <a ref={CvEnRef} className="z-20 " href={currentLanguage === 'en' ? pdfCV : pdfCVEn} download>
                    <button ref={btnCvRef} className="cvButtonDefaultTheme z-20 flex gap-2 p-2 ml-16 mt-10 cvBtnSr">
                        Curriculum
                        <BsDownload size={20} />
                    </button>
                </a>
            </div>
        </>
    )
}
export default AboutMe;