import styles from '../styles/doacoes.module.css'
import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,CardBody,CardTitle,CardSubtitle,CardText} from 'reactstrap';
import Head from 'next/head';

 export default function Doacoes(){
    return(
        
        <div className={styles.container} >
            <Head>
        <title>onarma</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/imagem/reciclagem.png" />
        <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
  />
      </Head>
           
            
            <div className={styles.pix}>
              <Card 
                style={{
                 textAlign:'center'
                }}
              >
                <div>
                  <img
                    alt="Sample"
                    src="/imagem/qronarma.png"width={300}textAlign='center'
                  />
                </div>
                <CardBody>
                  <CardTitle tag="h5">
                    Escaneie o QR CODE
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    E faça um pix
                  </CardSubtitle>
                  <CardText>
                    Seja um doador permanente e ajude o meio ambiente! O rio magú  agradeçe!! .
                  </CardText>
                  <Button href ='/'color="success">voltar</Button>
              
                </CardBody>
              </Card>
            </div>

            
            <div  className={styles.button}>
            


            </div>
  
          
       

        </div>


       
    )
}