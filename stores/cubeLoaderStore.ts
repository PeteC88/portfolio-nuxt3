import { defineStore } from 'pinia';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from "gsap"

export const useCubeLoaderStore = defineStore('cubeLoader', () => {
    const isCubeLoaded = ref(false);
    
    const cubeLoaderAction = (isCubeLoaded:boolean)=> {
        //The variables has been created here because of a bug when ThreeJs is on Vue3

        //get the canvas
        //used as HTMLElement to avoid the possibly null check on canvasContainer.offsetWidth and canvasContainer.offsetHeight
        let canvasContainer = document.querySelector('.canvas-container') as HTMLElement;
        //Create the scene
        const scene = new THREE.Scene();

        //create the cube with the dimension of 8 x 8 x 8
        const geometry = new THREE.BoxGeometry(8, 8, 8);

        //to load the image of the cube
        let loader = new THREE.TextureLoader();

        //set the images for each side of the cube
        const materials = [
            new THREE.MeshBasicMaterial({ map: loader.load('/imgs/logos/javascript.jpg') }),  // Right side
            new THREE.MeshBasicMaterial({ map: loader.load('/imgs/logos/html5.jpg')}), // Left side
            new THREE.MeshBasicMaterial({ map: loader.load('/imgs/logos/nuxt.jpg') }), // Top side
            new THREE.MeshBasicMaterial({ map: loader.load('/imgs/logos/sass.jpg')}), // Bottom side
            new THREE.MeshBasicMaterial({ map: loader.load('/imgs/logos/css3.jpg') }), // Front side
            new THREE.MeshBasicMaterial({ map: loader.load('/imgs/logos/vue.jpg') })  // Back side
        ];
        


        //Mesh the form -> how it appears
        const mesh = new THREE.Mesh(geometry, materials)

        //add mesh to the scene
        scene.add(mesh)

        //Set the sizes
        const sizes = {
            width: canvasContainer.offsetWidth,
            height: canvasContainer.offsetHeight,
        }

        //set the light
        const light = new THREE.PointLight(0xffffffff, 1, 100);
        light.position.set(0, 10, 10); //parameters x y z position (z is the zoom)
        light.intensity = 1.25;

        //add light to the scene 
        scene.add(light)

        //set the camera perspective
        //45 is the wide
        //second parameter is the aspect ratio
        // 0.1 and 100 are the min and max clipping point
        const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);

        //set camera position
        camera.position.z = 20;

        //add the camera to the scene
        scene.add(camera);

        //Render the form
        const canvas = document.querySelector('.canvas') as HTMLElement;

        //render the form set transparent background inside it with alpha: true
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true })

        //set background color, second parameter is the opacity
        renderer.setClearColor(0xffffff, 0)

        //size of the render
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(2) // to give more definition to the form, default is 1.

        //set renderer to the scene

        renderer.render(scene, camera);



        const controls = new OrbitControls(camera, canvas)
        controls.enableDamping = true; //it makes the animation smoother.
        controls.enablePan = false  // it avoid the form to be moved with a right click
        controls.enableZoom = false
        controls.autoRotate = true;
        controls.autoRotateSpeed = 5  //default is 2



        //resize when resize window
        window.addEventListener("resize", () => {
            //update sizes
            sizes.width = canvasContainer.offsetWidth;
            sizes.height = canvasContainer.offsetHeight;

            //update camera
            // camera aspect and renderer.setSize must be updated together
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();
            //renderer.setSize draw the canvas again
            renderer.setSize(sizes.width, sizes.height)
        })

        //to rerender the canvas on resize
        const loop = () => {

            //for the animation
            // mesh.rotation.x += 0.2;
            controls.update()
            renderer.render(scene, camera);
            window.requestAnimationFrame(loop)
        }

        loop();


        //animation zoom in scale
        const tl = gsap.timeline({ defaults: { duration: 1, delay: 0.3 } })
        tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 })

        //commit('cubeLoaderMutation', true);
    }

    return { isCubeLoaded, cubeLoaderAction}
})