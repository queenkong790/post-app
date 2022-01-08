import {Button,Container,Card, FormControl,Modal, ModalBody} from 'react-bootstrap';
import {getAuth,signOut} from 'firebase/auth';
import {useEffect,useState} from 'react';
import { render } from '@testing-library/react';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';



let otherobj;

const Post = () => {

    function logout(){
        const auth=getAuth();
        signOut(auth);
    }
    
     const dataobj=[];
    const [posts,setPosts]=useState([]);

    const [users,setUsers]=useState([]);

    const [show,setShow]=useState(false);

    const [name,setName]=useState([]);
    const [email,setemail]=useState([]);
    const [phone,setPhone]=useState([]);

    const handleClose = () => setShow(false);
  const handleShow = (name,email,phone) => {setShow(true);setName(name);setemail(email);setPhone(phone)};

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res)=>res.json())
            .then((data)=>{
                setPosts(data);
                
            })
    },[setPosts])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res)=>res.json())
            .then((data)=>{
                setUsers(data);
                
            })
    },[setUsers])

    const postobj=posts.map((post)=>{
    
        return(
            <div >
               <div>{users.map((user)=>{
                   if(user.id===post.id){
                   
                    let userpush=user.username;
                    let titlepush=post.title;
                    let bodypush=post.body ;
                    dataobj.push({userpush,titlepush,bodypush});
                   return(
                    <div>
                    Author: <Button onClick={()=>{
                        handleShow(user.name,user.email,user.phone);
                    }} >{user.username}</Button>  
                    
                    <Card className='my-3' style={{width:"500px"}}>
                                 <Card.Header>
                                         {post.title}
                                     </Card.Header>
                                 <Card.Body>
                                     {post.body}
                                 </Card.Body>
                 </Card>
                 </div>
                   ) }
                   })}
                </div>
                
            </div>
        )
    })
   
    otherobj=dataobj.map((obj)=>obj);
    return ( 

        <div>
            <Container >
                <h1>Feed</h1>
                <Button onClick={logout}>Logout</Button>
                

                {postobj}
               <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Name:{name}<br/>
                            Email: {email}<br/>
                            Phone: {phone}
                            </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>        
                    
            </Container>
            
        </div>

     );
}
 
export default Post;
export {otherobj};
