import React, { useEffect } from 'react'
import MyContext from './context/Createcontext'
import { useContext } from 'react';
import Projectcard from './Projectcards';
import { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


function Displaycard() {
    const mycontext=useContext(MyContext);
    const [searchQuery, setSearchQuery] = useState('');
    
    const {getKey,fetchingdata,fetchfunction,projectdata}=mycontext

      const [id,setid]=useState("")
      const[area,setarea]=useState(0)
      const[locality,setlocality]=useState(0)
      const[city,setcity]=useState(0)
      const[citytext,setcitytext]=useState("")
      const[areatext,setareatext]=useState("")
      const[localtext,setlocaltext]=useState("")
      const [open1, setOpen1] =useState(false);
      
  const handleOpen = () => setOpen1(true);
  const handleClose = () => setOpen1(false);

  useEffect(()=>{
    const handlechanges = async () => {
      let l = await fetchingdata()
      console.log(l.length)
      console.log(l)
      const handlechange = () => {
         
          if (l.length !== 0) {
              for (var i = 0; i < l.length; i++) {
                  if (l[i] !== 'Field1' && l[i] !== 'ProjectName') {
                      fetchfunction(l[i])
                  }
              }
          }
      }
      handlechange()
  }
  handlechanges()
  },
  // eslint-disable-next-line
  []
  )
  const citing=()=>{
    if(city===0){
      setcity(1)
      // setarea(0)
      // setlocality(0)
    }
  }
  const citingtext=(item1)=>{
    console.log("city")
    setcitytext(item1)
    console.log(item1)
    setid("")
    setlocaltext("")
       setareatext("")
      
}
const localitying=()=>{
  if(locality===0){
    setlocality(1)
    //  setarea(0)
    //  setcity(0)
   }
}
  const localingtext=(item1)=>{
           setlocaltext(item1)
           console.log("localiy")
           console.log(item1)
           setid("")
        
       setareatext("")
       setcitytext("")
  }
 
  const areaingtext=(item1)=>{
    console.log("area")
           setareatext(item1)
           console.log(item1)
           setid("")
           setlocaltext("")
      
       setcitytext("")
  }
  const areaing=()=>{
    if(area===0){
      setarea(1)
    //   setlocality(0)
    //   setcity(0)
     }
  }
 
  

  const handle=(item1)=>{
       setid(getKey(item1[0].fields))
       setlocaltext("")
       setareatext("")
       setcitytext("")
  }
  
 
  
    const handleSearchQueryChange = (event) => {
      setSearchQuery(event.target.value);
    };
 
   
  return (
    <>
    <nav className="navbar navbar-light bg-light justify-content-between">
    <h1 className="text1 text3"><b>RealtyAi</b></h1>
    <button className="btn text2" type="submit"><CgProfile/></button>
  </nav>
  <div className="App">
    <p className="text">Don't Buy Your Dream Home Without Expert Guidance</p>
   
    </div>

    <div>
    <center><input style={{width:"90%"}}  type="search" placeholder="Search" aria-label="Search"  onClick={handleOpen}/></center>
  <div className="d-flex justify-content-end" style={{marginTop:"1rem"}}>
 
  <div>
    
      <Modal
        open={open1}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>

          <div className="dropdown" style={{width:"100%"}}>
  <center><input style={{width:"100%"}} className="me-2 dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" type="search" placeholder="Search" aria-label="Search"  id="myText"  onChange={handleSearchQueryChange}/>
   <ul style={{marginTop:"1vw" , width:"90%"}} className="dropdown-menu">
      
  <ul>
        {projectdata.length!==0&&projectdata.filter(
      (item1) =>
      getKey(item1[0].fields).includes(searchQuery)|| (item1[0].fields[getKey(item1[0].fields)].includes(searchQuery)&&citing())|| (item1[1].fields[getKey(item1[1].fields)].includes(searchQuery)&&localitying())|| (item1[2].fields[getKey(item1[2].fields)].includes(searchQuery)&&areaing())
    ).map((item1, index) => (
      <div style={{width:"100%"}}>
       <li className="hover" key={index}  onMouseOver={()=>{document.getElementById("myText").value= item1[0].fields[getKey(item1[0].fields)]+" "+item1[1].fields[getKey(item1[0].fields)]+" "+item1[3].fields[getKey(item1[0].fields)]}} onClick={()=>{handle(item1)}} > 
            
            <div>
              {getKey(item1[0].fields)}, 
           { item1[0].fields[getKey(item1[0].fields)]}, 
           {item1[1].fields[getKey(item1[1].fields)]}, 
           {item1[3].fields[getKey(item1[3].fields)]}<hr></hr>
            </div>
          </li>

        
        </div>
      ))}
      </ul>
    <div style={{marginLeft:"1vw", marginRight:"1vw"}}>
        <h5 style={{color:"rgb(53, 193, 248)"}} >Recommended cities localities and areas</h5>
      {city===1&&projectdata.map((item2)=>{
                    return<li className="hover" onClick={()=>{citingtext(item2[0].fields[getKey(item2[0].fields)])}}><p>{item2[0].fields[getKey(item2[0].fields)]}</p><hr/></li>
          })}
           {locality===1&&projectdata.map((item2)=>{
                    return <li className="hover" onClick={()=>{localingtext(item2[1].fields[getKey(item2[1].fields)])}}><p>{item2[1].fields[getKey(item2[1].fields)]}</p><hr/></li>
          })}
           {area===1&&projectdata.map((item2)=>{
                    return <li className="hover" onClick={()=>{areaingtext(item2[3].fields[getKey(item2[3].fields)])}}><p>{item2[3].fields[getKey(item2[3].fields)]}</p><hr/></li>
          })}
        
      </div>
  </ul>
  </center>
</div>


        </Box>
      </Modal>
</div>


     

  </div>
 
</div>
   <div>
     <div className='container'>
      <div className='row'>
    {projectdata.length!==0&&projectdata.filter(
  (item1) =>
  ((localtext===""&&areatext===""&&citytext==="")&&getKey(item1[0].fields).includes(id))||(citytext!==""&&item1[0].fields[getKey(item1[0].fields)].includes(citytext))||(localtext!==""&&item1[1].fields[getKey(item1[1].fields)].includes(localtext))||(areatext!==""&&item1[3].fields[getKey(item1[3].fields)].includes(areatext))
  ).map((item1, index) => {
  
      return <div className="col-md-4 my-3"><Projectcard data={item1} index={index}  /></div>
    
     }
    )}
    </div>
     </div>
    </div>
  
</>
  )
}

export default Displaycard;


