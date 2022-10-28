import styles from '../styles/contato.module.css'
import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,CardBody,CardTitle,CardSubtitle,CardText} from 'reactstrap';
import Head from 'next/head';
 

export default function Contato(){
    return (
        <div className={styles.contato}>
            

             <div className={styles.areacontato}>
                <h1>redes sociais</h1>
                 <img src='/imagem/facebookicon.png'width={50}height={50}></img><a href='https://www.facebook.com/onarma/'>facebook</a><hr></hr>
                 <img src='/imagem/instagranicon.jpg'width={50}height={50}></img><a href='/'>instagram</a><hr></hr>
                 <img src='/imagem/twitericon.png'width={50}height={50}></img><a href='/'>...twiter</a><hr></hr>
                 
                
        </div>
        <br></br>
        
        <Button  href ='/'color="success">voltar</Button>
        

        </div>


        
    )
}