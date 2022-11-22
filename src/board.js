
import React from 'react';
import Button from './button.js'


class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            valeur : '',
            egale : false,
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
        var egale = this.state.egale
        if(egale){val = ''; egale = false;} // mettre la valeur à null quand la personne appuie sur égale
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
            egale = true
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
            egale : egale
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
export default Board;