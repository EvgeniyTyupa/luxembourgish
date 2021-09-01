import React from 'react'
import Slider from 'react-slick';
import { useComments } from '../../../Hooks/useComments';
import Comment from '../Comment';

const SliderComments = (props) => {

    const comments = useComments()

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return(
        <Slider {...settings}>
            {comments.map(item => <Comment key={item.id} item={item}/>)}
        </Slider>
    )
}

export default SliderComments