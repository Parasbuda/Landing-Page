import React from 'react'
import "../CardItems/CardItems.css"
import {Link} from "react-router-dom"
const CardItem = ({src,text,label,path}) => {
    return (
        <React.Fragment>
            <li className="cards__item">
                <Link className="cards__item__link" to={path}>
                    <figure className="cards__item__pic" data-category={label}>
                        <img src={src} alt="ocesn" className="cards__item__img"/>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{text}</h5>
                    </div>
                </Link>
            </li>
       </React.Fragment>
    )
}

export default CardItem
