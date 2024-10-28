
import reactIcon from './skills_images/React_icon.PNG';
import javascriptIcon from './skills_images/JavaScript_icon.PNG';
import htmlIcon from './skills_images/HTML_icon.PNG';
import cssIcon from './skills_images/CSS_icon.PNG';
import phpIcon from './skills_images/PHP_icon.PNG';
import gitIcon from './skills_images/Git_icon.PNG';
import spainIcon from './skills_images/Spain_icon.PNG';
import ukIcon from './skills_images/UK_icon.PNG';
import galiciaIcon from './skills_images/Galicia_icon.PNG';
const skillsData = {
  frontend: [
    {
      title: "React",
      image: reactIcon,
      description: "Nivel: intermedio",
      level: 33
    },
    {
      title: "JavaScript",
      image: javascriptIcon,
      description: "Nivel: intermedio",
      level: 40
    },
    {
      title: "HTML",
      image: htmlIcon,
      description: "Nivel: intermedio",
      level: 33
    },

    {
      title: "CSS",
      image: cssIcon,
      description: "Nivel: básico",
      level: 10
    }
  ],
  backend: [    {
    title: "PHP",
    image: phpIcon,
    description: "Nivel: básico",
    level: 15
  },{
    title: "Git",
    image: gitIcon,
    description: "Nivel: básico",
    level: 5
  }],
  languages: [ {
    title: "Español",
    image: spainIcon,
    description: "Nivel: Nativo",
    level: 100
  },{
    title: "Inglés",
    image: ukIcon,
    description: "Nivel: Fluido",
    level: 90
  },
  {
    title: "Gallego",
    image: galiciaIcon,
    description: "Nivel: Nativo",
    level: 100
  }  ]
};

export default skillsData;