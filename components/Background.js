import React from 'react';
import Matter from 'matter-js'

export const Background = ({ size, navRef }) => {

    const [runWorld, setRunWorld] = React.useState(false)

    React.useEffect(() => {
        if (size === undefined) return
        if (runWorld) return
        let Engine = Matter.Engine,
            Render = Matter.Render,
            World = Matter.World,
            Bodies = Matter.Bodies,
            Body = Matter.Body,
            Composite = Matter.Composite,
            MouseConstraint = Matter.MouseConstraint,
            Mouse = Matter.Mouse;

        let engine = Engine.create();

        window.addEventListener('deviceorientation', handleOrientation);

        function handleOrientation(event) {
            const alpha = event.alpha;
            const beta = event.beta;
            const gamma = event.gamma;
            engine.gravity.x = GravityOrientation(gamma);
            engine.gravity.y = GravityOrientation(beta);
        }

        const GravityOrientation = (e) => {
            let g = 0

            if (e <= 0 && e >= -15 || e >= 0 && e <= 15) {
                g = e / 1000
            } else if (e <= 0 && e >= -45 || e >= 0 && e <= 45) {
                g = e / 100
            } else g = e / 50

            if (g >= 0 && g > 1) return 1
            if (g <= 0 && g < -1) return -1

            return g
        }
        let render = Render.create({
            element: document.querySelector("#article"),
            engine: engine,
            options: {
                width: size.width,
                height: size.height,
                fillStyle: 'transparent',
                background: ' linear-gradient(162.44deg, #ea916b 0%, rgba(195, 64, 217, 0.32) 100%)',
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

        // setTimeout(() => {
        //     Body.setVelocity(topWall, { x: 0, y: getRandomArbitrary(0, 6) });
        //     Body.setVelocity(bottomWall, { x: 0, y: getRandomArbitrary(-6, 0) });
        //     Body.setVelocity(rightWall, { x: getRandomArbitrary(-6, 0), y: 0 });
        //     Body.setVelocity(leftWall, { x: getRandomArbitrary(0, 6), y: 0 });
        // }, 1000)

        let boxs = []

        World.add(engine.world, [topWall, leftWall, rightWall, bottomWall, bottomWallApp]);
        const getRandomArbitrary = (min, max) => {
            return Math.random() * (max - min) + min;
        }
        let num = 19

        var group1 = Body.nextGroup(true)
        var group2 = Body.nextGroup(true)
        var group3 = Body.nextGroup(true)
        var group4 = Body.nextGroup(true)

        const group = (i) => {
            let g = getRandomArbitrary(0, 4)
            if (i % 2 === 0) {
                return group2
            } 
            else if (i % 3 === 0) {
                return group3
            } 
            else {
                return group1
            }
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

        var ctx = document.querySelector('canvas').getContext('2d', { antialias: false });
        ctx.shadowOffsetX = 4;
        ctx.shadowOffsetY = 4;
        ctx.shadowBlur = 4;
        ctx.shadowColor = "rgba(0, 0, 0, 0.25)";


        boxs.forEach(e => {
            World.add(engine.world, e)
            // Body.setVelocity(e, { x: getRandomArbitrary(-2, 2), y: getRandomArbitrary(-2, 2) })
        })

        Render.run(render);
        Engine.run(engine);


        var mouse = Mouse.create(render.canvas),
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


    return (
        <>
            <article id="article" />
        </>
    )
}