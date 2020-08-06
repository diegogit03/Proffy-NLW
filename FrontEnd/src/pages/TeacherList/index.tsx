import React from 'react';

import TeacherItem from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';

import './styles.css';
import Input from '../../components/input';

function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponiveis.">
                <form id="search-teachers">
                    <Input name="subject" label="Matérias" />
                    <Input name="week_day" label="Dia da Semana" />
                    <Input name="time" label="Hora" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem 
                    name="Diego Henrique de Oliveira"  
                    description="programador web"
                    subject="Programação"
                    img="https://avatars0.githubusercontent.com/u/60300499?s=460&u=dbe604df0229d2fc034070d00e180730c6d4c0db&v=4"
                    priceForHour="2,00"
                />

                <TeacherItem 
                    name="Diego Henrique de Oliveira"  
                    description="programador web"
                    subject="Programação"
                    img="https://avatars0.githubusercontent.com/u/60300499?s=460&u=dbe604df0229d2fc034070d00e180730c6d4c0db&v=4"
                    priceForHour="2,00"
                />

                <TeacherItem 
                    name="Diego Henrique de Oliveira"  
                    description="programador Java"
                    subject="Programação"
                    img="https://avatars0.githubusercontent.com/u/60300499?s=460&u=dbe604df0229d2fc034070d00e180730c6d4c0db&v=4"
                    priceForHour="2,00"
                />
            </main>
        </div>
    )
}

export default TeacherList;