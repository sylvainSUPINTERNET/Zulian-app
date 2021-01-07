import React, {useEffect} from 'react'
import Menu from "../Menu";
import * as THREE from "three";


export const Search = (props) => {

    useEffect( () => {
        // === THREE.JS CODE START ===
        const ambiantLight = new THREE.AmbientLight( 0xff0000, 5 );
        const light = new THREE.PointLight( 0xff0000, 20, 100 );
        light.position.set( 1, 1, 1);


        let scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
        let geometry = new THREE.BoxGeometry( 1, 1, 1 );
        let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        let cube = new THREE.Mesh( geometry, material );

        //scene.add( cube );
        scene.add( light );
        scene.add( ambiantLight );

        camera.position.z = 5;
        const animate = function () {
          requestAnimationFrame( animate );
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
          console.log(light);
          renderer.render( scene, camera );
        };
        animate();
        console.log("ANIMATION")
        }, []);
    return (

        <div className="">
            <header className="">
                <Menu></Menu>
            </header>
     
        </div>

    )
}

