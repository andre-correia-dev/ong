import styles from '../styles/quemsomos.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from 'reactstrap';


export default function Quemsomos(){
    return (
        <div  className={styles.quemsomos}>
        
            <h1>Quem somos</h1>
            <p>Somos uma organizaçao sociocultural e ambiental que se destina a consientização , preservação e reflorestamento das margens e mananciais que compõem a bacia do rio magú. Desenvolvendo atividades que visão a melhoria de comunidades ribeirinhas</p>
        
        <iframe width="90%" height="315" src="https://www.youtube.com/embed/kgDsQ-40E-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <h3>Orgulho da nossa comunidade!</h3>
        <p>Atividades com a comunidade . reflorestamento e manutenção da APP da nascente do rio magú</p>

        <iframe width="90%" height="315" src="https://www.youtube.com/embed/xpiDbGHWYDo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h3 className={styles.rodape}>Com apoio de todas as lideranças comunitárias , políticas e religiosas da nossa região !</h3>
        
        <Button href ='/'color="success">voltar</Button><br></br>
        </div>
    )
}