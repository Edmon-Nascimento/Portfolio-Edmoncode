import menuIcon from '../../assets/images/icons/bars-solid-full.svg'
import closeIcon from '../../assets/images/icons/x-solid-full.svg'
import { useState } from 'react'

const navLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#contato', label: 'Contato' },
]

export default function Header(){

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    return(
        
        <header className="sticky top-0 z-40 flex items-center justify-between py-5 px-6 sm:px-8 bg-[#1c1b2a]/95 backdrop-blur-md border-b border-[#7ff7ff]/10">
            <a href="#" className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7ff7ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1c1b2a] rounded">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white transition-colors group-hover:text-[#7ff7ff]/90">
                    EDMON<span className="text-[#7ff7ff]">CODE</span>
                </h1>
            </a>

            <button 
                aria-label={isMenuOpen ? 'fechar menu de navegação' : 'abrir menu de navegação'} 
                aria-expanded={isMenuOpen} 
                aria-controls="mobile-menu"
                onClick={() => setIsMenuOpen(prev => !prev)}
                className="flex items-center justify-center w-12 h-10 z-50 p-2 rounded-lg text-[#7ff7ff] hover:bg-[#7ff7ff]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7ff7ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1c1b2a] transition-colors lg:hidden md:w-15"
            >
                <img src={isMenuOpen ? closeIcon : menuIcon}/>
            </button>

            <nav 
                id="mobile-menu"
                className={`fixed top-0 left-0 h-screen w-64 sm:w-72 bg-[#1c1b2a] border-r border-[#7ff7ff]/10 shadow-xl shadow-black/30
                    transform transition-transform duration-300 ease-out
                    pt-24 pb-8 px-6 z-50
                    ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
                    lg:static lg:flex lg:translate-x-0 lg:h-auto lg:w-auto lg:pt-0 lg:pb-0 lg:px-0 lg:border-0 lg:shadow-none lg:bg-transparent
                `}
            >
                <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-8">
                    {navLinks.map(({ href, label }) => (
                        <li key={label}>
                            <a 
                                href={href} 
                                className="block py-3 px-4 rounded-lg text-[#e8e8e8] text-base md:text-lg hover:text-[#7ff7ff] hover:bg-[#7ff7ff]/10 transition-colors duration-200 font-medium lg:py-2 lg:px-0 lg:bg-transparent lg:hover:bg-transparent lg:relative lg:after:content-[''] lg:after:absolute lg:after:bottom-0 lg:after:left-1/2 lg:after:-translate-x-1/2 lg:after:h-0.5 lg:after:bg-[#7ff7ff] lg:after:w-0 lg:hover:after:w-full lg:after:transition-all lg:after:duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {isMenuOpen && (
                <div
                    onClick={() => setIsMenuOpen(false)}
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden w-screen h-screen"
                    aria-hidden="true"
                />
            )}
        </header>    
    )  
}
