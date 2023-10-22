/* import SideScroll from '../sidescroll/SideScroll' */
// styles
import Skills from '../skills/Skills'
import './Hero.scss'

// eslint-disable-next-line react/prop-types
const Hero = ({lights}) => {

    lights ? console.log('on') : console.log('off')

    return (
        <div className='hero'>
            {/* <SideScroll /> */}  
            <h2>Hi there I&apos;m Rubadub</h2>
            <Skills />
        </div>
    )
}

export default Hero