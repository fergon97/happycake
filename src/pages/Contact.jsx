import React from 'react'
import './contact.css'

function Contact() {
    return (
        <div className='container'>
            <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
            <form>
                <div className='input-email'>
                    <label>Correo:</label>
                    <input type="text" placeholder='name@example.com' />
                </div>
                <div className='input-description'>
                    <label>Descripción</label>
                    <textarea></textarea>
                </div>
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default Contact
