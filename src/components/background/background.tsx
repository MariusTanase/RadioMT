import React, { useEffect, useRef } from 'react'
import './background.css';
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";
// @ts-ignore: 'generateImage' is declared but its value is never read.
import { generateImage } from '@/utils/unsplashBackgroundGeneration'

const Background = () => {

    const background = useRef(null);

    useEffect(() => {
        generateImage('mountains');
    }, [])

    const particlesInit = async (main: any) => {
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    return (
        <div ref={background} className='background'>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                                "enable": false,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#fff"
                        },
                        "shape": {
                            "type": "star",
                        },
                        "opacity": {
                            "value": 0.8,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 4,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "rotate": {
                            "value": 0,
                            "random": true,
                            "direction": "clockwise",
                            "animation": {
                                "enable": true,
                                "speed": 5,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": false,
                            "distance": 600,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 2
                        },
                        "move": {
                            "enable": true,
                            "speed": 2,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "retina_detect": true,
                    "background": {
                        "image": "",
                        "position": "50% 50%",
                        "repeat": "no-repeat",
                        "size": "cover"
                    }
                }}
            />
        </div>
    )
}

export default Background