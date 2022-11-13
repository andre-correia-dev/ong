import styles from '../styles/galeria.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from 'reactstrap';

export default function Galeria(){
    return(
        <div className={styles.galeria}>
            <h1>Galeria</h1>
            <div className={styles.fotogaleria}>
                <img src='/imagem/img1.jpg'></img>
                <p>No principio o curso da nascente do rio estava seca</p>
                
            </div>
            <div className={styles.fotogaleria}>
                <img src='/imagem/img2.jpg'></img>
                <p>Toda a vegetaçao estava queimada</p>
                
            </div>
            <div className={styles.fotogaleria}>
                <img src='/imagem/img3.jpg'></img>
                <p>Foi quando a Onarma junto a comunidade se uniram para salvar o rio</p>
                
            </div>
            <div className={styles.fotogaleria}>
                <img src='/imagem/img4.jpg'></img>
                <p>Um trabalho que exige esforço ,dedicaçao e  paciencia </p>
                
            </div>
            <div className={styles.fotogaleria}>
                <img src='/imagem/img5.jpg'></img>
                <p>O impenho dos colaboradores da onarma</p>
                
            </div>
            <div className={styles.fotogaleria}>
                <img src='/imagem/img6.jpg'></img>
                <p>O esforço e trabalho firme da comunidade</p>
                
            </div>
            <div className={styles.fotogaleria}>
                <img src='/imagem/img7.jpg'></img>
                <p>Reflorestamento de especies nativas</p>
                
            </div>
            <div className={styles.fotogaleria}>
                <img src='/imagem/img8.jpg'></img>
                <p>Manutençao dos perimetros da APP</p>
                
            </div>
            <div className={styles.fotogaleria}>
                <img src='/imagem/img9.jpg'></img>
                <p>E a satisfaçao de ver o rio correndo novamente onde antes so havia destruiçao</p>
                
            </div>
            
            

           
                  <Button href ='/'color="success">voltar</Button>
            
        </div>
    )
}