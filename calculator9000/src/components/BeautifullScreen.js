import React, {Component} from 'react';
import "./css/Display.css";

class BeautifullScreen extends Component {
    render(){
        return(
            <div className="Display">
                {this.props.data}
            </div>
        );
    }
}
export default BeautifullScreen;