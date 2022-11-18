


import { Button, Col, Form, Row } from "react-bootstrap";


import "./ChatForm.css";

function ChatForm(){




    return (
        <>
            <div className="messages-output">
              
                    <>
                        <div className="alert alert-info conversation-info">
                            <div>
                               <h2>test</h2>
                            </div>
                        </div>
                    </>
              
                

                
                        <div>
                            <p className="alert alert-info text-center message-date-indicator"></p>
                         
                                <div>
                                    <div className="message-inner">
                                        <div className="d-flex align-items-center mb-3">
                                            
                                            <p className="message-sender"> </p>
                                        </div>
                                        <p className="message-content"></p>
                                        <p className="message-timestamp-left"></p>
                                    </div>
                                </div>
                       
                        </div>
     
                <div/>
            </div>

            <Form>
                <Row>
                    <Col md={11}>
                        <Form.Group>
                         
                        </Form.Group>
                    </Col>
                    <Col md={1}>
                        <Button variant="primary" type="submit" style={{ width: "100%", backgroundColor: "orange" }}>
                            <i className="fas fa-paper-plane">test</i>
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
}


export default ChatForm