import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';

function Button(props) {
    return (
        <button className='btn' onClick={props.onClick}>
            {props.value}
        </button>
    )
}
class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            valeur : '',
        }
    }
    renderButton(i){
        return (
            <Button 
                value = {i} 
                onClick={() => this.handleClick(i)} 
            />
        )
    }
    handleClick(i)
    {
        var val = this.state.valeur;
        if(i === 'x'){
            val += '*'
        }else if(i === '÷'){
            val +=  '/'
        }else if(i === '+'){
            val += '+'
        }else if(i === '-'){
            val += '-'
        }else if(i === '='){
            val = eval(val)
        }else if (i === 'AC'){
            val = ''
        }else if (i === '<'){
            var dist = val.length 
            val = val.slice(0,dist - 1)
        }else{
            val = val + i
        }
        this.setState({
            valeur : val,
        })
    }
    render() {
        return (
            <div>
                <div className='resultat'>
                    <p>{this.state.valeur}</p>
                </div>
                <div className='border-row'>
                    {this.renderButton('(')}
                    {this.renderButton(')')}
                    {this.renderButton('%')}
                    {this.renderButton('AC')}
                </div>
                <div className='border-row'>
                    {this.renderButton('7')}
                    {this.renderButton('8')}
                    {this.renderButton('9')}
                    {this.renderButton('÷')}
                </div>
                <div className='border-row'>
                    {this.renderButton('4')}
                    {this.renderButton('5')}
                    {this.renderButton('6')}
                    {this.renderButton('x')}
                </div>
                <div className='border-row'>
                    {this.renderButton('1')}
                    {this.renderButton('2')}
                    {this.renderButton('3')}
                    {this.renderButton('-')}
                </div>
                <div className='border-row'>
                    {this.renderButton('0')}
                    {this.renderButton('.')}
                    {this.renderButton('=')}
                    {this.renderButton('+')}
                </div>
                <div className='border-row'>
                    {this.renderButton('<')}
                </div>
            </div>
        )
    }
}
class Calculator extends React.Component {
    render() {
        const status = 'Calculatrice'
        return (
            <div className='container'> 
                <h3>{status}</h3>
                <div className='calculator'>
                    <Board
                        
                    />
                </div>
            </div>
        );
    }
}



const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Calculator />);