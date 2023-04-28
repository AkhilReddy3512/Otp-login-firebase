import React from 'react'
import MyContext from './context/Createcontext'
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Projectcard(props) {
  const mycontext = useContext(MyContext);
  const { getKey, item1, setitem1, item2, setitem2, item3, setitem3, free, setfree, comparedata} = mycontext

  const histroy = useNavigate();
  if (localStorage.getItem('token')===null){
    localStorage.setItem('token',"null")
  }
  const addproject = async (data) => {

    //localStorage.setItem('project',JSON.stringify([]))
    //  fetchingprojectdata()
    console.log("fklgjnafkljnbdfj")
    console.log(free)
    console.log(comparedata)
    console.log(comparedata[0].indexOf(data))
    const a = localStorage.getItem('token')
    if(a==="null" ){
      toast.warning("Please Signin to Continue!!")
    }
    else if ((localStorage.getItem('free')) > 0 || (localStorage.getItem('Verify') === 'Paid')) {
      if (item1 === -1) {
        setitem1(comparedata[0].indexOf(data));

      }
      else if (item2 === -1) {
        if (props.data[0])
          setitem2(comparedata[0].indexOf(data));

      }
      else if (item3 === -1) {
        setitem3(comparedata[0].indexOf(data));

        console.log(item3)
      }
      setfree(free - 1)
      const l = localStorage.getItem('free')
      localStorage.setItem('free', l - 1)
      histroy("/compare");


    }
    else{
      toast.warning("Your free trail is completed!!")
      toast.warning("Please Subscribe to continue!!")
    }


    console.log(free)
  }

  return (
    <>
    <ToastContainer autoClose={4000} position="top-center" pauseOnHover={false} closeOnClick theme="colored" />
      <div className="card" style={{ width: "18rem", margin: "1rem" }}>
        <img src={props.data[2].fields[getKey(props.data[2].fields)]} className="card-img-top" alt="project" />
        <div className="card-body">
          <h2 className='text-center'>{getKey(props.data[0].fields)}</h2>
          <h5 className="card-title">{props.data[0].fields[getKey(props.data[0].fields)]}</h5>
          <h6 className="card-title">{props.data[1].fields[getKey(props.data[1].fields)]}</h6>
          <p className="card-text">{props.data[3].fields[getKey(props.data[3].fields)]}</p>
          <button className="btn btn-outline-info center" onClick={() => { addproject(getKey(props.data[0].fields)) }} type="submit">Add Project</button>
        </div>
      </div>

    </>
  )
}

export default Projectcard;