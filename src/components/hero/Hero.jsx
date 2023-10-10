/* import SideScroll from '../sidescroll/SideScroll' */
// styles
import './Hero.scss'

// eslint-disable-next-line react/prop-types
const Hero = ({lights}) => {

    lights ? console.log('on') : console.log('off')

    return (
        <div className='hero'>
            {/* <SideScroll /> */}  
           
        </div>
    )
}

export default Hero