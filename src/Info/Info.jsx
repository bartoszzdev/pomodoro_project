import React from 'react'
import { IoMdClose } from 'react-icons/io'
import './info.css'

const Info = () => {
    return (
        <article className='info-container'>
            <div className='info'>
                <h1 className='info-title'>Técnica Pomodoro</h1>
                <div className='info-text'>
                    <p className='text'>A Técnica Pomodoro é um método de gerenciamento de tempo desenvolvido por Francesco Cirillo no final dos anos 1980. A técnica consiste na utilização de um cronômetro para dividir o trabalho em períodos de 25 minutos, separados por breves intervalos. A técnica deriva seu nome da palavra italiana pomodoro (tomate), como referência ao popular cronômetro gastronômico na forma dessa fruta. O método é baseado na ideia de que pausas frequentes podem aumentar a agilidade mental</p>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Il_pomodoro.jpg/220px-Il_pomodoro.jpg' alt='tomato' />
                </div>
                <button type='button' className='close-info'>
                    <IoMdClose />
                </button>
            </div>
        </article>
    )
}

export default Info