import React, {Component} from 'react';
import "./css/Keypad.css";

class AmazingNumberButton extends Component {
    render(){
        return(
            <div className="Keypad">
                {this.props.children}
            </div>
        );
    }
}
export default AmazingNumberButton;