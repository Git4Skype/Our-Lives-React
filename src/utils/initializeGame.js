import { setMessage } from "../features/message/messageSlice";
import store from '../app/store';

export const initializeGame = (event, setStartEnabled) => {
    store.dispatch(setMessage("Enter input parameters."));

    setStartEnabled (false);


    return;
};
