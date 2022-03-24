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

            return g
        }

        // setTimeout(() => {
        //     engine.gravity.y = 0;
        // }, 5000)
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


        let topWall = Bodies.rectangle(size.width / 2, -20, size.width + (size.width / 3) * 2, 20, options);
        let leftWall = Bodies.rectangle(-45, size.height / 2, 20, size.height, options);
        let rightWall = Bodies.rectangle(size.width + 45, size.height / 2, 20, size.height, options);
        let bottomWall = Bodies.rectangle(size.width / 2, size.height - 60, size.width, 20, options);

        // setTimeout(() => {
        //     Body.setVelocity(topWall, { x: 0, y: getRandomArbitrary(0, 6) });
        //     Body.setVelocity(bottomWall, { x: 0, y: getRandomArbitrary(-6, 0) });
        //     Body.setVelocity(rightWall, { x: getRandomArbitrary(-6, 0), y: 0 });
        //     Body.setVelocity(leftWall, { x: getRandomArbitrary(0, 6), y: 0 });
        // }, 1000)

        let boxs = [],
            whiteBoxs = [];

        World.add(engine.world, [topWall, leftWall, rightWall, bottomWall]);
        const getRandomArbitrary = (min, max) => {
            return Math.random() * (max - min) + min;
        }

        let num = 15

        for (let i = 0; i < num; i++) {
            boxs.push(Bodies.rectangle(getRandomArbitrary(0, size.width), getRandomArbitrary(0, size.height), 37, 37, {
                frictionAir: 0,
                friction: 0.05,
                render: {
                    strokeStyle: '#ffffff',
                    sprite: {
                        texture: `./temp/${i + 1}.png`,
                        filter: "drop-shadow(0px 14px 4px rgba(0, 0, 0, 1))"
                    }
                }
            }))
            if (num / 2 < i) {
                whiteBoxs.push(Bodies.rectangle(getRandomArbitrary(0, size.width), getRandomArbitrary(0, size.height), 35, 35, {
                    frictionAir: 0,
                    friction: 0.05,
                    render: {
                        strokeStyle: '#ffffff',
                        sprite: {
                            texture: `./temp/White.png`
                        }
                    }
                }))
            }
        }

        boxs.forEach(e => {
            World.add(engine.world, e)
            Body.setVelocity(e, { x: getRandomArbitrary(-2, 2), y: getRandomArbitrary(-2, 2) });
        })
        whiteBoxs.forEach(e => {
            World.add(engine.world, e)
            Body.setVelocity(e, { x: getRandomArbitrary(-2, 2), y: getRandomArbitrary(-2, 2) });
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

    React.useEffect(() => {

    }, [])

    return (
        <>
            <article id="article" />
        </>
    )
}