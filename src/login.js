import {Form,Button,Card,Container} from 'react-bootstrap';
import { useRef } from 'react';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'


const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    

    function log(){
        //console.log(emailRef)
        
        const auth=getAuth();
        
        signInWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value)
            .then((e)=>{
                console.log("logged in ")
            }).catch((err)=>{
                console.log("Error"+err.toString());
            })
    }

    return ( 
        <div className="content">
            <Container style={{width : "400px"}}>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Login</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef}  required />
                        </Form.Group>
                        <Form.Group id="Password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        
                        <br></br>
                        <Button  onClick={()=>{log()}}>Login</Button>
                    </Form>

                </Card.Body>
            </Card>
            </Container>
        </div>
     );
}
 
export default Login;