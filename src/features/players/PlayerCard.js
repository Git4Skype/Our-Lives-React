import { Card, CardTitle, Label, CardBody, Col, FormGroup } from 'reactstrap';
import {Formik, Field, Form} from "formik";
import { nextPlayer } from "./nextPlayerSlice";
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';



const PlayerCard = ({player}) => {

    const [isLoading1, setLoading1] = useState(true);
    const [data1, setData1] = useState(null);
    const [errMsg1, setErrMsg1] = useState('');

    const [isLoading2, setLoading2] = useState(true);
    const [data2, setData2] = useState(null);
    const [errMsg2, setErrMsg2] = useState('');

    // colors
    const gameRed = "#d80032ff";
    const gameGrey = "#8d99aeff";
    const gameBlack = "#2b2d42ff";
    
    const nextPlayer = useSelector((state) => state.nextPlayer.nextPlayer);
    
    useEffect(() => {
        const asyncFetch = async () => {
            try {
                const response1 = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${player.lat}&longitude=${player.long}`);

                if (!response1.ok) {
                    throw new Error(response1.status);
                }

                const fetchedData1 = await response1.json();

                setLoading1(false);
                setData1(fetchedData1);
                setErrMsg1('');

 
                try {
                    const response2 = await fetch(`https://restcountries.com/v2/name/${fetchedData1.countryName}`);
                    if (!response2.ok) {
                        throw new Error(response1.status);
                    }

                    const fetchedData2 = await response2.json();

                    setLoading2(false);
                    setData2(fetchedData2);
                    setErrMsg2('');
                }
                catch (err) {
                    setLoading2(false);
                    setErrMsg1(err.toString());
                }
            } catch (err) {
                setLoading1(false);
                setErrMsg1(err.toString());
            }
        };
        asyncFetch();
    }, []);

    if (isLoading1 || isLoading2) {
        return <h1>loading...</h1>;
    }
    if (errMsg1) {
        return (
            <div>
                <h1>whoopsie!: that was a bad request</h1>
                <p>{errMsg1}</p>
            </div>
        );
    }else if (errMsg2) {
        return (
            <div>
                <h1>whoopsie!: that was a bad request</h1>
                <p>{errMsg2}</p>
            </div>
        );
    }

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
                                        value={data1.countryName}
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
                                        value={data2[0].languages[0].name}
                                    />
                                </Col>
                             </FormGroup>
                        </Form>
                   </Formik>
                    <div className='flag'>
                        <img 
                            className='flag-img' 
                            alt='flag of player'
                            src = {data2[0].flag} />
                    </div>
                </CardBody>
            </Card>
    );
}



export default PlayerCard;