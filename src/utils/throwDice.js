import { random } from "./random";
import store from "../app/store";
import { setNoLives, setStatus, setIsDead } from "./throwStateSlice";
import { updateLives, updateScore, updateStatus } from "../features/players/playersSliceRedux";

export function throwDice (){
    let diceValue = random(6);

    const state = store.getState();
    const currentPlayer = state.currentPlayer.currentPlayer;
    const playersArray = state.players.players;

    let score = 0;
    let lives =0;
    let isAlive = true;
    let p ={id: 0, name: "", score: 0, lives: 0, lat: "", long: "", isAlive: true};
    let delta = 0;

    switch(diceValue){
        case 1:
            //On a roll of 1, player loses 2 lives and 10 from score
            // The player’s score is reset.
            score = Number(playersArray[currentPlayer].score) - 10;
            lives = Number(playersArray[currentPlayer].lives) - 2;
            p ={id: playersArray[currentPlayer].id, name: playersArray[currentPlayer].name, score: score, lives: lives, lat: playersArray[currentPlayer].lat, long: playersArray[currentPlayer].lat, isAlive: playersArray[currentPlayer].isAlive};
            store.dispatch(updateScore(p));
            store.dispatch(updateLives(p));
            store.dispatch(setStatus(1));
            delta = delta - 2;
            store.dispatch(setNoLives(delta));
            
            if (lives <= 0) {
                isAlive = false;
                p ={id: playersArray[currentPlayer].id, name: playersArray[currentPlayer].name, score: playersArray[currentPlayer].score, lives: playersArray[currentPlayer].lives, lat: playersArray[currentPlayer].lat, long: playersArray[currentPlayer].lat, isAlive: isAlive};
                store.dispatch(updateStatus(p));
                store.dispatch(setIsDead(true));
            }
            
            
            // lose a life for negative scores
            if (score < 0){
                score = 0;
                lives = Number(lives) - 1;
                p ={id: playersArray[currentPlayer].id, name: playersArray[currentPlayer].name, score: score, lives: lives, lat: playersArray[currentPlayer].lat, long: playersArray[currentPlayer].lat, isAlive: playersArray[currentPlayer].isAlive};
                store.dispatch(updateScore(p));
                store.dispatch(updateLives(p));
                store.dispatch(setStatus(1));
                delta = delta - 1;
                store.dispatch(setNoLives(delta));
                
                if (lives <= 0) {
                    isAlive = false;
                    p ={id: playersArray[currentPlayer].id, name: playersArray[currentPlayer].name, score: playersArray[currentPlayer].score, lives: playersArray[currentPlayer].lives, lat: playersArray[currentPlayer].lat, long: playersArray[currentPlayer].lat, isAlive: isAlive};
                    store.dispatch(updateStatus(p));
                    store.dispatch(setIsDead(true));
                }
            }
            
            
            break;
        case 2:
            // On a roll of 2, half the player’s score and lose a life
            score = Math.round(Number(playersArray[currentPlayer].score) / 2);
            lives = Number(playersArray[currentPlayer].lives) - 1;
            p ={id: playersArray[currentPlayer].id, name: playersArray[currentPlayer].name, score: score, lives: lives, lat: playersArray[currentPlayer].lat, long: playersArray[currentPlayer].lat, isAlive: playersArray[currentPlayer].isAlive};
            store.dispatch(updateScore(p));
            store.dispatch(updateLives(p));
            store.dispatch(setStatus(1));
            delta = delta - 1;
            store.dispatch(setNoLives(delta));
            
            if (lives <= 0) {
                isAlive = false;
                p ={id: playersArray[currentPlayer].id, name: playersArray[currentPlayer].name, score: playersArray[currentPlayer].score, lives: playersArray[currentPlayer].lives, lat: playersArray[currentPlayer].lat, long: playersArray[currentPlayer].lat, isAlive: isAlive};
                store.dispatch(updateStatus(p));
                store.dispatch(setIsDead(true));
            }
            
            
            
            break;
        case 3:
            // On a roll of 3, subtract 3 from the player’s score
            score = Number(playersArray[currentPlayer].score) - diceValue;
            p ={id: playersArray[currentPlayer].id, name: playersArray[currentPlayer].name, score: score, lives: playersArray[currentPlayer].lives, lat: playersArray[currentPlayer].lat, long: playersArray[currentPlayer].lat, isAlive: playersArray[currentPlayer].isAlive};
            store.dispatch(updateScore(p));
            lives = playersArray[currentPlayer].lives;
            store.dispatch(setNoLives(delta));
            store.dispatch(setStatus(0));
            
            // lose a life for negative scores
            if (score < 0){
                score = 0;
                lives = Number(lives) - 1;
                p ={id: playersArray[currentPlayer].id, name: playersArray[currentPlayer].name, score: score, lives: lives, lat: playersArray[currentPlayer].lat, long: playersArray[currentPlayer].lat, isAlive: playersArray[currentPlayer].isAlive};
                store.dispatch(updateScore(p));
                store.dispatch(updateLives(p));
                store.dispatch(setStatus(1));
                delta = delta - 1;
                store.dispatch(setNoLives(delta));
                
                if (lives <= 0) {
                    isAlive = false;
                    p ={id: playersArray[currentPlayer].id, name: playersArray[currentPlayer].name, score: playersArray[currentPlayer].score, lives: playersArray[currentPlayer].lives, lat: playersArray[currentPlayer].lat, long: playersArray[currentPlayer].lat, isAlive: isAlive};
                    store.dispatch(updateStatus(p));
                    store.dispatch(setIsDead(true));
                }
            }
            
            
            break;
        case 4:
            // On a roll of 4, add 4 to the player’s score
            score = Number(playersArray[currentPlayer].score) + diceValue;
            p ={id: playersArray[currentPlayer].id, name: playersArray[currentPlayer].name, score: score, lives: playersArray[currentPlayer].lives, lat: playersArray[currentPlayer].lat, long: playersArray[currentPlayer].lat, isAlive: playersArray[currentPlayer].isAlive};
            store.dispatch(updateScore(p));
            lives = playersArray[currentPlayer].lives;
            store.dispatch(setNoLives(delta));
            store.dispatch(setStatus(0));
                
            // add a life for scores of Max Score
            if (score >= state.maxScore.maxScore){                    
                score = score - state.maxScore.maxScore;
                lives = Number(lives) + 1;
                p ={id: playersArray[currentPlayer].id, name: playersArray[currentPlayer].name, score: score, lives: lives, lat: playersArray[currentPlayer].lat, long: playersArray[currentPlayer].lat, isAlive: playersArray[currentPlayer].isAlive};
                store.dispatch(updateScore(p));
                store.dispatch(updateLives(p));
                store.dispatch(setStatus(2));
                delta = Number(delta) + 1;
                store.dispatch(setNoLives(delta));
            }


            break;
        case 5:
            // On a roll of 5, double the player’s score and add a life
            score = playersArray[currentPlayer].score * 2;
            lives = Number(playersArray[currentPlayer].lives) + 1;
            p ={id: playersArray[currentPlayer].id, name: playersArray[currentPlayer].name, score: score, lives: lives, lat: playersArray[currentPlayer].lat, long: playersArray[currentPlayer].lat, isAlive: playersArray[currentPlayer].isAlive};
            store.dispatch(updateScore(p));
            store.dispatch(updateLives(p));
            store.dispatch(setStatus(2));
            delta = Number(delta) + 1;
            store.dispatch(setNoLives(delta));            
            
            // add a life for scores of Max Score
            if (score >= state.maxScore.maxScore){
                lives = Number(lives) + 1;
                score = score - state.maxScore.maxScore;
                p ={id: playersArray[currentPlayer].id, name: playersArray[currentPlayer].name, score: score, lives: lives, lat: playersArray[currentPlayer].lat, long: playersArray[currentPlayer].lat, isAlive: playersArray[currentPlayer].isAlive};
                store.dispatch(updateLives(p));
                store.dispatch(updateScore(p));
                delta = Number(delta) + 1;
                store.dispatch(setNoLives(delta));            
            }
            
            
            
            break;
        
        case 6:
            // On a roll of 6, player gets two lives and increase score by 10
            lives = Number(playersArray[currentPlayer].lives) + 2;
            score = Number(playersArray[currentPlayer].score) + 10;
            p ={id: playersArray[currentPlayer].id, name: playersArray[currentPlayer].name, score: score, lives: lives, lat: playersArray[currentPlayer].lat, long: playersArray[currentPlayer].lat, isAlive: playersArray[currentPlayer].isAlive};
            store.dispatch(updateLives(p));
            store.dispatch(updateScore(p));
            store.dispatch(setStatus(2));
            delta = Number(delta) + 2;
            store.dispatch(setNoLives(delta));    

            if (score >= state.maxScore.maxScore){
                lives = Number(lives) + 1;
                score = score - state.maxScore.maxScore;
                p ={id: playersArray[currentPlayer].id, name: playersArray[currentPlayer].name, score: score, lives: lives, lat: playersArray[currentPlayer].lat, long: playersArray[currentPlayer].lat, isAlive: playersArray[currentPlayer].isAlive};
                store.dispatch(updateLives(p));
                store.dispatch(updateScore(p));
                delta = Number(delta) + 1;
                store.dispatch(setNoLives(delta));            }

            
            break;
            default:
                console.log("dice gave an incorrect value");

    }
    return (diceValue);
}
