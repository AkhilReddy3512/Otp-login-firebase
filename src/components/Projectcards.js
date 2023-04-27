import React from 'react'
import MyContext from './context/Createcontext'
import { useContext } from 'react';
import { useNavigate } from 'react-router';

function Projectcard(props) {
    const mycontext=useContext(MyContext);
   const {getKey,item1,setitem1,item2,setitem2,item3,setitem3}=mycontext
   
   const histroy=useNavigate();
 
   const addproject=async()=>{
   
    //localStorage.setItem('project',JSON.stringify([]))
  //  fetchingprojectdata()
   
        if(item1===-1){
            setitem1(props.index);
            
        }
        else if(item2===-1){
             if(props.data[0])
            setitem2(props.index);
            
        }
        else if(item3===-1){
            setitem3(props.index);
           
            console.log(item3)
        }
 

        histroy("/compare");
       

   }
    
  return (
    <>
<div className="card" style={{width:"18rem", margin:"1rem"}}>
<img src={props.data[2].fields[getKey(props.data[2].fields)]} className="card-img-top" alt="project"/>
<div className="card-body">
  <h2 className='text-center'>{getKey(props.data[0].fields)}</h2>
  <h5 className="card-title">{props.data[0].fields[getKey(props.data[0].fields)]}</h5>
  <h6 className="card-title">{props.data[1].fields[getKey(props.data[1].fields)]}</h6>
  <p className="card-text">{props.data[3].fields[getKey(props.data[3].fields)]}</p>
  <button className="btn btn-outline-info center" onClick={()=>{addproject()}} type="submit">Add Project</button>
</div>
</div>

</>
  )
}

export default Projectcard