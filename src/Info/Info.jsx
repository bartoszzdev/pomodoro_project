import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import './info.css'

const Info = () => {
    return (
        <article className='info-container'>
            <h1 className='info-title'>Técnica Pomodoro</h1>
            <p className='text'>A Técnica Pomodoro é um método de gerenciamento de tempo desenvolvido por Francesco Cirillo no final dos anos 1980. A técnica consiste na utilização de um cronômetro para dividir o trabalho em períodos de 25 minutos, separados por breves intervalos. A técnica deriva seu nome da palavra italiana pomodoro (tomate), como referência ao popular cronômetro gastronômico na forma dessa fruta. O método é baseado na ideia de que pausas frequentes podem aumentar a agilidade mental.</p>
        </article>
    )
}

export default Info