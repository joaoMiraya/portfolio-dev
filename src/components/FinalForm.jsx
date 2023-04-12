import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';




function FinalForm({ btnFinalFormRef, t, currentLanguage }) {

    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_nd3n24s', 'template_5pc8p9n', form.current, 'YA3QtcOrU9FIvjHMo')
            .then((result) => {
                setEmail('')
                setNome('')
                setMensagem('')
            }, (error) => {
                alert("Ocorreu um erro")
            });

    };


    return (
        <div className="flex flex-col text-center justify-center items-center pl-16 formSr">
            <h1 className="text-white text-2xl my-10">{t('titleFinalForm')}</h1>

            <form ref={form} onSubmit={sendEmail} className="z-10">
                <div className="flex flex-col gap-2 ">
                    <input className="rounded-sm"
                        type="text"
                        name="nomeUser"
                        placeholder={currentLanguage === 'en' ? 'Seu nome' : 'Your name'}
                        value={nome} onChange={(e) => setNome(e.target.value)}
                        required
                    />
                
                    <input className="rounded-sm"
                        type="email"
                        name="emailUser"
                        placeholder={currentLanguage === 'en' ? 'Seu Email' : 'Your Email'}
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea className=" outline-none rounded-md pl-2"
                        name="messageUser"
                        id="messageUser"
                        cols="20" rows="5"
                        value={mensagem} onChange={(e) => setMensagem(e.target.value)}
                        placeholder={currentLanguage === 'en' ? 'Sua mensagem' : 'Your message'}
                        required
                    >
                    </textarea>
                </div>
                <button ref={btnFinalFormRef} type="submit" className="text-white flex p-1 w-full justify-center mt-6 bg-black cvButtonDefaultTheme">
                    {currentLanguage === 'en' ? 'ENVIAR' : 'SEND'}
                </button>
            </form>

        </div>
    )
}

export default FinalForm;