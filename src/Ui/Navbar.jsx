import React from 'react'

export const Navbar = () => {
    
  return (
    <header>
        <nav id="sombra-menu" className="navbar navbar-expand-md navbar-dark bg-dark ">
            <div className="container-fluid">
                {/* <img id="logo" src="/public/traNB.png" alt="">   */}

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="container-fluid">
                <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
                    <ul className="navbar-nav">
                    <br/>
                    <li className="nav-item">
                        <a id="Menu-a" className="nav-link p-2" href="/">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a id="Menu-a" className="nav-link p-2" href="registro">Registrase</a>
                    </li>
                    <li className="nav-item">
                        <a id="Menu-a" className="nav-link p-2" href="login" >Iniciar Sesión</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </nav>
    </header>
  
  )
}


