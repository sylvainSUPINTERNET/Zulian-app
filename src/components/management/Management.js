'use strict';

import {useParams} from 'react-router-dom'

import React, {useCallback, useState} from "react";
import PropTypes from 'prop-types'
import Menu from "../Menu";


import { useDropzone } from "react-dropzone";

function MyDropzone() {
    let filesList = [];
    const [files, setFiles] = useState([]);


    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        filesList = [...filesList, acceptedFiles];
        setFiles(filesList)
    }, []);


    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Documents : {files.length}</p>
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
    )
}

export const Management = () => {
    let { uuid } = useParams();


    return (
        <div>
            <Menu></Menu>
            <main className="container">
                <p>Hi, {uuid}</p>
                <p className="text-center mt-5"> <i className="fas fa-profil"></i> Je dépose mon CV</p>
                <MyDropzone></MyDropzone>

            </main>
        </div>
    )
};
