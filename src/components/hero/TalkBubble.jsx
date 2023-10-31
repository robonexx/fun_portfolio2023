import './talkbubble.scss';
import TypeWriter from '../typewriter/TypeWriter';
const TalkBubble = () => {
  return (
    <div className='talk'>
      <div className='svg_wrapper'>
        <svg
          width='441'
          height='249'
          viewBox='0 0 441 249'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_d_620_7)'>
            <path
              d='M436 113.077C436 175.527 339.988 226.153 221.552 226.153C103.116 226.153 7.10465 175.527 7.10465 113.077C7.10465 50.6261 103.116 0 221.552 0C339.988 0 436 50.6261 436 113.077Z'
              fill='#E089C9'
            />
            <path
              d='M140.329 204.226C108.399 199.38 55.6668 179.213 13.5508 231.237C-28.5652 283.261 40.9404 129.791 40.9404 129.791L74.9938 162.693C101.873 183.23 172.259 209.071 140.329 204.226Z'
              fill='#E089C9'
            />
          </g>
        </svg>
        {/* <svg className='text_wrapper'>
          <text x='20' y='35' className='text'>
            <TypeWriter />
          </text>
        </svg> */}
        <div className='text_wrapper'>
          <TypeWriter />
        </div>
      </div>
    </div>
  );
};

export default TalkBubble;
