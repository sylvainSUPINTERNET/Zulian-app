'use strict';
import React, {useCallback, useEffect, useState} from "react";
import Menu from "../Menu";
import { useForm } from "react-hook-form";


export const Authentication = ({props}) => {
    const [msg, setMsg] = useState("");

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => console.log(data)

    useEffect(() => {
        setMsg("Authentication - ")
    }, [msg]);

    return (<div>

            <Menu></Menu>
            {
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input name="example" defaultValue="test" ref={register} />

                    {/* include validation with required or other standard HTML validation rules */}
                    <input name="exampleRequired" ref={register({ required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" />
                </form>
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
