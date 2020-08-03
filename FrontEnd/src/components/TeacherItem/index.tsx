import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

interface TeacherItemProps{
    name: string,
    subject: string,
    description: string,
    priceForHour: string,
    img: string,
}

const TeacherItem: React.FC<TeacherItemProps> = props => {
    return(
        <article className="teacher-item">
            <header>
                <img src={props.img} alt={props.name}/>
                <div>
                    <strong>{props.name}</strong>
                    <span>{props.subject}</span>
                </div>
            </header>

            <p>
                {props.description}
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {props.priceForHour}</strong>
                </p>
                
                <button type="button">
                    <img src={whatsappIcon} alt="whatszapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;