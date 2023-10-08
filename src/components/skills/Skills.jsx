import './Skills.scss';
import Gta1 from '../../assets/images/gtaimage/gta1.jpg';
import Gta2 from '../../assets/images/gtaimage/gta2.jpg';
import Gta3 from '../../assets/images/gtaimage/gta3.jpg';
import Gta4 from '../../assets/images/gtaimage/gta4.jpg';
import Gta5 from '../../assets/images/gtaimage/gta5.jpg';
import Gta6 from '../../assets/images/gtaimage/gta6.jpg';
import Js from '../../assets/images/techimages/js.png';
import Html from '../../assets/images/techimages/html.png';
import Css from '../../assets/images/techimages/css.png';
import ReactImg from '../../assets/images/techimages/react.png';
import Node from '../../assets/images/techimages/node.png';
import Github from '../../assets/images/techimages/github.png';

const skillCard = () => {

}

 const Skills = () => {
  return (
    <div className='card-container'>
      <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={Gta1} alt='' />
          </div>
          <div className='card-back'>
            <img src={Js} alt='' />
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={Gta2} alt='' />
          </div>
          <div className='card-back'>
            <img src={Html} alt='' />
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={Gta3} alt='' />
          </div>
          <div className='card-back'>
            <img src={Css} alt='' />
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={Gta4} alt='' />
          </div>
          <div className='card-back'>
            <img src={ReactImg} alt='' />
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={Gta5} alt='' />
          </div>
          <div className='card-back'>
            <img src={Node} alt='' />
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={Gta6} alt='' />
          </div>
          <div className='card-back'>
            <img src={Github} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills
