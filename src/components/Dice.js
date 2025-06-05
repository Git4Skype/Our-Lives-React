import { handleDiceClick } from '../utils/handleDiceClick';
import diceImg1 from "../assets/dice-1.png";
import { useState } from 'react';


const Dice = () => {
    const [imgSrc, setImgSrc] = useState(diceImg1);
    
    return (
        <div className='dice' onClick={ () => handleDiceClick(setImgSrc) }>
            <img id="imgDice" className='dice-img' src={imgSrc} alt='dice of value 1'  />
        </div>
    );
   
}

export default Dice;