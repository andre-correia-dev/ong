import styles from '../styles/apoio.module.css'
import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,CardBody,CardTitle,CardSubtitle,CardText} from 'reactstrap';
import Head from 'next/head';



export default function Apoio(){
    return(
        
        <div className={styles.apoio}>
        <Card 
                style={{
                 textAlign:'center',paddingTop:'30px'
                }}
              >
                <div>
                  <img
                    alt="Sample"
                    src="/imagem/repam.jpg"width={370}textAlign='center'
                  />
                  <img
                    alt="Sample"
                    src="/imagem/brejo.png"width={370}textAlign='center'
                  />
                </div>
                <CardBody>
                  <CardTitle tag="h5">
                   Terço dos Homens do são joão 
                  </CardTitle>
                
                  <CardTitle tag="h5">
                   Clube amigos do rio magú 
                  </CardTitle>

                  <CardTitle tag="h5">
                   
                  </CardTitle>

                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                   ONARMA
                  </CardSubtitle>
                  <CardText>
                    Trabalhando para nossa gente!!
                  </CardText>
                  <Button href ='/'color="success">voltar</Button>
              
                </CardBody>
              </Card>
           
        </div>

        
    )
}