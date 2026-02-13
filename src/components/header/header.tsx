import menuIcon from '../../assets/images/icons/bars-solid-full.svg'
import closeIcon from '../../assets/images/icons/x-solid-full.svg'
import { useState } from 'react'

export default function Header(){

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    return(
        
        <header>
            <div>
                <h1>EDMONCODE</h1>
            </div>

            {/* Menu mobile */}

            <button 
                aria-label='abrir menu de navegação' 
                aria-expanded={isMenuOpen} 
                aria-controls='mobile-menu'
                onClick={()=>setIsMenuOpen(true)}
            >
                <img src={menuIcon} />
            </button>

            <aside 
                id='mobile-menu'
            >
                <button
                    aria-label='fechar menu de navegação'
                    onClick={()=>setIsMenuOpen(false)}
                >
                    <img src={closeIcon} />
                </button>
                <a href="">Sobre</a>
                <a href="">Habilidades</a>
                <a href="">Projetos</a>
                <a href="">Contato</a>
            </aside>

            <div onClick={()=>setIsMenuOpen(false)}>
            </div>

            {/* Menu desktop */}            
            <nav>
                <a href="">Sobre</a>
                <a href="">Habilidades</a>
                <a href="">Projetos</a>
                <a href="">Contato</a>
            </nav>
        </header>    
    )  
}
