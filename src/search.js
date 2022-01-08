import { useState } from 'react';
import {Container,Form,Button,Card} from 'react-bootstrap';
import Post from './post';
import { otherobj } from './post';
//import {dataobj} from './post';

//console.log(otherobj)
const Search = () => {

    const[searchterm,setSearchTerm]=useState("");
    
    return ( 
        <Container>
        <Form style={{width:"550px"}}>
                        <Form.Group id="searchbar">
                            <Form.Label>Search blog posts:</Form.Label>
                            <Form.Control type="text"   onChange={event=>setSearchTerm(event.target.value)} />
                        </Form.Group>
                        </Form>
                        <h2>Search results :</h2>
                        <br></br>
                        {otherobj.filter((val)=>{
                            if(searchterm===""){
                                return null
                            }else if(val.userpush.toLowerCase().includes(searchterm.toLowerCase())){
                                return val
                            }
                            else if(val.titlepush.toLowerCase().includes(searchterm.toLowerCase())){
                                return val
                            }
                            else if(val.bodypush.toLowerCase().includes(searchterm.toLowerCase())){
                                return val
                            }
                            
                        }).map((val)=>{
                            
                            return(
                                <>
                                 
                                 
                                <Card className='my-3' style={{width:"500px"}}>
                                <Card.Header>
                                      <Button>{val.userpush}</Button>  {val.titlepush}
                                    </Card.Header>
                                <Card.Body>
                                    {val.bodypush}
                                </Card.Body>
                                </Card>
                                
                                </>
                                
                            )
                        })}
          </Container>          
     );
}
 
export default Search;