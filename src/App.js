import './css/styles.css';
import Header from './components/Header';
import InputParametersCard from './components/InputParametersCard';
import Message from './components/Message';
import PlayersList from './features/players/PlayersList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Label} from 'reactstrap';

function App() {
    return (
      <>
        <div id="banner">
          <Header/>
        </div>
        <Message/>
        <InputParametersCard/>
        <Label id="title">Players</Label>
        <PlayersList/>
      </>
    );
}

export default App;
