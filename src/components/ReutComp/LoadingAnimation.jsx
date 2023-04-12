import React from "react";

import { Player, Controls } from '@lottiefiles/react-lottie-player';
import LoadingAnimate from '../../assets/animations/99844-loading.json';

function LoadingAnimation() {
    return (
        <div className="flex h-screen justify-center items-center bg-black">
                <Player
                autoplay
                loop
                src={LoadingAnimate}
                controls={false}
                style={{ height: '300px', width: '300px' }}
                           >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
        </div>
    )
}

export default LoadingAnimation;