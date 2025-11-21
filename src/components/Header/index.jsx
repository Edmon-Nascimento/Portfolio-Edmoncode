import { useState, useEffect } from 'react'
import './index.css'

function Header(){
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        function handleResize(){
            if(window.innerWidth > 768 && menuOpen){
                setMenuOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [menuOpen])

    function toggleMenu(){
        setMenuOpen(prev => !prev)
    }

    function handleLinkClick(){
        if(menuOpen){
            setMenuOpen(false)
        }
    }

    return(
        <header>
            <div className="header-container">
                <div className="logo">
                    <h1>Edmoncode</h1>
                </div>
                <button
                    className="menu-toggle"
                    aria-label="Abrir menu"
                    aria-expanded={menuOpen}
                    onClick={toggleMenu}
                >
                    <span className="bar" />
                    <span className="bar" />
                    <span className="bar" />
                </button>
                <nav className={`links ${menuOpen ? 'open' : ''}`}>    
                    <a href='#sobre' onClick={handleLinkClick}>Sobre</a>
                    <a href='#habilidades' onClick={handleLinkClick}>Habilidades</a>
                    <a href='#projetos' onClick={handleLinkClick}>Projetos</a>
                    <a href='#contatos' onClick={handleLinkClick}>Contatos</a>
                </nav>
            </div>
        </header>
    )
}

export default Header