import store from "../app/store";
import { gameOver} from "./gameOver";

export function checkForGameOver(){
    const state = store.getState();
    const playersArray = state.players.players;

    let playersAlive = 0;

    for (let i=0; i< playersArray.length; i++) { 
        if (playersArray[i].isAlive) {
            playersAlive++;
        }
    }

    if (playersAlive === 1) {
        gameOver();
        return true;
    }

    return false;
}