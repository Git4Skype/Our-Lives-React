import store from "../app/store";
import { setMessage } from "../features/message/messageSlice";
import { traverseForward } from "./traverseForward";

export function updateUI () {
    const state = store.getState();
    const throwState = state.throwState;
    const playerIndex = state.currentPlayer.currentPlayer;
    const playersArray = state.players.players;


    switch(throwState.status) {
        case 0:
            store.dispatch(setMessage(`${playersArray[playerIndex].name} neither lost or gained a life.`));
            break;
        case 1:
            store.dispatch(setMessage(`${playersArray[playerIndex].name} lost ${Math.abs(throwState.noLives)} life/lives.`));
            break;
        case 2:
            store.dispatch(setMessage(`${playersArray[playerIndex].name} gained ${throwState.noLives} life/lives.`));
            break;
        default:
            console.log ("invalid state status");
    }

    if(!traverseForward(playerIndex, true)) traverseForward(0, true);
}