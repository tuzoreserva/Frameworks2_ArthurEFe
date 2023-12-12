import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Page.module.css';
import Image from 'next/image';
import Mewtwo from '../imagens/mewtwo.png';


export default function Home() {
    return (
        <div>
            <Head>
                <title> Pokemons - Home </title>
            </Head>
            <Navbar />

            <div className={styles.home}>

                <div className={styles.imagemhome}>

                    <Image className={styles.mewtwo} src={Mewtwo}/>

                </div>

                <div className={styles.intenshome}>
                    <h1 className={styles.NomeSite}> Mewtwo</h1>
                

                <h2>Conheça sobre pokemons e seu universo</h2>
                <h3>Pokemon" é uma franquia de mídia japonesa criada por Satoshi Tajiri e Ken Sugimori. 
                <br></br>
                A franquia começou como um par de jogos de vídeo game lançados pela Nintendo para o Game Boy em 1996.</h3>
                <br></br>

                <p>A franquia Pokémon se expandiu rapidamente para incluir uma série de anime, filmes, mangás, brinquedos, jogos de cartas colecionáveis e muito mais. </p>
                <br></br>
                <p>O anime Pokémon é uma parte fundamental dessa franquia e tem sido uma das séries de anime mais populares em todo o mundo.</p>
                    <main>

                    </main>
                </div>

                

            </div>
            <Footer />
        </div>
    )
}