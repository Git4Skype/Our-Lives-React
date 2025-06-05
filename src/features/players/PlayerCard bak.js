import { Card, CardTitle, Label, CardBody, Col, FormGroup } from 'reactstrap';
import {Formik, Field, Form} from "formik";
import { nextPlayer } from "./nextPlayerSlice";
import { useSelector } from 'react-redux';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

async function fetchAPIdata(){
  for (let i=0; i< (option2.checked ? 2:3); i++) {

        try {
            const response1 = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${players[i].lat}&longitude=${players[i].long}`);
            const data1 = await response1.json();

            
            try {
                const response2 = await fetch(`https://restcountries.com/v2/name/${data1.countryName}`);
                const data2 = await response2.json();
                
                displayPlayerDetails(data1, data2, i);
                
            } catch (error) {
                console.error('There was an error fetching country data', error);
            }
            
            
        } catch (error) {
            console.error('There was an error fetching place data', error);
        }
    }   
}

export const fetchPlayerPlace = createAsyncThunk(
    'place/fetchPlace',
    async () => {
        const response = await fetch(https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${players[i].lat}&longitude=${players[i].long}`);
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();

        return data;
    }
);

const playerPlaceSlice = createSlice({
    name: 'place',
    initialState: { data: null, isLoading: true, errMsg: '' },
    reducers: {},
    extraReducers: {
        [fetchPlace.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchPlace.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.data = mapImageURL(action.payload);
        },
        [fetchPlace.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

function displayPlayerDetails (data1, data2, index){
    playerPlaceFields[index].value=`${data1.city}, ${data1.countryName}`;
    playerImageFields[index].src=`${data2[0].flag}`;
    playerLanguageFields[index].value=`${data2[0].languages[0].name}`;
}


const PlayerCard = ({player}) => {
    // colors
    const gameRed = "#d80032ff";
    const gameGrey = "#8d99aeff";
    const gameBlack = "#2b2d42ff";
    
    const nextPlayer = useSelector((state) => state.nextPlayer.nextPlayer);
    




    
    return (                
            <Card style={{width: "20rem"}}>
                <CardTitle id="playerName">{player.name}</CardTitle>
                <CardBody style={{ backgroundColor: player.isAlive ? (player.id === nextPlayer ? gameRed: gameGrey): gameBlack}}>
                    <Formik>
                        <Form>
                            <FormGroup row>
                                <Col md='2'>
                                    <Label htmlFor='lives'>
                                        Lives                                
                                    </Label>
                                </Col>
                                <Col>
                                    <Field
                                        id="lives"
                                        name='lives'
                                        value={player.lives}
                                        className='form-control'
                                    />
                               </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md='2'>
                                    <Label htmlFor='score'>
                                        Score
                                    </Label>
                               </Col>
                                <Col>
                                    <Field
                                        id="score"
                                        name='score'
                                        value={player.score}
                                        className='form-control'
                                    />
                               </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md='2'>
                                    <Label htmlFor='place'>
                                        Place
                                    </Label>
                                </Col>
                                <Col>
                                    <Field
                                        id="place"
                                        name='place'
                                        className='form-control'
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md='2'>
                                    <Label htmlFor='language'>
                                        Lang.
                                    </Label>
                                </Col>
                                <Col>
                                    <Field
                                        id="language"
                                        name='language'
                                        className='form-control'
                                    />
                                </Col>
                             </FormGroup>
                        </Form>
                   </Formik>
                    <div className='flag'>
                        <img className='flag-img' alt='flag of player' />
                    </div>
                </CardBody>
            </Card>
    );
};

export default PlayerCard;