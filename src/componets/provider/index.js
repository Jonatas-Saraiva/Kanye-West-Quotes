import React,{  useEffect, useState} from "react";
import axios from "axios";
import Api from "../../services/api";
import styled from "styled-components";




const ApiGet = ()=>{
 function rendeApi (){
    axios.get(Api).then(response=>{
        setApiRende(response.data)
        
    }).catch(error=>console.log(error.response))
 }

    // eslint-disable-next-line react-hooks/rules-of-hooks
const [apiRende,setApiRende]=useState({
        quote:'',
    })
  
   // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
             
axios.get(Api).then(response=>{
    setApiRende(response.data)
   
}).catch(error=>console.log(error.response))

    
  
   
    }
    ,[]);
    if(apiRende==="")return console.log('não foi...')
    return(<>
        <p>{apiRende.quote}</p>
        <ButtonStyled type="submit" onClick={rendeApi}>Update Quote</ButtonStyled>
        </>
    )
}


const ButtonStyled = styled.button`
  box-shadow : 0 0 1.5vh white;
  border : 0.2vh solid white ; 
  display:flex;
  align-items:center;
  background-color: #361D4E;
  color :white;


`;
export default ApiGet


