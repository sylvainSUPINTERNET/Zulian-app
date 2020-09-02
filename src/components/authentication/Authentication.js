'use strict';
import React, {useCallback, useEffect, useState} from "react";
import Menu from "../Menu";
import {useForm} from "react-hook-form";


// full screen mobile : https://openlayers.org/en/latest/examples/index.html?q=full-screen
// https://openlayers.org/en/latest/examples/full-screen-source.html
// https://dribbble.com/shots/3378512-Parking-search

export const Authentication = ({props}) => {
    const [msg, setMsg] = useState("");

    const {register, handleSubmit, watch, errors} = useForm();


    const onSubmit = data => {
        console.log(data);
    };

    useEffect(() => {
        setMsg("Authentication - ")
    }, [msg]);

    return (<div>

            <Menu></Menu>
            {
                <div className="container mt-4">
                    <h3 className="text-center mt-5 text-primary"><kbd className="p-4">Connection</kbd></h3>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group form-control-lg m-5 m-md-3">
                                    <label htmlFor="emailInput">Email<span className="text-danger">*</span></label>
                                    <input type="email" className="form-control" id="emailInput" name="email"
                                           ref={register({required: true})}
                                           placeholder=""/>
                                    {errors.email && <span className="small text-danger">Champ email est obligatoire</span>}
                                </div>

                                <div className="form-group form-control-lg m-5 m-md-3">
                                    <label htmlFor="lastNameInput">Nom<span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="lastNameInput" name="lastName"
                                           ref={register({required: true})}
                                           placeholder=""/>
                                    {errors.lastName && <span className="small text-danger">Champ nom est obligatoire</span>}
                                </div>

                                <div className="form-group form-control-lg m-5 m-md-3">
                                    <label htmlFor="firstNameInput">Prénom<span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="firstNameInput" name="firstName"
                                           ref={register({required: true})}
                                           placeholder=""/>
                                    {errors.firstName && <span className="small text-danger">Champ prénom est obligatoire</span>}
                                </div>

                                {/* register your input into the hook by invoking the "register" function */}
                                <input name="example" defaultValue="test"/>
                                {errors.example && <span>This field is required</span>}

                                {/* include validation with required or other standard HTML validation rules */}
                                <input name="exampleRequired" ref={register({required: true})}/>
                                {/* errors will return when field validation fails  */}
                                {errors.exampleRequired && <span>This field is required</span>}
                                <select name="gender" ref={register({required: true})}>
                                    <option value="female">female</option>
                                    <option value="male">male</option>
                                    <option value="other">other</option>
                                </select>
                                {errors.gender && <span>This field is required</span>}


                                <input type="submit"/>
                            </form>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            }

            {/*
            <p>{msg} page</p>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 align-self-center">
                        <from onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Nom d'utilisateur</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="name@example.com"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Prénom</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="name@example.com"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="name@example.com"></input>
                            </div>
                        </from>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
            */}


        </div>
    );
};
