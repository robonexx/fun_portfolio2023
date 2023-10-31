import './Hero.scss'

// eslint-disable-next-line react/prop-types
const Hero = ({lights}) => {

    lights ? console.log('on') : console.log('off')

    return (
        <div className='hero'>
            <h2>Hi there I&apos;m Rubadub</h2>
        </div>
    )
}

export default Hero