import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import ChatForm from "../components/ChatForm";
const Home = () => {
   


    return (
        <Container>
            <Row>
                <Col md={4}>
                    
                </Col>
                <Col>
                    <ChatForm />
                </Col>
            </Row>
        </Container>
    )
}

export default Home