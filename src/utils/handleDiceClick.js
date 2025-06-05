import { throwDice } from "../utils/throwDice";
import { updateUI } from "./updateUI";
import { checkForGameOver} from "./checkForGameOver";
import { incrementCurrentPlayer } from "./incrementCurrentPlayer";
import diceImg1 from "../assets/dice-1.png";
import diceImg2 from "../assets/dice-2.png";
import diceImg3 from "../assets/dice-3.png";
import diceImg4 from "../assets/dice-4.png";
import diceImg5 from "../assets/dice-5.png";
import diceImg6 from "../assets/dice-6.png";
import store from "../app/store";


export const handleDiceClick = (setImgSrc) => {
    
    const state = store.getState();

    if (!state.players.players.length) return;

    console.log ("dice clicked");

    switch(throwDice ()){
        case 1:
                setImgSrc(diceImg1);
            break;
        case 2:
                setImgSrc(diceImg2);

            break;
        case 3:
                setImgSrc(diceImg3);

            break;
        case 4:
                setImgSrc(diceImg4);

            break;
        case 5:
                setImgSrc(diceImg5);

            break;
        case 6:
                setImgSrc(diceImg6);

            break;
        default:
            console.log ("invalid dice value");
    }  


    updateUI();
    
    if(checkForGameOver()) return;
    
    incrementCurrentPlayer();
    
    return;
};