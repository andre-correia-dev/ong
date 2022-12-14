import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from 'reactstrap';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>onarma</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/imagem/reciclagem.png" />
        <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
  />
      </Head>

      <main className={styles.main}>
        <img src='/imagem/logoonarma.jpg'></img>

      
        <h1 className={styles.title}>
          Onarma 
        </h1>

        <p>(Ong amigos do rio magú) </p>

        <div className={styles.grid}>
          <a href="/quemsomos" className={styles.card}>
            <h2>Quem somos &rarr;</h2>
            <p>conheça nosso trabalho seja um de nossos parceiros!!</p>
          </a>

          <a href="/galeria" className={styles.card}>
            <h2>Galeria &rarr;</h2>
            <p>Visite nossa galeria de fotos</p>
          </a>

          <a href="/contato" className={styles.card}>
            <h2>Contatos &rarr;</h2>
            <p>Entre em contato com o nosso pessoal</p>
          </a>

          <a
            href="/doacoes"
            className={styles.card}
          >
            <h2>Doações &rarr;</h2>
            <p>Seja doador de uma de nossas campanhas</p>
          </a>

          <a
            href="/apoio"
            className={styles.card}
          >
            <h2>Apoio &rarr;</h2>
            <p className={styles.ppp}>
              conheça nossa rede de apoiadores e empresas que se preocupam com o meio ambiente.
            </p>
          </a>
        </div>
       
      </main>

      <footer className={styles.footer}>
       <a>infinitspacedev</a>
      </footer>
    </div>
  )
}
