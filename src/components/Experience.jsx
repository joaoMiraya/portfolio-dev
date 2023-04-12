import React from "react";

import { FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

import Teste from "./Teste";


function Experience({ t }) {


    return (
        <div className="flex flex-col pb-20 mt-10 text-center ml-16">
            <h1 className="text-white text-2xl font-semibold my-6 ">{t('titleExperience')}</h1>
            <div className="flex justify-center flex-wrap gap-4 relative">

                <div className="bounce load-hidden  js text-white min-w-[120px] bg-transparent flex flex-col items-center p-2 gap-2 border-[1px] border-yellow-200 rounded-md shadow-js">
                    <h1>JavaScript</h1>
                    <SiJavascript size={40} className="text-yellow-600 " />
                </div>
                <div className="bounce load-hidden  rct text-white min-w-[120px] bg-transparent flex flex-col items-center p-2 gap-2 border-[1px] border-blue-200 rounded-md shadow-react">
                    <h1>ReactJS</h1>
                    <FaReact size={40} className="text-blue-500 " />
                </div>
                <div className="bounce load-hidden  node text-white min-w-[120px] bg-transparent flex flex-col items-center p-2 gap-2 border-[1px] border-green-200 rounded-md shadow-node">
                    <h1>NodeJS</h1>
                    <FaNodeJs size={40} className="text-[#68A063] " />
                </div>
                <div className="bounce load-hidden  twld text-white min-w-[120px] bg-transparent flex flex-col items-center p-2 gap-2 border-[1px] border-blue-200 rounded-md shadow-tailwind">
                    <h1>TailWind</h1>
                    <SiTailwindcss size={40} className="text-blue-500 " />
                </div>
                <div className="bounce load-hidden  sql text-white min-w-[120px] bg-transparent flex flex-col items-center p-2 gap-2 border-[1px] border-blue-200 rounded-md shadow-sql">
                    <h1>MySQL</h1>
                    <GrMysql size={40} className="text-blue-500 " />
                </div>
                <div className="bounce load-hidden  dckr text-white min-w-[120px] bg-transparent flex flex-col items-center p-2 gap-2 border-[1px] border-blue-200 rounded-md shadow-docker">
                    <h1>Docker</h1>
                    <FaDocker size={40} className="text-blue-500 " />
                </div>

                <div className="p-4 text-sr">
                    <p className="text-white">
                        {t('textExperience')}
                    </p>
                </div>

                <div className="flex w-full justify-end animate-pulse	"> {/* BLUR EFFECT */}
                    <div className="bg-green-200 w-20 h-20 rounded-full blur-3xl absolute top-1/2"></div>
                </div>

            </div>


        </div>

    )
}
export default Experience;