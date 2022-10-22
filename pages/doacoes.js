import styles from '../styles/doacoes.module.css'
 
 export default function Doacoes(){
    return(
        
        <div className={styles.container} >
            <h1>Doacoes</h1>
            <div className={styles.pix}>
                <h2>Banco do brasil</h2>
                <hr></hr>
                <label>Conta: 000.123-4</label><hr></hr>
                <label>Agencia: 123-4</label><hr></hr>
                <label>Chave pix: 000.123-445</label><hr></hr>
                <h3>Seja um doador permanente e ajude a preservar o meio ambiente!! A Onarma agradeçe!</h3>

                

            </div>
            <div  className={styles.button}>
            <button> <a href='/'>voltar</a>
</button>
            </div>
       

        </div>


       
    )
}