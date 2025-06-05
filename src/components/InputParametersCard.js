import { Card, Label, CardBody, Col, FormGroup, Button } from 'reactstrap';
import {Formik, Field, Form, ErrorMessage} from "formik";
import {validateParametersForm} from "../utils/validateParametersForm"
import {changeNoOfPlayers} from "../utils/changeNoOfPlayers"
import { handleSubmit } from '../utils/handleSubmit';
import { useState } from 'react';

const InputParametersCard = () => {

    const [enabled, setEnabled] = useState(true);

    return (
        <>        
            <Label id="title">Input Parameters</Label>
            <Card style={{width: "95rem"}}>
                <CardBody>
                    <Formik
                        initialValues={{
                            noOfPlayers: '2',
                            name1: 'Player 1',
                            name2: 'Player 2',
                            name3: '',
                            name4: '',
                            name5: '',
                            name6: '',
                            noOfLives: '4',
                            maxScore: '50'
                        }}
                        onSubmit={handleSubmit}
                        validate={validateParametersForm}
                    >

                  {({ setFieldValue, values, handleSubmit, isSubmitting }) => (
                        <Form>
                            <FormGroup row>
                                <Col md="1" className="text-end align-self-center">
                                    <Label htmlFor='noOfPlayers'>
                                        Players
                                    </Label>
                                </Col>
                                <Col md="1">
                                    <Field
                                        id = "noOfPlayers"
                                        name='noOfPlayers'
                                        as='select'
                                        className='form-control'
                                        onChange={e => changeNoOfPlayers(e, setFieldValue)}>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                    </Field>    
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="2">
                                    <Field
                                        name='name1'
                                        placeholder='Player 1 name'
                                        className='form-control'
                                    />
                                    <ErrorMessage name='name1'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </Col>
                                <Col>
                                    <Field
                                        name='name2'
                                        placeholder='Player 2 name'
                                        className='form-control'
                                    />
                                    <ErrorMessage name='name2'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </Col>
                                <Col>
                                    {values.noOfPlayers >= 3 && <Field
                                        name='name3'
                                        placeholder='Player 3 name'
                                        className='form-control'
                                    />}
                                    <ErrorMessage name='name3'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </Col>
                                <Col>
                                    {values.noOfPlayers >= 4 && <Field
                                        name='name4'
                                        placeholder='Player 4 name'
                                        className='form-control'
                                    />}
                                    <ErrorMessage name='name4'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </Col>
                                <Col>
                                    {values.noOfPlayers >= 5 && <Field
                                        name='name5'
                                        placeholder='Player 5 name'
                                        className='form-control'
                                    />}
                                    <ErrorMessage name='name5'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </Col>
                                <Col>
                                    {values.noOfPlayers >= 6 && <Field
                                        name='name6'
                                        placeholder='Player 6 name'
                                        className='form-control'
                                    />}
                                    <ErrorMessage name='name6'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                               </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label className="text-end" htmlFor='noOfLives' md='2'>
                                    Initial Number of Lives
                                </Label>
                                <Col>
                                    <Field
                                        id="noOfLives"
                                        name='noOfLives'
                                        placeholder='Initial no. of lives'
                                        className='form-control'
                                    />
                                    <ErrorMessage name='noOfLives'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </Col>
                                <Label className="text-end" htmlFor='maxScore' md='2'>
                                    Maximum Score
                                </Label>
                                <Col>
                                    <Field
                                        id="maxScore"
                                        name='maxScore'
                                        placeholder='Maximum score'
                                        className='form-control textNumber'
                                    />
                                    <ErrorMessage name='maxScore'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                               </Col>   
                                <Col>
                                    <Button type="submit" disabled={isSubmitting} color='primary'>
                                        Submit
                                    </Button>
                                </Col>
                            </FormGroup>
                         </Form>
                    )}
                    </Formik>
                </CardBody>
            </Card>
        </>
    );
};

export default InputParametersCard;