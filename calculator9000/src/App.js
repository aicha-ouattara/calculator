import React, {Component} from 'react';
import MagnificientEqualButton from './components/MagnificientEqualButton';
import './App.css';
import BeautifullScreen from './components/BeautifullScreen';
import AmazingNumberButton from './components/AmazingNumberButton';

class App extends Component {
  constructor() {
    super();
    this.state = { data: ''}
  }

  calculate = () => {
    try {
      const result = eval(this.state.data);
      this.setState({data: result});
    } catch (e) {
      this.setState({data: 'Tu as fait une erreur !'})
    }
  }

  handleClick = e => {
    const value = e.target.getAttribute('data-value');
    switch(value) {
      case 'clearly':
        this.setState({ data: ''});
        break;
      case 'equalize':
        this.calculate();
        break;
      default:
        this.setState({ data: this.state.data + value});
    }
  }
  render(){
    return(
        <div className="Calculator">
          <BeautifullScreen data={this.state.data}/>
          <AmazingNumberButton>
            <MagnificientEqualButton onClick={this.handleClick} label="C" value="clearly" />
            <MagnificientEqualButton onClick={this.handleClick} label="7" value="7" />
            <MagnificientEqualButton onClick={this.handleClick} label="4" value="4" />
            <MagnificientEqualButton onClick={this.handleClick} label="1" value="1" />
            <MagnificientEqualButton onClick={this.handleClick} label="0" value="0" />

            <MagnificientEqualButton onClick={this.handleClick} label="/" value="/" />
            <MagnificientEqualButton onClick={this.handleClick} label="8" value="8" />
            <MagnificientEqualButton onClick={this.handleClick} label="5" value="5" />
            <MagnificientEqualButton onClick={this.handleClick} label="2" value="2" />
            <MagnificientEqualButton onClick={this.handleClick} label="." value="." />

            <MagnificientEqualButton onClick={this.handleClick} label="x" value="*" />
            <MagnificientEqualButton onClick={this.handleClick} label="9" value="9" />
            <MagnificientEqualButton onClick={this.handleClick} label="6" value="6" />
            <MagnificientEqualButton onClick={this.handleClick} label="3" value="3" />
            <MagnificientEqualButton onClick={this.handleClick} label="" value="null" />

            <MagnificientEqualButton onClick={this.handleClick} label="-" value="-" />
            <MagnificientEqualButton onClick={this.handleClick} label="+" size="2" value="+" />
            <MagnificientEqualButton onClick={this.handleClick} label="=" size="2" value="equalize" className="equalbuton"/>
          </AmazingNumberButton>
        </div>
    );
  }
}

export default App;