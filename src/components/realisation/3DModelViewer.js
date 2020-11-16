import React, {useEffect, useState, useMemo} from "react";
import * as THREE from "three";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";


const loadModel = async (model) => {
    let gltfLoader = new GLTFLoader();
    return await gltfLoader.loadAsync(model);
}

/**
 * Reusable component to display 3D Model into web app (based on three.js)
 * @param widthSceneRenderer
 * @param heightSceneRenderer
 * @param zoom
 * @returns {*}
 * @constructor
 */

export const ModelViewer = ({widthSceneRenderer, heightSceneRenderer, zPosition, model}) => {
    const [scene, setScene] = useState(new THREE.Scene());
    const [renderer, setRenderer] = useState(new THREE.WebGLRenderer());
    const [camera, setCamera] = useState(new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000));

    // TODO : read => https://discoverthreejs.com/book/first-steps/load-models/#types-of-gltf-files

    /**
     * Assets loader
     */
    useEffect(  () => {
        camera.position.z = zPosition;
        renderer.setSize(widthSceneRenderer, heightSceneRenderer);
        renderer.setClearColor (0xff0000, 1);
        const controls = new OrbitControls( camera, renderer.domElement );
        controls.update();
        document.body.appendChild( renderer.domElement );

    }, []);









    /*
    if ( model ) {
        console.log(model);
        gltfLoader.load(model,(gltf ) => {
            let model = gltf.scene;
            scene.add(model);

            let mixer = new THREE.AnimationMixer( model );
            console.log(gltf.animations);
            let action = mixer.clipAction( gltf.animations[ 0 ] );
            console.log(action);
            //action.setLoop(THREE.LoopPingPong, 15);
            action.play();
            console.log(gltf)
            console.log(gltf.animations)
            console.log(action);


        },(xhr) => {
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },() => {

        })
    }*/


    let geometry = new THREE.BoxGeometry( 1, 1, 1 );
    let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    let cube = new THREE.Mesh( geometry, material );

    console.log("MODEL => ")
    loadModel(model);

    scene.add(cube);

    let animate = () => {
        //console.log(scene)
        requestAnimationFrame( animate );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;



        renderer.render( scene, camera );
    };
    animate();


    return (
        <div>
            <body></body>
        </div>
    )
}