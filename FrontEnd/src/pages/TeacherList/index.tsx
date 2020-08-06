import React from 'react';

import TeacherItem from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/input';
import Select from '../../components/Select';

import './styles.css';

function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponiveis.">
                <form id="search-teachers">
                    <Select 
                        name="subject"
                        label="Matéria" 
                        options={[
                            {value: 'Artes', label: 'Artes'},
                            {value: 'Biologia', label: 'Biologia'},
                            {value: 'Ciências', label: 'Ciências'},
                            {value: 'Educação física', label: 'Educação física'},
                            {value: 'Fisica', label: 'Fisica'},
                            {value: 'Geografica', label: 'Geografica'},
                            {value: 'Historia', label: 'Historia'},
                            {value: 'Matematica', label: 'Matematica'},
                            {value: 'Portugues', label: 'Portugues'},
                            {value: 'Quimica', label: 'Quimica'},
                        ]}
                    />
                    <Select 
                        name="week_day"
                        label="Dia da Semana" 
                        options={[
                            {value: '0', label: 'Doming'},
                            {value: '1', label: 'Segunda-feira'},
                            {value: '2', label: 'Terça-feira'},
                            {value: '3', label: 'Quarta-feira'},
                            {value: '4', label: 'Quinta-feira'},
                            {value: '5', label: 'Sexta-feira'},
                            {value: '6', label: 'Sabado'},
                        ]}
                    />
                    <Input type="time" name="time" label="Hora" />
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