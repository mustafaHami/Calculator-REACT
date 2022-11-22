import React from "react";
import Board from './board.js'

const Calculator = () => {
    const status = 'Calculatrice'
    return (
        <div className='container'> 
            <h3>{status}</h3>
            <div className='calculator'>
                <Board/>
            </div>
        </div>
    );
}
export default Calculator;