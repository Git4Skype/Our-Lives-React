import { Card, Label, CardBody, Col, FormGroup } from 'reactstrap';
import {Formik, Field, Form } from "formik";
import { useSelector } from 'react-redux';


const Message = () => {
    const message = useSelector((state) => state.message.message);
    
    return (
        <>        
            <Label id="title">Message</Label>
            <Card style={{width: "95rem"}}>
                <CardBody>
                    <Formik
                        initialValues={{
                            msg: ''
                        }}
                   >
                        <Form>
                            <FormGroup row>
                                <Col>
                                    <Field
                                        id="msg"
                                        name='msg'
                                        value={message}
                                        as='textarea'
                                        rows='6'
                                        className='form-control'
                                    />
                                </Col>
                            </FormGroup>
                        </Form>
                    </Formik>
                </CardBody>
            </Card>
        </>
    );
};

export default Message;


