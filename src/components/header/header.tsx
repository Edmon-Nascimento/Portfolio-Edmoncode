import menuIcon from '../../assets/images/icons/bars-solid-full.svg'
import closeIcon from '../../assets/images/icons/x-solid-full.svg'
import { useState } from 'react'

export default function Header(){

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    return(
        
        <header className='flex items-center justify-between py-6 px-8'>
            <div className='text-2xl z-60
                            md:text-4xl
                            lg:text-4xl
            '>
                <h1>EDMON<span className='text-[#7ff7ff]'>CODE</span></h1>
            </div>

            <button 
                aria-label='abrir menu de navegação' 
                aria-expanded={isMenuOpen} 
                aria-controls='mobile-menu'
                onClick={()=>setIsMenuOpen(prev => !prev)}
                className='w-10 z-50

                            lg:hidden                
                '
            >
                <img src={isMenuOpen? closeIcon:menuIcon} />
            </button>

            <nav 
                id='mobile-menu'
                className={`fixed top-0 left-0 h-screen w-40 bg-black
                            transform transition-transform duration-300
                            py-30 px-4 z-50
                            ${isMenuOpen? "translate-x-0" : "-translate-x-full"}

                            md:w-50

                            lg:static lg:flex lg:translate-x-0 lg:h-auto lg:w-auto
                `}
            >
                <div className='flex flex-col gap-4'>
                    <a href="">Sobre</a>
                    <a href="">Habilidades</a>
                    <a href="">Projetos</a>
                    <a href="">Contato</a>
                </div>
            </nav>

            {isMenuOpen && (
            <div
                onClick={() => setIsMenuOpen(false)}
                className="
                fixed inset-0
                bg-black/60
                backdrop-blur-sm
                transition-opacity duration-300
                z-40
                "
            />)}
        </header>    
    )  
}
