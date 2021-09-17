import React, {Component} from 'react';

class ItsOverNineThousand extends Component {
    render(){
        return(
            <div className="itsover">
                {this.props.data}
            </div>
        );
    }
}
export default ItsOverNineThousand;