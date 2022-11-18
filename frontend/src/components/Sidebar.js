import { Col, ListGroup, Row } from "react-bootstrap";
import "./Sidebar.css";


function Sidebar () {



    return (
        <>
            <h2>Available rooms</h2>
            <ListGroup>
                <ListGroup.Item>
                <h4>room1</h4>
              <h4>room2</h4>
              <h4>room3</h4>

                </ListGroup.Item>
              

            </ListGroup>
            <h2>Members</h2>
            <ListGroup.Item>
                    <Row>
                        <Col xs={2} className="member-status">

                            </Col>
                        <Col xs={9}>
                                <p>test</p>
                        </Col>
                        <Col xs={1}>
                        <p>test</p>
                        <p>test</p>
                        </Col>
                    </Row>
            </ListGroup.Item>
                   
            
   
        </>
    );
}

export default Sidebar