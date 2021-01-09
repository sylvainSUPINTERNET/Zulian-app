import React, {useEffect, useRef} from 'react'
import Menu from "../Menu";
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import { Interaction } from 'three.interaction';


export const Search = (props) => {
    const isMounted = useRef(false);

    // Rendre cliquable les elements 
    const canvasContainer = useRef(null);

    const [scene, setScene] = React.useState(null);
    const [camera, setCamera] = React.useState(null);
    const [renderer, setRenderer]  = React.useState(new THREE.WebGLRenderer());

    useEffect( () => {

        if (isMounted.current) {
                console.log('fetching');
          } else {
                isMounted.current = true;
                setScene(new THREE.Scene());
                setCamera(new THREE.PerspectiveCamera(
                    75,
                    window.innerWidth/window.innerHeight,
                    0.1,
                    1000
                ));

                renderer.setSize(window.innerWidth, window.innerHeight);
                canvasContainer.current.appendChild( renderer.domElement );

        }

        animate();

    }, []);

    const animate = function () {
        console.log("animate");
        console.log(scene);
        requestAnimationFrame( animate );
    };

    if ( scene != null ) {
        if ( camera != null ) {
            const geometry = new THREE.BoxGeometry( 1, 1, 1 );
            const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            const cube = new THREE.Mesh( geometry, material );

            camera.position.z = 5;
            scene.add( cube );


            renderer.render( scene, camera );
        }
    }

    /*
    const animate = function () {
        requestAnimationFrame( animate );

    
        //   cube.rotation.x += 0.01;
        //   cube.rotation.y += 0.01;


        //   cube2.rotation.x += 50;

        //sphere.position.x += 0.05;
        //sphere.position.x -= 0.08;

        //console.log(scene.children)

        //controls.update();
        console.log("ICI")
        console.log(scene, camera)
        renderer.render( scene, camera );

    };*/




    // useEffect( () => {
    //     var scene = new THREE.Scene();
    //     var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    //     var renderer = new THREE.WebGLRenderer();
    //     renderer.setSize( window.innerWidth, window.innerHeight );
    //     // document.body.appendChild( renderer.domElement );
    //     // use ref as a mount point of the Three.js scene instead of the document.body
    //     this.mount.appendChild( renderer.domElement );
    //     var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    //     var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    //     var cube = new THREE.Mesh( geometry, material );
    

    //     const animate = function () {
    //       requestAnimationFrame( animate );

    
    //     //   cube.rotation.x += 0.01;
    //     //   cube.rotation.y += 0.01;


    //     //   cube2.rotation.x += 50;

    //       //sphere.position.x += 0.05;
    //       //sphere.position.x -= 0.08;

    //       //console.log(scene.children)

    //     //controls.update();
    //     renderer.render( scene, camera );

    // };
    //     animate();
    //     }, []);
    return (

        <div className="">
            <header className="">
                <Menu></Menu>
            </header>
            <div  ref={canvasContainer}>
            </div>
        </div>

    )
}

