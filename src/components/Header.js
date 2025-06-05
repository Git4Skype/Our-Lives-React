import {Col, Row, Container} from "reactstrap";
import StartBtn from './StartBtn';
import TitleCard from './TitleCard';
import Dice from './Dice';

const Header = () => {



    return (
        <Container>
            <Row>
                <Col md="1">
                    <StartBtn />
                </Col>
                <Col md="10" className = "d-flex justify-content-center align-self-center">
                    <TitleCard/>
                </Col>
                <Col md="1">
                    <Dice />
                </Col>
            </Row>
        </Container>
    );
};

export default Header;