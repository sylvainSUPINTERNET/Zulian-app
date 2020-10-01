'use strict';
import React, {useCallback, useEffect, useState} from "react";
import Menu from "../Menu";
import {useForm} from "react-hook-form";
import img from './Spell_Arcane_PortalDarnassus.png'
import {emailValidator} from "../../utils/validators";


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
                <div className="container mt-4 text-white animated fadeInDown rounded mb-2 shadow p-4 rounded-circle" style={{   backgroundColor: 'rgba(140,80,255,0.2)'}}>
                    <div className="row rounded-circle">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 rounded-circle" style={{borderRadius: '15px', backgroundColor: 'rgba(255,80,255,0.2)'}}>
                            <div className="row mb-5">
                                <div className="col-md-12">
                                    <img src={img} className="img-fluid center-image mt-4"/>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-group m-5  m-md-3">
                                            <label htmlFor="emailInput" className="rainbow3">Email <span className="text-danger"> *</span></label>
                                            <input type="email" className="form-control black-background input-text-galaxy-green" id="emailInput" name="email"
                                                   ref={ register({
                                                       required: true,
                                                       validate: async emailValue => {
                                                          return await emailValidator(emailValue) === true ? '': 'Email non valide';
                                                       }
                                                    })
                                                   }
                                                   placeholder=""/>
                                            {errors.email && <span className="small text-danger">{errors.email.message}</span>}
                                        </div>

                                        <div className="form-group m-5 m-md-3">
                                            <label htmlFor="lastNameInput" className="rainbow3">Nom <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="lastNameInput" name="lastName"
                                                   ref={register({required: true})}
                                                   placeholder=""/>
                                            {errors.lastName && <span className="small text-danger">Champ nom est obligatoire</span>}
                                        </div>

                                        <div className="form-group m-5 m-md-3">
                                            <label htmlFor="firstNameInput" className="rainbow3">Prénom <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="firstNameInput" name="firstName"
                                                   ref={register({required: true})}
                                                   placeholder=""/>
                                            {errors.firstName && <span className="small text-danger">Champ prénom est obligatoire</span>}
                                        </div>

                                        <div className="form-group m-5 m-md-3">
                                            <label htmlFor="phoneNumberInput" className="rainbow3">Numéro de téléphone</label>
                                            <input type="phone" className="form-control" id="phoneNumberInput" name="phoneNumber"
                                                   ref={register({required: false})}
                                                   placeholder="+33644501140"/>
                                        </div>

                                        <div className="form-group m-5 m-md-3">
                                            <label htmlFor="passwordInput" className="rainbow3">Mot de passe <span className="text-danger">*</span></label>
                                            <input type="password" className="form-control" id="passwordInput" name="password"
                                                   ref={register({required: true})}
                                                   placeholder=""/>
                                            {errors.password && <span className="small text-danger">Champ mot de passe est obligatoire</span>}
                                        </div>

                                        <div className="form-group m-5 m-md-3">
                                            <label htmlFor="passwordConfirmedInput" className="rainbow3">Confirmer le mot de passe <span className="text-danger">*</span></label>
                                            <input type="password" className="form-control" id="passwordConfirmedInput" name="passwordConfirmed"
                                                   ref={register({required: true})}
                                                   placeholder=""/>
                                            {errors.passwordConfirmed && <span className="small text-danger">Mot de passe ne correspond pas</span>}
                                        </div>


                                        <div className="text-center m-4">
                                            <a className="switch-auth-form" onClick={ () => {console.log("click")}}> J'ai déjà un compte ?</a>
                                        </div>
                                        <div className="text-center">
                                            <button className="btn btn-lg purple-gradient">Enregistrer</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
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
