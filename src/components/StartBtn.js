import {Button} from "reactstrap";
import {initializeGame} from "../utils/initializeGame"
import {useState} from "react";

const StartBtn = () => {
  const [startEnabled, setStartEnabled] = useState(true);
  
  return (
        <div className = "start" >
            <Button onClick={ startEnabled? (e) => initializeGame(e, setStartEnabled): null} 
                              id = "startBtn" 
                              className = "startBtn" >
                                START
                                </Button>
        </div>
  );
}

export default StartBtn;