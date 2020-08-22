'use strict';

import {useParams} from 'react-router-dom'

import React, {useCallback, useEffect, useState} from "react";
import PropTypes from 'prop-types'
import Menu from "../Menu";
import {useDropzone} from "react-dropzone";
import {useDispatch, useSelector} from "react-redux";
import {increaseCounterAction} from "../../redux/actions/actions";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faJava} from '@fortawesome/fontawesome-free-brands'
import {faRocket, faCoffee, faUpload} from "@fortawesome/free-solid-svg-icons";
import {generateAssetsPath} from "../utils/Utils";


function MyDropzone() {
    const [files, setFiles] = useState([]);
    let [tempUrls, setTempUrls] = useState([]);

    let filesList = [];
    let filesNoMediaList = [];


    //const {count} = useSelector(state => state.counter);
    //const dispatch = useDispatch();

    useEffect(() => {
        console.log("did mount")
    }, []);

    const onDrop = useCallback(acceptedFiles => {
        const {name, path, size, type} = acceptedFiles[0];
        const fileData = {
            name,
            path,
            size,
            type
        };
        // Do something with the files
        filesList = [...filesList, fileData];

        // Preview
        if (type === "image/png" || type === "image/jpeg" || type === "image/jpg") {
            let reader = new FileReader();

            reader.onload = () => {
                console.log("prev", tempUrls)
                tempUrls = [...tempUrls, reader.result];
                console.log(tempUrls);
                setTempUrls(tempUrls)

            };
            reader.readAsDataURL(acceptedFiles[0]);
        }

        setFiles(filesList);
        console.log(filesList)
    }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


    const style = {
        borderStyle: 'dashed',
        borderWidth: '1px'
    };

    return (
        <div>
            <p className="mt-5"><i className="fas fa-profil"></i>Déposez vos documents : <span
                className="text-secondary">{files.length}</span></p>


            <div {...getRootProps()} style={style}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p className="text-secondary p-5 text-center"><FontAwesomeIcon
                            icon={faUpload}></FontAwesomeIcon> Déposer </p> :
                        <p className="text-secondary p-5 text-center"><FontAwesomeIcon
                            icon={faUpload}></FontAwesomeIcon> Upload un document</p>
                }
            </div>


            <div className="container">
                <div className={files.length > 0 ? '' : 'invisible'}>
                    <p>Documents :</p>
                    <div className="row">
                        {
                            files.map(file => {
                                if (file.type !== "image/jpeg" && file.type !== "image/jpg" && file.type !== "image/png" && file.type !== "image/gif") {
                                    return <p>{JSON.stringify(file.type)}</p>
                                } else {
                                    tempUrls.map(b64Url => {
                                        return <div className="col-md-2">
                                            <img className="img-fluid img-thumbnail" src={b64Url}/>
                                        </div>
                                    })
                                }
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="container">
                <div className={tempUrls.length > 0 ? '' : 'invisible'}>
                    <p>Media :</p>
                    <div className="row">
                        {
                            tempUrls.map(b64Url => {
                                return <div className="col-md-2">
                                    <img className="img-fluid img-thumbnail" src={b64Url}/>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>


            {/*<p>{count}</p>*/}
            {/*<button onClick={() => dispatch(increaseCounterAction(4))}>Add to count</button>*/}
        </div>

    )
}

export const Management = () => {
    let {uuid} = useParams();


    let [folderName, setFolderName] = useState("");

    const style = {
        background: `url(${generateAssetsPath('/assets', 'astro.jpg')}) no-repeat center center fixed`
    };

    const onSubmit = (ev) => {
        ev.preventDefault();
        console.log("Submited with success")
    };


    return (
        <div>
            <Menu activeTab={"profil"}></Menu>
            <main className="container">
                <div className={"container text-center mt-5 mb-5"}>
                    <p>
                        Centralisé vos documents afin d'optimiser et de faciliter votre recherche d'emplois
                        <FontAwesomeIcon icon={faRocket} color={'red'} size="2x" className={"ml-2"}/>
                    </p>
                </div>
                <form onSubmit={onSubmit}>
                    <div
                        className="form-group">
                        <label htmlFor="formGroupExampleInput" className="bmd-label-floating">Nom du dossier</label>
                        <input type="text" onChange={(event) => {
                            setFolderName(event.target.value)
                        }} className="form-control" id="formGroupExampleInput"/>
                    </div>
                    <div
                        className="form-group">
                        <label htmlFor="formGroupExampleInput" className="bmd-label-floating">Description du
                            dossier</label>
                        <input type="text" className="form-control" id="formGroupExampleInput"/>
                    </div>
                    <MyDropzone></MyDropzone>

                    <div className="text-center">
                        <button className="btn btn-primary btn-lg active m-5" role="button" aria-pressed="true"
                                disabled={true}>Enregistrer
                        </button>
                    </div>
                </form>

            </main>
        </div>
    )
};
