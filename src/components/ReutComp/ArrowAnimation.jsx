import React from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import ArrowAnimate from '../../assets/animations/91158-scroll-down-arrows.json';


function ArrowAnimation() {
    return (
        <>
   <Player
        autoplay
        loop
        src={ArrowAnimate}
        controls={false}
        style={{ height: '100px', width: '300px' }}
      >
        <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>

        </>

    )
}

export default ArrowAnimation;