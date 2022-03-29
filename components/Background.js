import React from 'react';
import Matter from 'matter-js'
import { AppContext } from '../contexts/app-context';

export const Background = ({ size }) => {

    const [runWorld, setRunWorld] = React.useState(false)
    const [context, setContext] = React.useContext(AppContext);

    let Engine = Matter.Engine,
        Render = Matter.Render,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Body = Matter.Body,
        Composite = Matter.Composite,
        MouseConstraint = Matter.MouseConstraint,
        Events = Matter.Events,
        Vertices = Matter.Vertices,
        Svg = Matter.Svg,
        Mouse = Matter.Mouse;

    let engine = Engine.create();

    const handleOrientation = (event) => {
        const beta = event.beta;
        const gamma = event.gamma;
        engine.gravity.x = GravityRatio(gamma);
        engine.gravity.y = GravityRatio(beta);
    }


    const handleGravity = (value = true) => {
        engine.gravity.x = 0;
        engine.gravity.y = value ? 1 : 0;
    }

    const GravityRatio = (e) => {
        let g = 0
        let Negative = e < 0
        let coefficient = Negative ? -10000 : 10000

        g = e / Math.round(coefficient / e)

        if (!Negative && g > 1) return 1
        if (Negative && g < -1) return -1

        return g
    }

    React.useEffect(() => {
        if (size === undefined) return
        if (runWorld) return

        const ORIENTATION_ELEMENT = document.querySelector(".orientation")
        const GRAVITY_ELEMENT = document.querySelector(".gravity")

        GRAVITY_ELEMENT.addEventListener('click', (e) => {
            let valueGravity = Boolean(Number(GRAVITY_ELEMENT.getAttribute("active")))
            handleGravity(!valueGravity)
        });


        ORIENTATION_ELEMENT.addEventListener('click', (e) => {
            let valueOrientation = Boolean(Number(ORIENTATION_ELEMENT.getAttribute("active")))

            const checkedOrientation = () => {
                if (typeof DeviceOrientationEvent.requestPermission === 'function') {
                    DeviceOrientationEvent.requestPermission()
                        .then((state) => {
                            if (state === 'granted') {
                                window.addEventListener('deviceorientation', handleOrientation);
                            } else {
                                console.error('Request to access the orientation was rejected');
                            }
                        })
                        .catch(console.error);
                } else {
                    window.addEventListener('deviceorientation', handleOrientation);
                    console.log('Handle regular non iOS 13+ devices.')
                }
            }

            if (valueOrientation) {
                window.removeEventListener('deviceorientation', handleOrientation)
                handleGravity()
            } else {
                checkedOrientation()
            }
        });

        let render = Render.create({
            element: document.querySelector("#article"),
            engine: engine,
            options: {
                width: size.width,
                height: size.height,
                fillStyle: 'transparent',
                background: 'transparent',
                wireframes: false
            }
        });

        const options = {
            isStatic: true,
            render: {
                background: "transparent",
                fillStyle: 'transparent',
            }
        }

        let topWall = Bodies.rectangle(size.width / 2, -30, size.width + 200, 50, {
            ...options,
            label: "topWall"
        });
        let leftWall = Bodies.rectangle(-45, size.height / 2, 50, size.height, {
            ...options,
            label: "leftWall"
        });
        let rightWall = Bodies.rectangle(size.width + 45, size.height / 2, 50, size.height, {
            ...options,
            label: "rightWall"
        });
        // let bottomWall = Bodies.rectangle(size.width / 2, size.height - 26, size.width + 200, 50, {
        //     ...options,
        //     label: "bottomWall"
        // });
        // let bottomWallApp = Bodies.rectangle(size.width / 2, size.height - 45, size.width / 2, 50, {
        //     ...options,
        //     label: "bottomWallApp"
        // });
        const steap = size.width / 18 + 30
        var star = Vertices.fromPath(`
        0 120 
        -${steap * 0} -2
        -${steap * 1} -3
        -${steap * 2} -4
        -${steap * 3} -5
        -${steap * 4} -8
        -${steap * 5} -15
        -${steap * 6} -26
        -${steap * 7} -37
        -${steap * 8} -38
        -${steap * 9} -38
        -${steap * 10} -37
        -${steap * 11} -26
        -${steap * 12} -15
        -${steap * 13} -8
        -${steap * 14} -5
        -${steap * 15} -4
        -${steap * 16} -3
        -${steap * 17} -2
        -${steap * 18} 120
        
        `),
            bottomWall = Bodies.fromVertices(size.width / 2, size.height + 20, star, {
                ...options,
                label: "bottomWall",
            });


        World.add(engine.world, [topWall, leftWall, rightWall, bottomWall]);

        const getRandomArbitrary = (min, max) => { return Math.random() * (max - min) + min }

        const boxs = []
        const NUMBER_OF_SPRITE_BLOCKS = 19

        // Collision groups
        const group1 = Body.nextGroup(true)
        const group2 = Body.nextGroup(true)
        const group3 = Body.nextGroup(true)

        const group = (i) => {
            if (i % 2 === 0) return group2
            else if (i % 3 === 0) return group3
            else return group1
        }

        for (let i = 0; i < NUMBER_OF_SPRITE_BLOCKS; i++) {
            boxs.push(Bodies.rectangle(getRandomArbitrary(0, size.width), 0, 38, 38, {
                frictionAir: 0.001,
                friction: 0.1,
                collisionFilter: { group: group(i) },
                render: {
                    strokeStyle: '#ffffff',
                    fillStyle: "transparent",
                    sprite: {
                        texture: `./temp/${i + 1}.png`,
                        filter: "drop-shadow(0px 14px 4px rgba(0, 0, 0, 1))"
                    }
                }
            }))
            if (NUMBER_OF_SPRITE_BLOCKS / 2 >= i) {
                boxs.push(Bodies.rectangle(getRandomArbitrary(0, size.width), 0, 38, 38, { //getRandomArbitrary(0, size.height)
                    frictionAir: 0.001,
                    friction: 0.1,
                    collisionFilter: { group: group(i) },
                    render: {
                        strokeStyle: '#ffffff',
                        fillStyle: "transparent",
                        shadowBlur: 20,
                        opacity: 0.7,
                        backdropFilte: 'blur(4px)',
                        sprite: {
                            texture: `./temp/White.png`
                        }
                    }
                }))
            }
        }
        const OPEN_NAV_MENU = document.querySelector(".nav__button")
        const SETTING_POPUP = document.querySelector("#setting_popup")

        OPEN_NAV_MENU.addEventListener('click', (e) => {
            let value = Boolean(Number(OPEN_NAV_MENU.getAttribute("active")))
            handleBottom(value)
        });

        SETTING_POPUP.addEventListener('click', () => {
            let value = Boolean(Number(OPEN_NAV_MENU.getAttribute("active")))
            value && handleBottom(true)
        })

        const handleBottom = (value) => {
            const POSITION = 126
            let time = !value ? 300 : 0
            setTimeout(() => {
                Body.translate(bottomWall, { x: 0, y: !value ? -POSITION : POSITION });
            }, time)
            boxs.forEach(e => {
                if (window.innerHeight - 190 < e.position.y) {
                    Body.setVelocity(e, { x: getRandomArbitrary(-3, 3), y: getRandomArbitrary(-15, -10) })
                }
            })
        }
        const ctx = document.querySelector('canvas').getContext('2d', { antialias: false });
        ctx.shadowOffsetX = 4;
        ctx.shadowOffsetY = 4;
        ctx.shadowBlur = 4;
        ctx.shadowColor = "rgba(0, 0, 0, 0.25)";

        boxs.forEach(e => World.add(engine.world, e))
        Render.run(render);
        Engine.run(engine);


        let mouse = Mouse.create(render.canvas),
            mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false
                    }
                }
            });

        Composite.add(engine.world, mouseConstraint);
        render.mouse = mouse;
        setRunWorld(true)

    }, [runWorld, size])


    return <article id="article" />
}