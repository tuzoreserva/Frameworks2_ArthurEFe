import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Page.module.css';
export default function Desc({ users }) {
    return (
        <div
        >
            <Head>
                <title> Pokemons - Descrição </title>
            </Head>

            <Navbar />
            <div className={styles.descricao}>
                <div className={styles.itensdesc}>
                <ol>
                        {users.map((user, index) => (
                            <li>

                             <div key={user.usuario}> <p className={styles.nomepokemon}>{user.nome} </p> </div> <br></br>
                             <p className={styles.descpokemon}>{user.descricao}</p>
                         </li>
                     ))}
                  </ol>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=pokemon')
    const repo = await res.json()
    const users = await repo;
    return {
        props: { users }
    }
})
