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

            <button 
                aria-label='abrir menu de navegação' 
                aria-expanded={isMenuOpen} 
                aria-controls='mobile-menu'
                onClick={()=>setIsMenuOpen(true)}
            >
                <img src={isMenuOpen? closeIcon:menuIcon} />
            </button>

            <aside 
                id='mobile-menu'
            >
                <a href="">Sobre</a>
                <a href="">Habilidades</a>
                <a href="">Projetos</a>
                <a href="">Contato</a>
            </aside>

        </header>    
    )  
}
