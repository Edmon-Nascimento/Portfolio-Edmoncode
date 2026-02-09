import styles from './header.module.css'
import menuIcon from '../../assets/images/icons/bars-solid-full.svg'
import closeIcon from '../../assets/images/icons/x-solid-full.svg'
import { useState } from 'react'

export default function Header(){

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    return(
        
        <header>
            <div className={styles.name}>
                <h1 className={styles.logo}>EDMONCODE</h1>
                <span>Desenvolvedor front-end</span>
            </div>

            {/* Menu mobile */}

            <div className={styles.menuBtn}>
                <img src={menuIcon} alt="Menu" onClick={()=>setIsMenuOpen(true)} className={isMenuOpen? styles.inactive : styles.active}/>
            </div>

            <aside className={isMenuOpen? styles.active: ""}>
                <img src={closeIcon} alt="" onClick={()=>setIsMenuOpen(false)} />
                <a href="">Sobre</a>
                <a href="">Habilidades</a>
                <a href="">Projetos</a>
                <a href="">Contato</a>
            </aside>
            <div className={`${styles.overlay} ${isMenuOpen? styles.active : ""}`}></div>


            {/* Menu desktop */}            
            <nav className={styles.links}>
                <a href="">Sobre</a>
                <a href="">Habilidades</a>
                <a href="">Projetos</a>
                <a href="">Contato</a>
            </nav>
        </header>    
    )  
}