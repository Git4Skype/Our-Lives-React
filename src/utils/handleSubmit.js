import store from "../app/store";
import { random } from "../utils/random";
import { addPlayer} from "../features/players/playersSliceRedux";
import { setMessage } from "../features/message/messageSlice";
import { setMaxScore } from "../features/players/maxScoreSlice";
import { setCurrentPlayer } from "../features/players/currentPlayerSlice";



export const handleSubmit = (values, actions) => {


    class Player {
        constructor(id, name, lives=4, lat, long, score=0,  isAlive=true){
            this.id = id;
            this.name = name;
            this.score = score;
            this.lives = lives;
            this.lat = lat;
            this.long = long;
            this.isAlive = isAlive;
        }
    }

    // Kathmandu (Nepal), Paris (France), Sydney (Australia),  Lima (Peru), Stockholm (Sweden), Santiago (Chile), Lagos (Nigeria), Jakarta (Indonesia), Istanbul (Turkey), Tashkent (Uzbekistan), Nairobi (Kenya), Muscat (Oman)
    const latLongs = [ {lat: "27.9506", long: "82.4572"}, {lat: "48.8566", long: "2.3522"}, {lat: "-33.8688", long: "151.2093"}, {lat: "-12.0464", long: "-77.0428"}, {lat: "59.3293", long: "18.0686"}, {lat: "-33.4489", long: "-70.6693"}, {lat: "6.5244", long: "3.3792"}, {lat: "-6.2088", long: "106.8456"}, {lat:"41.0082", long: "28.9784"}, {lat: "41.2995", long: "69.2401"}, {lat: "1.2921", long: "36.8219"}, {lat: "23.5880", long: "58.3829"}]; 

    let randomLatLongIndex = random(latLongs.length) - 1;

    // create a player0 object
    const player0 = new Player(0, values.name1, values.noOfLives, latLongs[randomLatLongIndex].lat, latLongs[randomLatLongIndex].long);
    const p0 ={id: player0.id, name: player0.name, score: player0.score, lives: player0.lives, lat: player0.lat, long: player0.long, isAlive: player0.isAlive};
    
    store.dispatch(addPlayer(p0));
    
    randomLatLongIndex = random(latLongs.length) - 1;
    
    // create a player1 object
    const player1 = new Player(1, values.name2, values.noOfLives, latLongs[randomLatLongIndex].lat, latLongs[randomLatLongIndex].long);
    const p1 ={id: player1.id, name: player1.name, score: player1.score, lives: player1.lives, lat: player1.lat, long: player1.long, isAlive: player1.isAlive};
    
    store.dispatch(addPlayer(p1));
    
    randomLatLongIndex = random(latLongs.length) - 1;
    // create a player2 object
    const player2 = new Player(2, values.name3, values.noOfLives, latLongs[randomLatLongIndex].lat, latLongs[randomLatLongIndex].long);
    const p2 ={id: player2.id, name: player2.name, score: player2.score, lives: player2.lives, lat: player2.lat, long: player2.long, isAlive: player2.isAlive};
    
    randomLatLongIndex = random(latLongs.length) - 1;
    // create a player3 object
    const player3 = new Player(3, values.name4, values.noOfLives, latLongs[randomLatLongIndex].lat, latLongs[randomLatLongIndex].long);
    const p3 ={id: player3.id, name: player3.name, score: player3.score, lives: player3.lives, lat: player3.lat, long: player3.long, isAlive: player3.isAlive};
    
    randomLatLongIndex = random(latLongs.length) - 1;
    // create a player4 object
    const player4 = new Player(4, values.name5, values.noOfLives, latLongs[randomLatLongIndex].lat, latLongs[randomLatLongIndex].long);
    const p4 ={id: player4.id, name: player4.name, score: player4.score, lives: player4.lives, lat: player4.lat, long: player4.long, isAlive: player4.isAlive};
    
    randomLatLongIndex = random(latLongs.length) - 1;
    // create a player5 object
    const player5 = new Player(5, values.name6, values.noOfLives, latLongs[randomLatLongIndex].lat, latLongs[randomLatLongIndex].long);
    const p5 ={id: player5.id, name: player5.name, score: player5.score, lives: player5.lives, lat: player5.lat, long: player5.long, isAlive: player5.isAlive};
    
    
    switch(Number(values.noOfPlayers)) {
        case 2:
            break;
        case 3:
            store.dispatch(addPlayer(p2));
            
            break;
        case 4:                      
            store.dispatch(addPlayer(p2));
            store.dispatch(addPlayer(p3));
            
            break;
        case 5:
            store.dispatch(addPlayer(p2));
            store.dispatch(addPlayer(p3));
            store.dispatch(addPlayer(p4));
            
            break;
        case 6:
            store.dispatch(addPlayer(p2));
            store.dispatch(addPlayer(p3));
            store.dispatch(addPlayer(p4));
            store.dispatch(addPlayer(p5));

            break;
        default:
            console.log ("invalid number of players selected");            

    }

    store.dispatch(setMessage("Input paramters entered. Click dice to play the game."));
    
    store.dispatch(setMaxScore(values.maxScore));

    store.dispatch(setCurrentPlayer(0));

    actions.setSubmitting(true); // disables the submit button
};
