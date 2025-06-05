import store from "../app/store";
import { traverseForward } from "./traverseForward";

export function incrementCurrentPlayer(){
    const state = store.getState();
    const currentPlayer = state.currentPlayer.currentPlayer;

    if(!traverseForward(currentPlayer, false)) traverseForward(0, false);
}