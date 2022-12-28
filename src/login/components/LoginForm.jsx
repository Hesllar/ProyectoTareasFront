import React from 'react'

export const LoginForm = () => {
    return (
        <>
            <div className="mb-3">
                <label
                    className="form-label"
                >
                    Nombre usuario
                </label>
                <input
                    className='form-control'
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                    className='form-control'
                />

            </div>
        </>
    )
}
