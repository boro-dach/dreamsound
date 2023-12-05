import React from "react";
import Header from "./Header";
import {Link} from "react-router-dom"

import '../styles/css/dreamside/beatpage.css'

export default function BeatPage(props){
    return(
    <div className="beatpage">
        <Header text="@dreamside"/>
        <div className="beat">
            <div className="beat_text">
                <h1 className="beatname">{props.beatname}</h1>
                <p className="by">by:</p>
                <h2 className="authors"><span className="main_author">{props.main_author}</span> <span className="add_author">{props.add_author1} {props.add_author2} {props.add_author3}</span></h2>
            </div>
            <img className="image" src="/img/pic.jpg" alt=""/>
            <div className="buy">
                <h1 className="buy__title">Buy:</h1>
                <div className="buy__variants">
                    <Link className="buy__var" to="/">
                        <p className="buy__inner">mp3 leasing</p><p className="var__price">{props.price_mp3}₽</p>
                    </Link>
                    <Link className="buy__var" to="/">
                        <p className="buy__inner">wav leasing</p><p className="var__price">{props.price_wav}₽</p>
                    </Link>
                    <Link className="buy__var" to="/">
                        <p className="buy__inner">exclusive</p><p className="var__price">{props.price_exc}₽</p>
                    </Link>    
                </div> 
            </div>
        </div>
    </div>
    )
}