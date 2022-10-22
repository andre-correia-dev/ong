import styles from '../styles/contato.module.css'
 

export default function Contato(){
    return (
        <div className={styles.contato}>
            

             <div className={styles.areacontato}>
                <h1>redes sociais</h1>
                 <img src='/imagem/facebookicon.png'width={50}height={50}></img><a href='/'>facebook</a><hr></hr>
                 <img src='/imagem/instagranicon.jpg'width={50}height={50}></img><a href='/'>instagram</a><hr></hr>
                 <img src='/imagem/twitericon.png'width={50}height={50}></img><a href='/'>...twiter</a><hr></hr>
                
        </div>
        <br></br>
        <button><a href='/'>voltar</a></button>
            
        

        </div>


        
    )
}