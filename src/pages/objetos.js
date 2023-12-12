import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Page.module.css';
import Link from 'next/link';

function Users({ users }) {
    return (
        <div>

             <Navbar />

                <div className={styles.bodypokedex}> 

                <h1> Pokedex</h1>
                {users.map((user, index) => (
                    <Link href='/profile/[id]' as={`/profile/${index}`}>
                     <div key={user.id}> <p> {user.nome} </p> </div>
                    </Link>
         ))}

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
export default Users;