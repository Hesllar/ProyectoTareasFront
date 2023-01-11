import React from 'react';
import img from "../assets/imagenes";

export const Footer = () => {
  return (
    <footer class="site-footer bg-dark text-white">
    <br/>
    <div class="container">
        <div class="row justify-content-center">
        <div class="col-xl-4 col-lg-4 col-md-5 col-sm-12">
            <br/>
            <img src={img.img1}/>
        </div>
    
        <div class="col-xl-8 col-lg-8 col-md-7 col-sm-12">
            <br/>
            <h2 id="Notaria-titulo">Quiénes somos</h2>
            <hr/>
            <ul class="list-unstyled footer-link">
            <li class="d-flex">
                <span class="m-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minus quam, nihil rerum culpa doloribus pariatur enim eaque, voluptates nesciunt possimus voluptatem magni, atque voluptatum excepturi libero itaque sunt voluptatibus?</span>                          
            </li>
            <li class="d-flex">
                <samp class="m-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolor vel maxime iusto voluptates hic ut culpa</samp>
            </li>
            </ul>
        </div>
        </div>
    </div>
    <br/><br/>
    </footer>
  )
}


