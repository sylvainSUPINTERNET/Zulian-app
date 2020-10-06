'use strict';
import React, {useCallback, useEffect, useState} from "react";
import Menu from "../Menu";
import {useForm} from "react-hook-form";
import img from './Spell_Arcane_PortalDarnassus.png'
import {emailValidator} from "../../utils/validators";
import {auth} from '../../api/authentication/authentication';
import {Modal} from "react-bootstrap";


// full screen mobile : https://openlayers.org/en/latest/examples/index.html?q=full-screen
// https://openlayers.org/en/latest/examples/full-screen-source.html
// https://dribbble.com/shots/3378512-Parking-search

export const Authentication = ({props}) => {

    const formTitleRegister = "S'enregistrer";
    const formTitleLogin = "Connection";

    const [activeAccountMessage, setActiveAccountMessage] = useState(false);

    const [formTitle, setFormTitle] = useState(formTitleRegister);
    const [passwordInput, setPasswordInput] = useState("");

    let {register, handleSubmit, watch, errors} = useForm();

    const resetFormErrorsMessage = (errors) => {
        Object.keys(errors).map( key => {
            errors[key] = null
        });
    };

    const handleCloseErrorRegister = () => {
        setShowErrorRegister(false)
    };


    const [isLoading, setIsLoading] = useState(false);
    const [showErrorRegister, setShowErrorRegister] = useState(false);
    const [textErrorRegister, setTextErrorRegister] = useState(false);


    const onSubmit = async data => {
        setIsLoading(true);

        const payload = {
            firstName: data.firstName,
            lastName: data.lastName,
            password: data.password,
            email: data.email,
            phoneNumber: data.phoneNumber
        };

        try {
            const res  = await auth.register(payload);
            const resJson = await res.json();
            setTimeout( () => {
                const {message} = resJson;
                console.log(res.status);
                if ( res.status !== 200 ) {
                    setIsLoading(false);
                    setShowErrorRegister(true);
                    setTextErrorRegister(message);
                } else {
                    setIsLoading(false);
                    setFormTitle(formTitleLogin);
                    setActiveAccountMessage(true);
                }
            }, 1000)

        } catch (e) {
            alert(e)
        }
    };

    useEffect(() => {
        console.log("CHANGEMENT DETECTED");
        console.log("> " , formTitle);
        console.log("FORM ERRORS => ", errors)
        resetFormErrorsMessage(errors);

    }, [formTitle]); // trigger when formTitle change / if nothing trigger just once

    if (formTitle === formTitleRegister) {
        return (<div>

                <Menu></Menu>
                {

                    <div className="container mt-4 text-white animated fadeInDown rounded mb-2 shadow p-4 rounded-circle" style={{   backgroundColor: 'rgba(140,80,255,0.2)'}}>
                        <div className="row rounded-circle shadow-lg">
                            <div className="col-md-3"></div>
                            <div className="col-md-6 rounded-circle" style={{borderRadius: '15px', backgroundColor: 'rgba(255,80,255,0.2)'}}>
                                <div className="row mb-5">
                                    <div className="col-md-12">
                                        <form onSubmit={handleSubmit(onSubmit)} className="witness p-4 rounded ">
                                            <img src={img} className="img-fluid center-image mt-4 rounded-circle"/>

                                            <div className="form-group m-5  m-md-3">
                                                <label htmlFor="emailInput" className="input-color">Email <span className="text-danger"> *</span></label>
                                                <input type="email" className="form-control" id="emailInput" name="email" disabled={isLoading}
                                                       ref={ register({
                                                           required: true,
                                                           /*
                                                           validate: emailValue => {
                                                              return  emailValidator(emailValue) === true ? '': 'Email non valide';
                                                           }*/
                                                       })
                                                       }
                                                       placeholder=""/>
                                                {errors.email && <span className="small text-danger">Email non valide</span>}
                                            </div>

                                            <div className="form-group m-5 m-md-3">
                                                <label htmlFor="lastNameInput" className="input-color">Nom <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="lastNameInput" name="lastName" disabled={isLoading}
                                                       ref={register({required: true})}
                                                       placeholder=""/>
                                                {errors.lastName && <span className="small text-danger">Champ nom est obligatoire</span>}
                                            </div>

                                            <div className="form-group m-5 m-md-3">
                                                <label htmlFor="firstNameInput" className="input-color">Prénom <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="firstNameInput" name="firstName" disabled={isLoading}
                                                       ref={register({required: true})}
                                                       placeholder=""/>
                                                {errors.firstName && <span className="small text-danger">Champ prénom est obligatoire</span>}
                                            </div>

                                            <div className="form-group m-5 m-md-3">
                                                <label htmlFor="phoneNumberInput" className="input-color">Numéro de téléphone</label>
                                                <input type="phone" className="form-control" id="phoneNumberInput" name="phoneNumber" disabled={isLoading}
                                                       ref={register({required: false})}
                                                       placeholder="+33644501140"/>
                                            </div>

                                            <div className="form-group m-5 m-md-3">
                                                <label htmlFor="passwordInput" className="input-color">Mot de passe <span className="text-danger">*</span></label>
                                                <input type="password" className="form-control" id="passwordInput" name="password" disabled={isLoading}
                                                       onChange={ passInput => {
                                                           setPasswordInput(passInput.target.value)
                                                       }}
                                                       ref={register({required: true, minLength: 8,
                                                       })}
                                                       placeholder=""/>
                                                {errors.password && <span className="small text-danger">8 caractères minimum</span>}
                                            </div>

                                            <div className="form-group m-5 m-md-3">
                                                <label htmlFor="passwordConfirmedInput" className="input-color">Confirmer le mot de passe <span className="text-danger">*</span></label>
                                                <input type="password" className="form-control" id="passwordConfirmedInput" name="passwordConfirmed" disabled={isLoading}
                                                       ref={register({
                                                           required: true,
                                                           validate: (passwordConfirmedValue) => {
                                                               return passwordConfirmedValue === passwordInput
                                                           }, // returns true if valid
                                                       })}
                                                       placeholder=""/>
                                                {errors.passwordConfirmed && <span className="small text-danger">Mot de passe ne correspond pas</span>}
                                            </div>


                                            <div className="text-center m-4">
                                                <a className="" onClick={ () => {
                                                    setFormTitle(formTitleLogin)
                                                }}> J'ai déjà un compte ?</a>

                                            </div>
                                            <div className="text-center">

                                                <button className={isLoading === true ? "btn btn-lg purple-gradient disabled":"btn btn-lg purple-gradient" }>Enregistrer
                                                    <span className={isLoading === true ? "ml-2 spinner-border spinner-border-sm": "d-none" } role="status"
                                                          aria-hidden="true"></span>
                                                    <span className="sr-only">Loading...</span>
                                                </button>
                                            </div>
                                        </form>


                                        <Modal show={showErrorRegister} onHide={handleCloseErrorRegister} contentClassName={'background-black'}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Enregistrement</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className={"text-center"}> {textErrorRegister}</Modal.Body>
                                        </Modal>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                    </div>
                }
            </div>
        );
    } else {
        return (<div>

                <Menu></Menu>
                {

                    <div className="container mt-4 text-white animated fadeInDown rounded mb-2 shadow p-4 rounded-circle" style={{   backgroundColor: 'rgba(140,80,255,0.2)'}}>
                        <div className="row rounded-circle shadow-lg">
                            <div className="col-md-3"></div>
                            <div className="col-md-6 rounded-circle" style={{borderRadius: '15px', backgroundColor: 'rgba(255,80,255,0.2)'}}>
                                <div className="row mb-5">
                                    <div className="col-md-12">
                                        <form onSubmit={handleSubmit(onSubmit)} className="witness p-4 rounded" >
                                            <img src={img} className="img-fluid center-image mt-4 rounded-circle"/>

                                            <div className="mt-5 mb-5 text-center">
                                                <p className="text-light">Connectez vous pour activer votre compte !</p>
                                            </div>
                                            <div className="form-group m-5  m-md-3">
                                                <label htmlFor="emailInput" className="input-color">Email <span className="text-danger"> *</span></label>
                                                <input type="email" className="form-control" id="emailLogin" name="emailLogin"
                                                       ref={ register({
                                                           required: true,

                                                           /*
                                                           validate: async emailValue => {
                                                               console.log(await emailValidator(emailValue) === true ? '': 'Email non valide')
                                                              return await emailValidator(emailValue) === true ? '': 'Email non valide';
                                                           }
                                                           */
                                                       })
                                                       }
                                                       placeholder=""/>
                                                {errors.emailLogin && <span className="small text-danger">Email non valide</span>}
                                            </div>

                                            <div className="form-group m-5 m-md-3">
                                                <label htmlFor="passwordInput" className="input-color">Mot de passe <span className="text-danger">*</span></label>
                                                <input type="passwordLogin" className="form-control" id="passwordInput" name="passwordLogin"
                                                       ref={register({required: true})}
                                                       placeholder=""/>
                                                {errors.passwordLogin && <span className="small text-danger">Champ mot de passe est obligatoire</span>}
                                            </div>



                                            <div className="text-center m-4">
                                                <a className="" onClick={ () => {
                                                    setFormTitle(formTitleRegister);
                                                    setActiveAccountMessage(false);
                                                }}> Pas de compte ?</a>

                                            </div>
                                            <div className="text-center">
                                                <button className="btn btn-lg purple-gradient">Se connecter</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                    </div>
                }
            </div>
        );
    }

};
