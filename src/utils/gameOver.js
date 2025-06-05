import store from "../app/store";
import { setMessage } from "../features/message/messageSlice";

export function gameOver(){
    console.log("Game over");

    store.dispatch(setMessage("Game Over!"));

    setTimeout(() => {
                        window.location.reload();
                        }, 5000);

}

