import React, { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';
import img from "../../assets/imagenes";

export const LoginForm = () => {

    const { formState, onInputChange, onResetForm } = useForm({
        userName: '',
        password: ''
    });

    const { userName, password } = formState;

    const submitForm = async (e) => {

        e.preventDefault();

        const config = {
            method: 'POST',
            body: JSON.stringify(formState),
            headers: { 'Content-Type': 'application/json' }
        }

        const res = await fetch('http://localhost:5001/api/v1/usuario/validar-login-usuario', config);

        const resJson = await res.json();

        const { status, message } = resJson;

        if (!status) {
            alert(message);
            return;
        }

        alert(message);

        onResetForm();
    }



    return (
        <form onSubmit={submitForm}>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-2'>
                        <img id="logo-login" src={img.img3}/>
                    </div>   
                </div>
            </div>
            <br />
            <div id='ContenedorLogin'>          
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-3 text-center'>
                            <h1>Iniciar Sesión</h1>
                        </div>   
                    </div>
                </div>
                <hr />
                
                <div className="mb-3">
                    <label
                        className="form-label"
                    >
                        Nombre usuario
                    </label>
                    <input
                        className='form-control'
                        type="text"
                        name="userName"
                        value={userName}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                        className='form-control'
                        type="text"
                        name="password"
                        value={password}
                        onChange={onInputChange}
                    />
                </div>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-1 col-sm-3 text-center'>
                            <div className="mb-3">
                                <button className='btn btn-primary' type='submit'>Enviar</button>
                            </div> 
                        </div>      
                    </div>
                </div>
                
                <br />
            </div>
            
        </form>
        
    )
}
