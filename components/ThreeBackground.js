import gsap from 'gsap';
import React from 'react';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
export const ThreeBackground = () => {

    React.useEffect(() => {

        const gltfLoader = new GLTFLoader()

        // Canvas
        const canvas = document.querySelector('canvas.webgl')

        // Scene
        const scene = new THREE.Scene()

        // Lights
        let tl = gsap.timeline()
        const pointLight = new THREE.PointLight(0xffffff, 1)
        pointLight.position.x = 1
        pointLight.position.y = 1
        pointLight.position.z = 1
        scene.add(pointLight)
        gltfLoader.load('untitled.gltf', (gltf) => {
            // gltf.scene.scale.set(0.3, 0.3, 0.3)
            // gltf.scene.rotation.set(0, 3.3, 0)
            scene.add(gltf.scene)
            // tl.to(gltf.scene.rotation, { y: 0, duration: 1 })
            const cameraOffset = camera.position.z;
            tl.to(gltf.scene.scale, { x: 1 , y: 1, z: 1, duration: 1 })
            const box = new THREE.Box3();
            console.log(scene.children[0].dispose())
            
        })


        /**
         * Sizes
         */
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        window.addEventListener('resize', () => {
            // Update sizes
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight

            // Update camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            // Update renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })

        /**
         * Camera
         */
        // Base camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
        camera.position.x = 0
        camera.position.y = 0
        camera.position.z = 3
        scene.add(camera)

        // Controls
        // const controls = new OrbitControls(camera, canvas)
        // controls.enableDamping = true

        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
        })
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        /**
         * Animate
         */

        const clock = new THREE.Clock()

        const tick = () => {

            const elapsedTime = clock.getElapsedTime()

            // Update objects
            // sphere.rotation.y = .5 * elapsedTime

            // Update Orbital Controls
            // controls.update()

            // Render
            renderer.render(scene, camera)

            // Call tick again on the next frame
            window.requestAnimationFrame(tick)
        }

        tick()
    }, [])
    const canvasRef = React.useRef(null)
    React.useEffect(() => {
        let g = canvasRef.current.getContext("webgl2")
        var binding = g.getIndexedParameter(g.UNIFORM_BUFFER_BINDING, 0);
        console.log(binding)
    },[canvasRef])
    return (
        <>
            <canvas ref={canvasRef} className="webgl" ></canvas>

        </>
    )
}