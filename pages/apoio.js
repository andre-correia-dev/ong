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
                    src="/imagem/vereador.jpg"width={470}textAlign='center'
                  />
                </div>
                <CardBody>
                  <CardTitle tag="h5">
                   Presidente da camara de vereadores de santana-ma 
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                   vereador NEGO
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