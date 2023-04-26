import React from "react";

import certificadoAluraDesen from '/images/certificadoAluraDesen.png';
import certificadoAluraFoco from '/images/certificadoAluraFoco.png';
import certificadoAluraGit from '/images/certificadoAluraGit.png';
import certificadoAluraJS from '/images/certificadoAluraJS.png';
import certificadoAluraProg from '/images/certificadoAluraProg.png';
import certificadoDH from '/images/certificadoDH.jpg';

function Courses({ t }) {

    const certificates = [
        {
            id: "certificadoAluraDH",
            title: t('titleDH'),
            image: certificadoDH,
            description: t('descriptionDH')
        },
        {
            id: "certificadoAluraDesen",
            title: t('titleAluraD'),
            image: certificadoAluraDesen,
            description: t('descriptionAluraD')
        },
        {
            id: "certificadoAluraFoco",
            title: t('titleAluraFocus'),
            image: certificadoAluraFoco,
            description: t('descriptionAluraFocus')
        },
        {
            id: "certificadoAluraGit",
            title: t('titleAluraGit'),
            image: certificadoAluraGit,
            description: t('descriptionAluraGit')
        },
        {
            id: "certificadoAluraJS",
            title: t('titleAluraJS'),
            image: certificadoAluraJS,
            description: t('descriptionAluraJS')
        },
        {
            id: 'certificadoAluraProg',
            title: t('titleAluraProg'),
            image: certificadoAluraProg,
            description: t('descriptionAluraProg')
        }
    ];

    return (
        <div className="flex flex-col ml-16 items-center">

            <h1 className="text-3xl text-white my-6">{t('titleCourses')}</h1>
            {certificates.map((certificate) => {
                return (
                    <div key={certificate.id} className="flex flex-col items-center text-center px-2 mb-6 text-courses">
                        <h1 className="text-xl text-white">{certificate.title}</h1>
                        <div className="bg-white h-[150px] w-[200px] rounded-lg mb-4 relative ">
                            <img src={certificate.image} className=" rounded-lg object-fill w-full h-full hover:scale-150 transition" alt={certificate.title} />
                        </div>
                        <p className="text-white z-20 text-sm">{t(certificate.description)}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Courses;