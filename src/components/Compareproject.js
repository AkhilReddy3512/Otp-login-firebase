import React, { useEffect } from 'react'
import MyContext from './context/Createcontext'
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Compareproject() {
    const mycontext=useContext(MyContext);
    const {item1,setitem1,item2,setitem2,item3,setitem3,getKey,handlecompare,fetchingprojectdata,projectdata,coldata, setcoldata}=mycontext
    const histroy=useNavigate();
    const[demo,setdemo]=useState(false)
    const addproject = () => {
      const a = localStorage.getItem('token')
      const b = localStorage.getItem('Verify')
      if(a==="null" ){
        toast.warning("Please Signin to Continue!!")
      }
      else if(b === 'NotPaid'){
        toast.warning("Please Subscribe to continue!!")
      }
      else{
        histroy("/display")
      }
    }
   
  
    const removeitem=async(index,setitem)=>{

     coldata.splice(index,1)
     
      setitem(-1)
    }
    useEffect(()=>{
       compareproject()
     },
     // eslint-disable-next-line
     [])
   
    const compareproject=async()=>{
              setcoldata([])
              await fetchingprojectdata()
             
            if(item1!==-1){
            await handlecompare(getKey(projectdata[item1][0].fields));
            
            }
            if(item2!==-1){
            await handlecompare(getKey(projectdata[item2][0].fields))
            }
            if(item3!==-1){
             await handlecompare(getKey(projectdata[item3][0].fields))
            }
            console.log("helloosdjknsd")
            console.log(coldata)
            setdemo(true)
            console.log(demo)
               
            }
  
  return ( 
    <>
    <ToastContainer autoClose={4000} position="top-center" pauseOnHover={false} closeOnClick theme="colored" />
     <nav className="navbar navbar-light bg-light justify-content-between">
    <href className="text1 text3"><b>RealtyAi</b></href>
    <button className="btn text2" type="submit"><CgProfile/></button>
  </nav>
  <div className='container'>
  <div className='row'>
    <div className="col-md-4 my-3">
    {item1!==-1?<div  style={{width: "18rem"}}>

<div className="card" style={{width:"18rem", margin:"1rem"}}>
<img src={projectdata[item1][2].fields[getKey(projectdata[item1][2].fields)]} className="card-img-top" alt="project"/>
<div className="card-body">
<h2 className="card-title">{getKey(projectdata[item1][0].fields)}</h2>
<h5 className="card-title">{projectdata[item1][0].fields[getKey(projectdata[item1][0].fields)]}</h5>
<h6 className="card-title">{projectdata[item1][1].fields[getKey(projectdata[item1][1].fields)]}</h6>
<p className="card-title">{projectdata[item1][3].fields[getKey(projectdata[item1][3].fields)]}</p>
<button className="btn btn-outline-info center" onClick={()=>{removeitem(1,setitem1)}}>Remove</button>
</div>
</div>
</div>:
<div  style={{width: "18rem"}}>

<div style={{width:"18rem", margin:"1rem"}}>
  
<button className="btn btn-outline-info center" onClick={()=>{addproject()}}>
<br/><br/><br/>
  <img src="https://cdn.pixabay.com/photo/2017/03/19/03/51/material-icon-2155448_960_720.png" className="card-img-top" alt="project"/>

<h5><center>Add to Compare</center></h5>

<br/><br/><br/>
</button>
</div>
</div>}
</div>
<div className="col-md-4 my-3">
{item2!==-1?<div  style={{width: "18rem"}}>

<div className="card" style={{width:"18rem", margin:"1rem"}}>
<img src={projectdata[item2][2].fields[getKey(projectdata[item2][2].fields)]} className="card-img-top" alt="project"/>
<div className="card-body">
<h2 className="card-title">{getKey(projectdata[item2][0].fields)}</h2>
<h5 className="card-title">{projectdata[item2][0].fields[getKey(projectdata[item2][0].fields)]}</h5>
<h6 className="card-title">{projectdata[item2][1].fields[getKey(projectdata[item2][1].fields)]}</h6>
<p className="card-title">{projectdata[item2][3].fields[getKey(projectdata[item2][3].fields)]}</p>
<button className="btn btn-outline-info center" onClick={()=>{removeitem(2,setitem2)}}>Remove</button>
</div>
</div>
</div>:
<div  style={{width: "18rem"}}>

<div style={{width:"18rem", margin:"1rem"}}>
  
<button className="btn btn-outline-info center" onClick={()=>{addproject()}}>
<br/><br/><br/>
  <img src="https://cdn.pixabay.com/photo/2017/03/19/03/51/material-icon-2155448_960_720.png" className="card-img-top" alt="project"/>

<h5><center>Add to Compare</center></h5>

<br/><br/><br/>
</button>
</div>
</div>}
</div>
<div className="col-md-4 my-3">
{item3!==-1?<div  style={{width: "18rem"}}>

<div className="card" style={{width:"18rem", margin:"1rem"}}>
<img src={projectdata[item3][2].fields[getKey(projectdata[item3][2].fields)]} className="card-img-top" alt="project"/>
<div className="card-body">
<h2 className="card-title">{getKey(projectdata[item3][0].fields)}</h2>
<h5 className="card-title">{projectdata[item3][0].fields[getKey(projectdata[item3][0].fields)]}</h5>
<h6 className="card-title">{projectdata[item3][1].fields[getKey(projectdata[item3][1].fields)]}</h6>
<p className="card-title">{projectdata[item3][3].fields[getKey(projectdata[item3][3].fields)]}</p>
<button className="btn btn-outline-info center" onClick={()=>{removeitem(3,setitem3)}}>Remove</button>
</div>
</div>
</div>:
<div  style={{width: "18rem"}}>

<div style={{width:"18rem", margin:"1rem"}}>
  
<button className="btn btn-outline-info center" onClick={()=>{addproject()}}>
<br/><br/><br/>
  <img src="https://cdn.pixabay.com/photo/2017/03/19/03/51/material-icon-2155448_960_720.png" className="card-img-top" alt="project"/>

<h5><center>Add to Compare</center></h5>

<br/><br/><br/>
</button>
</div>
</div>}
</div>


</div>
</div>
<div className= "container">
<div className="row">
<div className="line"/>
 {(coldata.length>0&&coldata.length<5)&&coldata[0].map((each,index)=>{
    return <>
    <div className="container text-center">
   <div className="row"> 
    <div className="col">
   <h3 className="text4">{getKey(coldata[0][index].fields)!==undefined?coldata[0][index].fields[getKey(coldata[0][index].fields)]:<br></br>}</h3>
   </div>
   </div>
   
   
 {coldata.length>1&&<div className="row"> 
   {coldata.length>=2&&<div className="col">
    <p className="text5">{getKey(coldata[1][index].fields)!==undefined?coldata[1][index].fields[getKey(coldata[1][index].fields)]:<br></br>}</p>
    </div>}
    {coldata.length>=3&&<div className="col">
    <p className="text5">{getKey(coldata[2][index].fields)!==undefined?coldata[2][index].fields[getKey(coldata[2][index].fields)]:<br></br>}</p>
    </div>}
    {coldata.length===4&&<div className="col">
    <p className="text5">{getKey(coldata[3][index].fields)!==undefined?coldata[3][index].fields[getKey(coldata[3][index].fields)]:<br></br>}</p>
    </div>}
  </div>}
</div>
</>
 })}
 </div>
  </div>
</>
  )
}

export default Compareproject