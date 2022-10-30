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
               <br></br>
               <br></br>
               <br></br>
                 <img src='/imagem/facebookicon.png'width={50}height={50}></img><a href='https://www.facebook.com/onarma/'>facebook</a><hr></hr>
                
                 
                
        </div>
        <br></br>
        
        <Button  href ='/'color="success">voltar</Button>
        

        </div>


        
    )
}