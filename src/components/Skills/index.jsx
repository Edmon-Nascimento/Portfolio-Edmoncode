import html5Icon from '../../assets/icons/html5-brands-solid-full.svg'
import css3Icon from '../../assets/icons/css3-brands-solid-full.svg'
import jsIcon from '../../assets/icons/js-brands-solid-full.svg'
import reactIcon from '../../assets/icons/react-brands-solid-full.svg'
import firebaseIcon from '../../assets/icons/firebase.png'
import typescriptIcon from '../../assets/icons/typescript.png'
import wordpressicon from '../../assets/icons/wordpress-brands-solid-full.svg'
import figmaicon from '../../assets/icons/figma-brands-solid-full.svg'

function Skills() {
  const skills = [
    { name: 'HTML5', icon: html5Icon },
    { name: 'CSS3', icon: css3Icon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'React.js', icon: reactIcon },
    { name: 'Firebase', icon: firebaseIcon },
    { name: 'TypeScript', icon: typescriptIcon },
    { name: 'WordPress', icon: wordpressicon },
    { name: 'Figma', icon: figmaicon }
  ]

  return (
    <section id="habilidades">
      <h2>Habilidades</h2>
      <div className="container-habilidades">
        {skills.map((s) => (
          <div key={s.name}>
            <p>{s.name}</p>
            <img src={s.icon} alt={s.name} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
