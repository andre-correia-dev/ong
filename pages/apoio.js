import styles from '../styles/apoio.module.css'


export default function Apoio(){
    return(
        <>
        <div className={styles.apoio}>
            <h1>Apoio:</h1>
        <img src='/imagem/vereador.jpg'width='100%'></img>
        <p>Vereador NEGO  trabalhando para nossa gente!</p>
        <button><a href='/'>voltar</a></button>
        </div>

        </>
    )
}