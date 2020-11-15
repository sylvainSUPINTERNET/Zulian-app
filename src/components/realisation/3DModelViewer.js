import React, {useEffect, useState, useMemo} from "react";
import * as THREE from "three";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

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

    /**
     * Assets loader
     */
    const [gltfLoader, setGltfLoader] = useState(new GLTFLoader());

    useEffect(  () => {
        camera.position.z = zPosition;
        renderer.setSize(widthSceneRenderer, heightSceneRenderer);
        renderer.setClearColor (0xff0000, 1);
        const controls = new OrbitControls( camera, renderer.domElement );
        controls.update();
        document.body.appendChild( renderer.domElement );
    }, []);


    if ( model ) {
        console.log(model);
        gltfLoader.load(model,(gltf ) => {
            scene.add( gltf.scene );
            console.log(gltf)
            console.log(gltf.animations)
            console.log(...gltf)

        },(xhr) => {
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },() => {

        })
    }


    let geometry = new THREE.BoxGeometry( 1, 1, 1 );
    let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    let cube = new THREE.Mesh( geometry, material );
    scene.add(cube);
    let animate = function () {
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