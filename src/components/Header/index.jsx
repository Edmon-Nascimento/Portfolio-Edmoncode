import './index.css'

function Header(){
    return(
        <header>
            <div className="header-container">
                <div className="logo">
                    <h1>Edmoncode</h1>
                </div>
                <nav className="links">
                    <a href='#sobre'>Sobre</a>
                    <a href='#habilidades'>Habilidades</a>
                    <a href='#projetos'>Projetos</a>
                    <a href='#contatos'>Contatos</a>
                    claro/escuro
                </nav>
                {/*Falta adicionar os caminho dos links e o alternador de tema*/}
            </div>
        </header>
    )
}

export default Header