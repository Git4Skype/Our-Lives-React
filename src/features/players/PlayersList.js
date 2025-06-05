import { Col, Row, } from 'reactstrap';
import PlayerCard from "./PlayerCard";
//import { selectAllPlayers } from './playersSlice';
import { selectAllPlayers } from './playersSliceRedux';
import { useSelector } from 'react-redux';

const PlayersList = () => {
    
    const players = useSelector(selectAllPlayers);
   


    
    if (players.length) return (<Row className='ms-auto'>
                            {players.map((player) => {
                                return (
                                        <Col md='3' className='m-4' key={player.id}>
                                        <PlayerCard player={player} />
                                        </Col>
                                    );
                        })}
                        </Row>);
    else return( <div>No players registered yet</div>);
};

export default PlayersList;

