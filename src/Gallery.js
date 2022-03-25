import React from 'react';
import './gallery.css';

import Img1 from './img/img1.png';
import Img2 from './img/img2.png';
import Img3 from './img/img3.png';
import Img4 from './img/img4.png';
import Img5 from './img/img5.png';
import Img6 from './img/img6.png';
import Img7 from './img/img7.png';
import Img8 from './img/img8.png';
import Img9 from './img/img9.png';
import Img10 from './img/img10.png';
import Img11 from './img/img11.png';
import Img12 from './img/img12.png';

const Gallery = () => 
{
    let data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
        {
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
        {
            id: 11,
            imgSrc: Img11,
        },
        {
            id: 12,
            imgSrc: Img12,
        }
    ]

    return(
        <>
        <div className="gallery">
            {
                data.map((item,index)=>{
                    return(
                        <div className="pics" key={index}>
                            <img src={item.imgSrc} style={{width: '100%'}}/>
                        </div>
                    )
                })
            }

        </div>
        </>
    )
}

export default Gallery