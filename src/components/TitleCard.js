import { Card, CardText, CardBody } from 'reactstrap';

const TitleCard = () => {
    return (        
        <Card style={{width: "25rem"}} className="text-center" >
            <CardBody>
                <CardText  ><h1>OUR LIVES</h1></CardText>
                <CardText><h2>A Game to Die For</h2></CardText>
            </CardBody>
        </Card>
    );
};

export default TitleCard;