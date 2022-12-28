import {useContext, useState} from 'react'
import { Col, Row, Container, Form, Button } from 'react-bootstrap'
import "./Login.css"
import { useLogin } from '../hooks/useLogin'
import { Link } from 'react-router-dom'




const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()
    


    //activates when submit button is clicked 
    const handleSubmit = async (e) => {
        e.preventDefault()
       //fetch login information
        await login(email, password)
       
       

    }

return (
  
<Container>
    <Row>
        <Col md={5} className='login__bg'></Col>
        <Col md={7} className='d-flex align-items-center justify-content-center flex-directional-column'>
        
        <Form style={{width: '80%', maxWidth: 500}} onSubmit = {handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(e) => setEmail(e.target.value)} value ={email} />
        <Form.Text className="text-muted">
         We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control type="password" placeholder="Password"   onChange={(e) => setPassword(e.target.value)} value ={password} />
        </Form.Group>
       
        <Button variant="primary" type="submit" disabled ={isLoading}>
                Login
        </Button>
        {error && <div className='error'>{error}</div>}
        <div className='py-4'>
            <p className='text-center'>
                Dont have an Account?  <Link to="/signup">Signup</Link>
            </p>
        </div>
    </Form>
    </Col>
</Row>
</Container>
    )

}

export default Login

