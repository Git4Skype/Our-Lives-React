import store from "../app/store";
import { setCurrentPlayer } from "../features/players/currentPlayerSlice";
import { setNextPlayer } from "../features/players/nextPlayerSlice";


// Go foward and go to the next position
export function traverseForward(startPos, isNextPlayer){
    const state = store.getState();
    const playersArray = state.players.players;
    let nextPlayer = state.nextPlayer.nextPlayer;
    let currentPlayer = state.currentPlayer.currentPlayer;
    
    let isDeadEnd = true;

    // end of array reached, cannot traverse further forward
    if (startPos === playersArray.length - 1) return false;

    for (let i=startPos; i < playersArray.length; i++) {
        switch (isNextPlayer) {
            case true:
                // traverse to next display
                if ((playersArray[i].isAlive) && (i !== nextPlayer)){
                    isDeadEnd = false;
                    nextPlayer = i;
                    store.dispatch(setNextPlayer(nextPlayer));
                    return true;
                }
                break;
            case false:
                // traverse to next player
                if ((playersArray[i].isAlive) && (i !== currentPlayer)){
                    isDeadEnd = false;
                    currentPlayer = i;
                    store.dispatch(setCurrentPlayer(currentPlayer));
                    return true;
                }
                break;
            default:
                console.log ("error");
        }
    }

    // cannot traverse further, all players are not active going forward
    if(isDeadEnd) return false;
}