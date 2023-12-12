import styles from '../styles/Components.module.css'
export default function Navbar() {
    return (
        <div>
            <ul className={styles.navbar}>
                <li>
                    <a href='/'> Mewtwo </a>
                </li>
                <li>
                    <a href='/objetos'> Pokedex </a>
                </li>
                <li>
                    <a href='/descricao'> Descrição </a>
                </li>
            </ul>
        </div>
    )
}