import profile from '../assets/images/profile.png'
import cv from '../assets/doc/Currículo - Edmon Nascimento.pdf'
import { skills } from '../data/skillsdata'

export default function Home(){
    return(
        <main>
            <div>
                <div>
                    <div>
                        <img src={profile} alt="Edmon Nascimento - Desenvolvedor front-end" />
                        <div>
                            <h2>Edmon Nascimento</h2>
                            <p>Desenvolvedor front-end</p>
                        </div>
                    </div>
                    
                    <div>
                        <button>
                            <a href={cv}>Baixar CV</a>
                        </button>
                    </div>
                </div>

                <div>
                    <p>Desenvolvedor Front-end focado em criar interfaces modernas, acessíveis e performáticas, com código limpo, organizado e escalável.</p>

                    <p>Atuo principalmente com JavaScript, TypeScript e React, aplicando boas práticas de componentização, semântica e organização de projetos.</p>

                    <p>Em constante evolução, estudo arquitetura e padrões de mercado para me tornar Fullstack, valorizando consistência e prática contínua.</p>

                    <p>Busco criar soluções que gerem impacto real e entreguem valor para quem utiliza.</p>
                </div>
            
            </div>   

            <h2>Habilidades</h2>
            <div>
                {skills.map((skill)=>(
                    <div key={skill.id}>
                        <img src={skill.image} alt={skill.alt} />
                    </div>
                ))}
            </div>

        </main>
    )
}
