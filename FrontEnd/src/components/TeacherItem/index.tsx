import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

interface TeacherItemProps{
    name: string,
    subject: string,
    description: string,
    priceForHour: string,
    img: string,
    number: string,
    teacher_id: string
}

const TeacherItem: React.FC<TeacherItemProps> = props => {
    function createNewConnection(){
        api.post('/connections',{
            user_id: props.teacher_id
        })
    }

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
                
                <a onClick={createNewConnection} href={`https://wa.me/${props.number}`} target="_blank">
                    <img src={whatsappIcon} alt="whatszapp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem;