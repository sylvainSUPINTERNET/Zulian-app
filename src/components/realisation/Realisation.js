import React, {useEffect, useState} from "react";
import Menu from "../Menu";
import {ModelViewer} from "./3DModelViewer";

import modelTest from "../../AnimatedMorphCube.glb";

export const Realisation = () => {
    return (
        <div className="">
            <header className="">
                <Menu activeTab=""/>
            </header>
            <main className="container witness mb-4">
                <div className="row">
                    <div className="col-md-4">
                        <ModelViewer widthSceneRenderer={300} heightSceneRenderer={200} zPosition={3} model={modelTest}></ModelViewer>

                    </div>
                    <div className="col-md-4">
                        <ModelViewer widthSceneRenderer={300} heightSceneRenderer={200} zPosition={3} model={modelTest}></ModelViewer>

                    </div>
                    <div className="col-md-4">
                        <ModelViewer widthSceneRenderer={300} heightSceneRenderer={200} zPosition={3} model={modelTest}></ModelViewer>
                    </div>
                </div>
            </main>
        </div>

    )
};
