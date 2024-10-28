import React from 'react'
import academyIcon from './career_images/academy_icon.png'
import './Career.css'

const Career = () => {
    return (
        <div id='career'>
            <div className='career'>
                <img className='career--image' src={academyIcon} alt="Academy Icon" />
                <div className='career--text'>
                    <h2>Carrera y formación:</h2>
                    <p>Tras estudiar el Grado Universitario en Ciencias Empresariales y el Máster en Banca y Finanzas,
                        trabajé hasta 2020 en Banca. He decidio probar a reorientar mi carrera al mundo del desarrollo de software.
                        Si quieres saber más, aqui puedes descargar mi CV en PDF.

                    </p>
                    <a className='career--link' href="./CV/CV_IagoSolerVeira.pdf" download>Descargar currículum</a>
                </div>

            </div>
        </div>
    )
}

export default Career