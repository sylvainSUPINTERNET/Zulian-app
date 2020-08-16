'use strict';

import {useParams} from 'react-router-dom'

import React, {useCallback, useEffect, useState} from "react";
import PropTypes from 'prop-types'
import Menu from "../Menu";
import { useDropzone } from "react-dropzone";
import {useDispatch, useSelector} from "react-redux";
import {increaseCounterAction} from "../../redux/actions/actions";


function MyDropzone() {
    const [files, setFiles] = useState([]);
    let [tempUrls, setTempUrls] = useState([]);

    let filesList = [];

    const {count} = useSelector(state => state.counter);
    const dispatch = useDispatch();

    useEffect( () => {
        console.log("did mount")

        console.log(count);
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
    }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})




    return (
        <div>
            <p>Documents : {files.length}</p>
            {
                tempUrls.map( b64Url => {
                    return <div className="card">
                        <img className="img-fluid img-thumbnail" src={b64Url}/>
                    </div>
                })
            }
            <p>{JSON.stringify(files)}</p>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Je dépose mes documents ...</p> :
                        <p>Glissez vos documents</p>
                }
            </div>


            <p>{count}</p>
            <button onClick={() => dispatch(increaseCounterAction(4))}>Add to count</button>
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
