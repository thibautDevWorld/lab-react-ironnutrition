import React, { Component } from 'react';
import './FoodBox.css'


function FoodBox(props) {

    console.log(props);


    return (

       
        <div className="box" key={props.key}>
             
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={props.listOfFoods.image} alt={props.listOfFoods.name}/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{props.listOfFoods.name}</strong> <br />
                            <small>{props.listOfFoods.calories}</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value="1" />
                        </div>
                        <div className="control">
                            <button className="button is-info">
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>

    )
}


export default FoodBox;