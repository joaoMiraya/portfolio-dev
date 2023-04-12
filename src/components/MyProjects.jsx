import React from "react";
import deliveryPhoto from '../../public/images/deliveryPhoto.png';

function MyProjects({t}) {
    return (

        <div className="flex flex-col w-full text-center pl-16 projectSr">
            <h1 className="text-3xl text-white my-6 ">{t('titleProjects')}</h1>
            <div className="flex justify-around">
                <div className=" bg-gray-300 w-36 rounded-md flex flex-col items-center ">
                    <span className="w-2 h-2 rounded-full bg-black my-2"></span>
                    <div className=" w-[95%] h-[100%] flex flex-col justify-center ">
                        <img src={deliveryPhoto} className=" object-fill h-[200px] " alt="" />
                    </div>
                    <span className="w-8 h-4 border-[1px] border-black my-2 rounded-md"></span>
                </div>

                <div className=" bg-gray-300 w-36 rounded-md flex flex-col items-center ">
                    <span className="w-2 h-2 rounded-full bg-black my-2"></span>
                    <div className="bg-black w-[95%] h-[100%] flex flex-col justify-center ">
                        <h1 className="bg-orange-500 text-white animate-pulse">{t('titlePhoneProjects')}</h1>
                    </div>
                    <span className="w-8 h-4 border-[1px] border-black my-2 rounded-md"></span>
                </div>
            </div>
            <div>
                <h1 className="text-white text-xl my-4">{t('title2Projects')}</h1>
            </div>
        </div>
    )
}

export default MyProjects;