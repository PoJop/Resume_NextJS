import React from 'react';
import Matter from 'matter-js'
// if (size === undefined) return
// if (!runWorld) {
//     // create renderer
//     var render = Render.create({
//         element: document.querySelector("#article"),
//         engine: engine,
//         options: {
//             width: size.width,
//             height: size.height,
//             background: 'linear-gradient(162.44deg, #ea916b 0%, rgba(195, 64, 217, 0.32) 100%)',
//             showAngleIndicator: false,
//             wireframes: false
//         }
//     });

//     // engine.gravity.y = 0;
//     Render.run(render);

//     // create runner
//     var runner = Runner.create();
//     Runner.run(runner, engine);
//     setRunWorld(true);

//     // add bodies
//     var offset = 10,
//         options = {
//             isStatic: true
//         };

//     world.bodies = [];

//     var box1 = Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 50.5, options)
//     var box2 = Bodies.rectangle(400, 600 + offset, 800.5 + 2 * offset, 50.5, options)
//     var box3 = Bodies.rectangle(800 + offset, 300, 50.5, 600.5 + 2 * offset, options)
//     var box4 = Bodies.rectangle(-offset, 300, 50.5, 600.5 + 2 * offset, options)
//     // these static walls will not be rendered in this sprites example, see options
//     Composite.add(world, [box1, box2, box3, box4]);
//     var stack = Composites.stack(20, 20, 10, 4, 0, 0, function (x, y) {
//         return Bodies.rectangle(x, y, 35, 35, {
//             render: {
//                 strokeStyle: '#ffffff',
//                 sprite: {
//                     texture: './ReactIco.png'
//                 }
//             }
//         });
//     });

//     Composite.add(world, stack);




//     // add mouse control
//     var mouse = Mouse.create(render.canvas),
//         mouseConstraint = MouseConstraint.create(engine, {
//             mouse: mouse,
//             constraint: {
//                 stiffness: 0.2,
//                 render: {
//                     visible: false
//                 }
//             }
//         });

//     Composite.add(world, mouseConstraint);

//     // keep the mouse in sync with rendering
//     render.mouse = mouse;

//     // fit the render viewport to the scene
//     Render.lookAt(render, {
//         min: { x: 0, y: 0 },
//         max: { x: 800, y: 600 }
//     });

//     setTimeout(() => {
//         Body.setVelocity(box1, { x: 10, y: -10 });
//     }, 1000)
//     // context for MatterTools.Demo
//     return {
//         engine: engine,
//         runner: runner,
//         render: render,
//         canvas: render.canvas,
//         stop: function () {
//             Matter.Render.stop(render);
//             Matter.Runner.stop(runner);
//         }
//     };
// }

export const Background = ({ size, navRef }) => {

    const [runWorld, setRunWorld] = React.useState(false)
    React.useEffect(() => {
        console.log(navRef)
    }, [navRef])
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
            // console.log(alpha, beta, gamma)

            engine.gravity.x = GravityOrientation(gamma);
            engine.gravity.y = GravityOrientation(beta);
        }
        const GravityOrientation = (e) => {
            let g = 0
            if (e >= -10) { //|| e >= -170 || e <= 170 || e <= 10
                g = e / 1000
                console.log(e, "1")
            } else {
                g = e / 100
                console.log(e, "2")
            }
            console.log(g)
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
        let boxs = [];
        let whiteBoxs = [];
        World.add(engine.world, [topWall, leftWall, rightWall, bottomWall]);
        const getRandomArbitrary = (min, max) => {
            return Math.random() * (max - min) + min;
        }
        let num = 15
        for (let i = 0; i < num; i++) {
            boxs.push(Bodies.rectangle(getRandomArbitrary(0, size.width), getRandomArbitrary(0, size.height), 37, 37, {
                frictionAir: 0,
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
            // e.collisionFilter = {
            //     'group': 1,
            //     'category': 2,
            // }
            // rightWall.collisionFilter = {
            //     'group': 1,
            //     'mask': 2,
            // }
        })
        whiteBoxs.forEach(e => {
            World.add(engine.world, e)
            Body.setVelocity(e, { x: getRandomArbitrary(-2, 2), y: getRandomArbitrary(-2, 2) });
        })
        Render.run(render);
        Engine.run(engine);

        console.log(boxs)

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