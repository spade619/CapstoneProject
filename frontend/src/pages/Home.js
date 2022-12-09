import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import ChatForm from "../components/ChatForm";
const Home = () => {
   


    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Sidebar />
                </Col>
                <Col md={8}>
                    <ChatForm />
                </Col>
            </Row>
        </Container>
    )
}

export default Home