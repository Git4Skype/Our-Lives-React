export const changeNoOfPlayers = (e, setFieldValue) => {
    switch(Number(e.target.value)){
        case 2:
             setFieldValue("noOfPlayers", "2");
             setFieldValue('name1', 'Player 1');
             setFieldValue('name2', 'Player 2');
             setFieldValue('name3', '');
             setFieldValue('name4', '');
             setFieldValue('name5', '');
             setFieldValue('name6', '');
           break;    
        case 3:
            setFieldValue("noOfPlayers", "3");
            setFieldValue('name1', 'Player 1');
            setFieldValue('name2', 'Player 2');
            setFieldValue('name3', 'Player 3');
            setFieldValue('name4', '');
            setFieldValue('name5', '');
            setFieldValue('name6', '');
            break;   
        case 4:
            setFieldValue("noOfPlayers", "4");
            setFieldValue('name3', 'Player 3');
            setFieldValue('name4', 'Player 4');
            setFieldValue('name5', '');
            setFieldValue('name6', '');
            break;   
        case 5:
            setFieldValue("noOfPlayers", "5");
            setFieldValue('name3', 'Player 3');
            setFieldValue('name4', 'Player 4');
            setFieldValue('name5', 'Player 5');
            setFieldValue('name6', '');
        break;   
        case 6:
            setFieldValue("noOfPlayers", "6");
            setFieldValue('name3', 'Player 3');
            setFieldValue('name4', 'Player 4');
            setFieldValue('name5', 'Player 5');
            setFieldValue('name6', 'Player 6');
            break;       
        default:
            console.log ("invalid selection of number of players");   
    }

    return;
};