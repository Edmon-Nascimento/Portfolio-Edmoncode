import styles from './header.module.css'
import menuIcon from '../../assets/images/icons/bars-solid-full.svg'
import closeIcon from '../../assets/images/icons/x-solid-full.svg'
import { useState } from 'react'

export default function Header(){

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    return(
        
        <header>
            <div className={`${styles.name} ${isMenuOpen? styles.hideName: ""}`}>
                <h1>EDMONCODE</h1>
            </div>

            {/* Menu mobile */}

            <button 
                className={styles.menuBtn} 
                aria-label='abrir menu de navegação' 
                aria-expanded={isMenuOpen} 
                aria-controls='mobile-menu'
                onClick={()=>setIsMenuOpen(true)}
                >
                <img 
                    src={menuIcon} 
                    className={isMenuOpen? styles.inactive : styles.active}
                />
            </button>

            <aside 
                id='mobile-menu'
                className={isMenuOpen? styles.active: ""}
            >
                <button
                    className={styles.menuBtn}
                    aria-label='fechar menu de navegação'
                    onClick={()=>setIsMenuOpen(false)}
                >
                    <img 
                        src={closeIcon} 
                    />
                </button>
                <a href="">Sobre</a>
                <a href="">Habilidades</a>
                <a href="">Projetos</a>
                <a href="">Contato</a>
            </aside>

            <div 
                className={`${styles.overlay} ${isMenuOpen? styles.active : ""}`} onClick={()=>setIsMenuOpen(false)}
            >
            </div>


            {/* Menu desktop */}            
            <nav 
                className={styles.links}
            >
                <a href="">Sobre</a>
                <a href="">Habilidades</a>
                <a href="">Projetos</a>
                <a href="">Contato</a>
            </nav>
        </header>    
    )  
}