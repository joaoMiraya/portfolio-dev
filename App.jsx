import React, { useEffect, useRef, useState } from 'react';
import './src/App.css';
import Home from './src/components/Home';
import Experience from './src/components/Experience';
import Header from './src/components/patterns/Header';
import AboutMe from './src/components/AboutMe';
import MyProjects from './src/components/MyProjects';
import FinalForm from './src/components/FinalForm';
import Footer from './src/components/patterns/Footer';
import pdfCV from './assets/assets/images/Curriculum.pdf';
import pdfCVEn from './assets/assets/images/CurriculumEN.pdf'

import ScrollReveal from 'scrollreveal';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

function App() {

  /* I18N TRANSLATE */
  const { t, i18n: { changeLanguage, language } } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en'
    changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage)
  }
  /* I18N TRANSLATE END*/

  /* SECTION SCROLL CONTROLL */
  const sectionHomeRef = useRef();
  const sectionTechRef = useRef();
  const sectionProjectRef = useRef();
  const textRef = useRef();
  const btnFinalFormRef = useRef();

  function handleBackToHome() {
    const homeSectionPosition = sectionHomeRef.current.offsetTop;
    window.scrollTo({ top: homeSectionPosition, behavior: 'smooth' });
  };
  function handleBackToTech() {
    const techSectionPosition = sectionTechRef.current.offsetTop;
    window.scrollTo({ top: techSectionPosition, behavior: 'smooth' });
  };
  function handleBackToProjects() {
    const projectSectionPosition = sectionProjectRef.current.offsetTop;
    window.scrollTo({ top: projectSectionPosition, behavior: 'smooth' });
  };
  /* SECTION SCROLL CONTROLL END*/

  /*   SCROLL REVEAL */
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal('.photo-sr', {
      delay: 500,
      reset: true
    });
    sr.reveal('.arrow-animate', {
      delay: 5000,
      reset: true
    });
    sr.reveal('.js', {
      delay: 500,
      reset: true
    });
    sr.reveal('.rct', {
      delay: 1000,
      reset: true
    });
    sr.reveal('.projectSr', {
      delay: 1000,
      reset: true
    });
    sr.reveal('.formSr', {
      delay: 1000,
      reset: true
    });
    sr.reveal('.cvBtnSr', {
      delay: 1000,
      reset: true
    });
    sr.reveal('.node', {
      delay: 1500,
      reset: true,
      rotate: { x: 50, y: 100, z: 80 }
    });
    sr.reveal('.twld', {
      delay: 2000,
      reset: true,
      rotate: { x: 100, y: 50, z: 80 }
    });
    sr.reveal('.sql', {
      delay: 2500,
      reset: true,
      rotate: { x: 50, y: 100, z: 80 }
    });
    sr.reveal('.dckr', {
      delay: 3000,
      reset: true,
      rotate: { x: 100, y: 50, z: 80 }
    });
    sr.reveal('.text-sr', {
      delay: 3000,
      reset: true,
      rotate: { x: 100, y: 0, z: 0 }
    });
    sr.reveal('.text-aboutMe', {
      delay: 800,
      reset: true,
      rotate: { x: 100, y: 0, z: 0 }
    });
    sr.reveal('.photo-aboutMe', {
      delay: 500,
      reset: true,
      rotate: { x: 100, y: 0, z: 0 }
    });


  }, [])
  /* FIM  SCROLL REVEAL */

  const btnCvRef = useRef();

  return (
    <>
      <Header
        handleBackToTech={handleBackToTech}
        handleBackToHome={handleBackToHome}
        handleBackToProjects={handleBackToProjects}
        btnCvRef={btnCvRef}
        btnFinalFormRef={btnFinalFormRef}
        handleChangeLanguage={handleChangeLanguage}
        currentLanguage={currentLanguage}
      />

      <section ref={sectionHomeRef}>
        <Home
          textRef={textRef}
          t={t}
        />

      </section>

      <section ref={sectionTechRef}>
        <Experience t={t} />
      </section>

      <section ref={sectionProjectRef}>
        <MyProjects t={t} />
      </section>

      <section>
        <AboutMe
          pdfCV={pdfCV}
          pdfCVEn={pdfCVEn}
          btnCvRef={btnCvRef}
          t={t}
          currentLanguage={currentLanguage}
        />

      </section>

      <section>
        <FinalForm
          btnFinalFormRef={btnFinalFormRef}
          t={t}
          currentLanguage={currentLanguage}
        />
      </section>

      <Footer t={t} />

    </>
  )
}

export default App
