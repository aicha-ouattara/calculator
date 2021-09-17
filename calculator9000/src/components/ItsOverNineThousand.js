import React, {Component} from 'react';

class ItsOverNineThousand extends Component {
    render(){
        console.log("props", this.props);

        return(
            <div className="itsover">
                <h1>Finito pipo !</h1>
            </div>
        );
    }
}
export default ItsOverNineThousand;