import {Button,Modal} from 'react-bootstrap'
import {useState} from 'react'

const Mod =( props) => {
    if(!props.show){
        return null
    }
    
    return ( 
        <>
        <div>
           hello {props.user}
        </div>
        </>
        

    )
  }
  
  export default Mod;