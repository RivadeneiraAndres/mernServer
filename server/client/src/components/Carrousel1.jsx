import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Container,
    Row,
    Col
} from 'reactstrap';
//import '../css/Carrusel.css';

import img1 from '../images/uno.png';
import img2 from '../images/dos.png';
import img3 from '../images/tres.png';
import img4 from '../images/cuatro.png';
import img5 from '../images/cinco.png';
import img6 from '../images/seis.png';


const items = [
    [ //empieza array sub 0
        {
            src: require('../images/uno.png'),
            altText: 'Slide 1',
            caption: 'Slide 1'
        },
        {
            src: img2,
            altText: 'Slide 2',
            caption: 'Slide 2'
        },
        {
            src: img3,
            altText: 'Slide 3',
            caption: 'Slide 3'
        },
        {
            src: img4,
            altText: 'Slide 4',
            caption: 'Slide 4'
        }
    ], //empieza array sub 1
    [{
            src: img5,
            altText: 'Slide 5',
            caption: 'Slide 6'
        },
        {
            src: img6,
            altText: 'Slide 6',
            caption: 'Slide 6'
        },
        {
            src: img1,
            altText: 'Slide 7',
            caption: 'Slide 7'
        },
        {
            src: img2,
            altText: 'Slide 8',
            caption: 'Slide 8'
        }
    ], //empieza array sub 2
    [{
            src: img3,
            altText: 'Slide 9',
            caption: 'Slide 9'
        },
        {
            src: img4,
            altText: 'Slide 10',
            caption: 'Slide 10'
        },
        {
            src: img5,
            altText: 'Slide 11',
            caption: 'Slide 11'
        },
        {
            src: img6,
            altText: 'Slide 12',
            caption: 'Slide 12'
        }
    ]
];

const Carrusel = (props) => {
        const [activeIndex, setActiveIndex] = useState(0);
        const [animating, setAnimating] = useState(false);

        const next = () => {
            if (animating) return;
            const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
            setActiveIndex(nextIndex);
        }

        const previous = () => {
            if (animating) return;
            const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
            setActiveIndex(nextIndex);
        }

        const goToIndex = (newIndex) => {
            if (animating) return;
            setActiveIndex(newIndex);
        }

        const slides = items.map((item, i) => {

                return ( <
                    Container >
                    <
                    CarouselItem onExiting = {
                        () => setAnimating(true) }
                    onExited = {
                        () => setAnimating(false) }
                    key = { i } >
                    <
                    Row >
                    <
                    div className = "itemcaru" > {
                        item.map((element, i) => {
                                return ( < Col xs = "6" >
                                    <
                                    div className = "imagen" /*{(i%2===0)?"izq":"der"}*/ >
                                    <
                                    img src = { element.src }
                                    alt = { element.altText }
                                    /> <
                                    CarouselCaption captionText = { item.caption }
                                    captionHeader = { item.caption }
                                    /> <
                                    /div> <
                                    /Col>)

                                })
                        } <
                        /div> <
                        /Row> <
                        /CarouselItem> <
                        /Container>



                    )


                });

            return ( <
                Carousel activeIndex = { activeIndex }
                next = { next }
                previous = { previous } >
                <
                CarouselIndicators items = { items }
                activeIndex = { activeIndex }
                onClickHandler = { goToIndex }
                />

                { slides }

                <
                CarouselControl direction = "prev"
                directionText = "Previous"
                onClickHandler = { previous }
                /> <
                CarouselControl direction = "next"
                directionText = "Next"
                onClickHandler = { next }
                /> <
                /Carousel>
            );
        }

        export default Carrusel;
        // {
        //   item.map((image,index)=>{
        //     return (
        //     <Col xs="6">
        //       <img src={image.src} alt={image.altText} />
        //       <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        //     </Col>
        //   )})
        // }