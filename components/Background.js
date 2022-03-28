import React from 'react';
import Matter from 'matter-js'
import { AppContext } from '../contexts/app-context';

export const Background = ({ size }) => {

    const [runWorld, setRunWorld] = React.useState(false)
    let Engine = Matter.Engine,
        Render = Matter.Render,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Body = Matter.Body,
        Composite = Matter.Composite,
        MouseConstraint = Matter.MouseConstraint,
        Events = Matter.Events,
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

        let topWall = Bodies.rectangle(size.width / 2, -30, size.width + 200, 50, options);
        let leftWall = Bodies.rectangle(-45, size.height / 2, 50, size.height, options);
        let rightWall = Bodies.rectangle(size.width + 45, size.height / 2, 50, size.height, options);
        let bottomWall = Bodies.rectangle(size.width / 2, size.height - 26, size.width + 200, 50, options);
        let bottomWallApp = Bodies.rectangle(size.width / 2, size.height - 45, size.width / 2, 50, options);


        World.add(engine.world, [topWall, leftWall, rightWall, bottomWall, bottomWallApp]);
        const getRandomArbitrary = (min, max) => {
            return Math.random() * (max - min) + min;
        }

        const boxs = []
        let num = 19

        // Collision groups
        const group1 = Body.nextGroup(true)
        const group2 = Body.nextGroup(true)
        const group3 = Body.nextGroup(true)

        const group = (i) => {
            if (i % 2 === 0) return group2
            else if (i % 3 === 0) return group3
            else return group1
        }

        for (let i = 0; i < num; i++) {
            boxs.push(Bodies.rectangle(getRandomArbitrary(0, size.width), 0, 38, 38, {
                frictionAir: 0.001,
                friction: 0.05,
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
            if (num / 2 >= i) {
                boxs.push(Bodies.rectangle(getRandomArbitrary(0, size.width), 0, 38, 38, { //getRandomArbitrary(0, size.height)
                    frictionAir: 0.001,
                    friction: 0.05,
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