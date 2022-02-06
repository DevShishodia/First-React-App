import { Component } from "react";
import "./Card.css";

class Card extends Component{
    render(){
    return(
        <div className="Apps">
        <div className="ctns">
            <h1>Card Heading</h1>
            <p>Card Content</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni asperiores culpa quasi officiis ipsa maxime magnam aliquid numquam doloremque rem?</p>
        </div>
      </div>         
    )
    }
}

export default Card;