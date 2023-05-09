import { useState } from 'react';
import Arrow from '../../assets/arrow.svg'

function Slider(props) {
    const [slideShow, setSlideShow] = useState(0);
    const array = props.pictures;
    
    function Previous(currentSlideShow) {
        if(currentSlideShow > 0) {
            setSlideShow(currentSlideShow - 1);
        } else {
            setSlideShow(array.length - 1);
        }
    }
    function Next(currentSlideShow) {
        if(currentSlideShow < array.length - 1) {
            setSlideShow(currentSlideShow + 1);
        } else {
            setSlideShow(0);
        }
    };
    const Slide = array[slideShow];
    
    return(<div id='carousel'>
        {array.length > 1 && (<img src={Arrow} className='reverse arrow' alt='Previous' onClick={() => Previous(slideShow)}/>)}
        <img src={Slide} className='slideShow' alt=''/>
        <p className='counter'>{slideShow+1 + '/' + array.length}</p>
        {array.length > 1 && (<img src={Arrow} className='arrow' alt='Next' onClick={() => Next(slideShow)}/>)}
    </div>);
}

export default Slider;