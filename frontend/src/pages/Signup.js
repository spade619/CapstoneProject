import {useState} from 'react'
import { useSignup } from '../hooks/useSignup'
import { Col, Row, Container, Form, Button } from 'react-bootstrap'
import "./Signup.css"
import { Link } from 'react-router-dom'

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()


    //activates when submit button is clicked
    const handleSubmit = async (e) => {

        e.preventDefault()
      
        await signup(name, email, password)

    }

return (
  

<Container>
<Row>
   
    <Col md={7} className='d-flex align-items-center justify-content-center flex-directional-column'>
    <Form style={{width: '80%', maxWidth: 500}} onSubmit = {handleSubmit}>
        <h1>Create Account</h1>

        <Form.Group className="mb-3" controlId="formBasicName">
     <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter Your Username"  onChange={(e) => setName(e.target.value)} value ={name} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter Your email"  onChange={(e) => setEmail(e.target.value)} value ={email} />
    
    </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Label>Password</Form.Label>
     <Form.Control type="password" placeholder="Enter Your Password"  onChange={(e) => setPassword(e.target.value)} value ={password} />
    </Form.Group>

    <Button variant="primary" type="submit" disabled={isLoading}>
            Create Account
    </Button>
    {error && <div className='error'>{error}</div>}
   
         <div className='py-4'>
            <p className='text-center'>
                Already have an Account?  <Link to="/login">Login</Link>
            </p>
        </div>
</Form>
</Col>
<Col md={5} className='signup__bg'></Col>
</Row>
</Container>

)

}

export default Signup


