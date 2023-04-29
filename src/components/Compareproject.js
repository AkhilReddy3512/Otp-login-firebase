import React, { useEffect } from 'react'
import MyContext from './context/Createcontext'
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdDoubleArrow } from "react-icons/md"

function Compareproject() {
  const mycontext = useContext(MyContext);
  const { item1, setitem1, item2, setitem2, item3, setitem3, getKey, handlecompare, fetchingprojectdata, projectdata, coldata, setcoldata } = mycontext
  const histroy = useNavigate();
  const [demo, setdemo] = useState(false)
  const addproject = () => {
    const a = localStorage.getItem('token')
    const c = localStorage.getItem('free')
    console.log(c)
    if (a === "null") {
      toast.warning("Please Signin to Continue!!")
    }
    else {
      histroy("/display")
    }
  }


  const removeitem = async (index, setitem) => {

    coldata.splice(index, 1)

    setitem(-1)
  }
  useEffect(() => {
    compareproject()
  },
    // eslint-disable-next-line
    [])

  const compareproject = async () => {
    setcoldata([])
    await fetchingprojectdata()

    if (item1 !== -1) {
      await handlecompare(getKey(projectdata[item1][0].fields));

    }
    if (item2 !== -1) {
      await handlecompare(getKey(projectdata[item2][0].fields))
    }
    if (item3 !== -1) {
      await handlecompare(getKey(projectdata[item3][0].fields))
    }
    console.log("helloosdjknsd")
    console.log(coldata)
    setdemo(true)
    console.log(demo)

  }
  const handleLogout = () => {
    localStorage.setItem('token', 'null');
    window.location.reload(true);
  }


  return (
    <>
      <ToastContainer autoClose={4000} position="top-center" pauseOnHover={false} closeOnClick theme="colored" />
      <nav className="navbar sticky navbar-light bg-light justify-content-between">
        <h1 className="text1 text3"><b>RealtyAi</b></h1>
        {localStorage.getItem('token') === 'null' ? (
          <Link className="btn btn-outline-info mx-3" to="https://otp-login-b8ec1.firebaseapp.com/" role="button">Sign In</Link>
        ) : (
          <>
            <div className="dropdown" >
              <button className="btn text2 dropdown" style={{ marginRight: "30px" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <CgProfile />
              </button>
              <ul className="dropdown-menu">
                <li><CgProfile style={{ margin: "2%" }} /> {localStorage.getItem('phone')}</li>
                <hr />
                <li><button className='btn btn-outline-info mx-3' style={{ width: "80%" }} onClick={handleLogout}>Log Out</button></li>
              </ul>
            </div>
          </>
        )}

      </nav>
      <center>
        <div className='container'>
          <div className='row' style={{ marginTop: "6rem" }}>
            <div className="col-md-4 my-3">
              {item1 !== -1 ? <div style={{ width: "18rem" }}>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={projectdata[item1][2].fields[getKey(projectdata[item1][2].fields)]} className="card-img-top" alt="project" />
                  <div className="card-body" style={{ textAlign: "left" }}>
                    <h5 className="card-title"><b>{getKey(projectdata[item1][0].fields)}</b></h5>
                    <h5 className="card-title">{projectdata[item1][0].fields[getKey(projectdata[item1][0].fields)]}</h5>
                    <h6 className="card-title">{projectdata[item1][1].fields[getKey(projectdata[item1][1].fields)]}</h6>
                    <p className="card-title">{projectdata[item1][3].fields[getKey(projectdata[item1][3].fields)]}</p>
                    <button className="btn btn-outline-info center" onClick={() => { removeitem(1, setitem1) }}>Remove</button>
                  </div>
                </div>
              </div> :
                <div style={{ width: "18rem" }}>

                  <div style={{ width: "18rem" }}>

                    <button className="btn btn-outline-info center" onClick={() => { addproject() }}>
                      <br /><br /><br />
                      <img src="https://cdn.pixabay.com/photo/2017/03/19/03/51/material-icon-2155448_960_720.png" className="card-img-top" alt="project" />

                      <h5><center>Add to Compare</center></h5>

                      <br /><br /><br />
                    </button>
                  </div>
                </div>}
            </div>
            <div className="col-md-4 my-3">
              {item2 !== -1 ? <div style={{ width: "18rem" }}>

                <div className="card" style={{ width: "18rem" }}>
                  <img src={projectdata[item2][2].fields[getKey(projectdata[item2][2].fields)]} className="card-img-top" alt="project" />
                  <div className="card-body" style={{ textAlign: "left" }}>
                    <h5 className="card-title"><b>{getKey(projectdata[item2][0].fields)}</b></h5>
                    <h5 className="card-title">{projectdata[item2][0].fields[getKey(projectdata[item2][0].fields)]}</h5>
                    <h6 className="card-title">{projectdata[item2][1].fields[getKey(projectdata[item2][1].fields)]}</h6>
                    <p className="card-title">{projectdata[item2][3].fields[getKey(projectdata[item2][3].fields)]}</p>
                    <button className="btn btn-outline-info center" onClick={() => { removeitem(2, setitem2) }}>Remove</button>
                  </div>
                </div>
              </div> :
                <div style={{ width: "18rem" }}>

                  <div style={{ width: "18rem" }}>

                    <button className="btn btn-outline-info center" onClick={() => { addproject() }}>
                      <br /><br /><br />
                      <img src="https://cdn.pixabay.com/photo/2017/03/19/03/51/material-icon-2155448_960_720.png" className="card-img-top" alt="project" />

                      <h5><center>Add to Compare</center></h5>

                      <br /><br /><br />
                    </button>
                  </div>
                </div>}
            </div>
            <div className="col-md-4 my-3">
              {item3 !== -1 ? <div style={{ width: "18rem" }}>

                <div className="card" style={{ width: "18rem" }}>
                  <img src={projectdata[item3][2].fields[getKey(projectdata[item3][2].fields)]} className="card-img-top" alt="project" />
                  <div className="card-body" style={{ textAlign: "left" }}>
                    <h5 className="card-title"><b>{getKey(projectdata[item3][0].fields)}</b></h5>
                    <h5 className="card-title">{projectdata[item3][0].fields[getKey(projectdata[item3][0].fields)]}</h5>
                    <h6 className="card-title">{projectdata[item3][1].fields[getKey(projectdata[item3][1].fields)]}</h6>
                    <p className="card-title">{projectdata[item3][3].fields[getKey(projectdata[item3][3].fields)]}</p>
                    <button className="btn btn-outline-info center" onClick={() => { removeitem(3, setitem3) }}>Remove</button>
                  </div>
                </div>
              </div> :
                <div style={{ width: "18rem" }}>
                  <div style={{ width: "18rem" }}>
                    <button className="btn btn-outline-info center" onClick={() => { addproject() }}>
                      <br /><br /><br />
                      <img src="https://cdn.pixabay.com/photo/2017/03/19/03/51/material-icon-2155448_960_720.png" className="card-img-top" alt="project" />
                      <h5><center>Add to Compare</center></h5>
                      <br /><br /><br />
                    </button>
                  </div>
                </div>}
            </div>
          </div>
        </div>
      </center>
      <div className="container">
        <div className="row">
          <div className="line" />
          <h4 style={{ marginTop: "2%", marginLeft: "2%" }}><MdDoubleArrow /> Project Details </h4>
          {(coldata.length > 0 && coldata.length < 5) && coldata[0].map((each, index) => {

            return <>

              <div className="container text-center">
                <center>
                  <table style={{ borderBottom: "1px solid black", width: "100%" }}>
                    <div className="row">
                      <div className="col">
                        <tr><td colSpan={3} style={{ width: "90vw", textAlign: "center" }}><h5 className="text4" style={{ marginTop: "1%" }}><b>{getKey(coldata[0][index].fields) !== undefined ? coldata[0][index].fields[getKey(coldata[0][index].fields)] : <br></br>}</b></h5></td></tr>
                      </div>
                    </div>
                    <tr>
                      {coldata.length > 1 && <div className="row">
                        {coldata.length >= 2 && <div className="col">
                          <td><p className="text5" style={{ width: "25vw", textAlign: "center", marginLeft: "2%" }}>{getKey(coldata[1][index].fields) !== undefined ? coldata[1][index].fields[getKey(coldata[1][index].fields)] : <p>-</p>}</p></td>
                        </div>}
                        {coldata.length >= 3 && <div className="col">
                          <td><p className="text5" style={{ width: "25vw", textAlign: "center", marginLeft: "5%", borderLeft: "1px solid black" }}>{getKey(coldata[2][index].fields) !== undefined ? coldata[2][index].fields[getKey(coldata[2][index].fields)] : <p>-</p>}</p></td>
                        </div>}
                        {coldata.length === 4 && <div className="col">
                          <td><p className="text5" style={{ width: "25vw", textAlign: "center", marginLeft: "2%", borderLeft: "1px solid black" }} >{getKey(coldata[3][index].fields) !== undefined ? coldata[3][index].fields[getKey(coldata[3][index].fields)] : <p>-</p>}</p></td>
                        </div>}
                      </div>}
                    </tr>
                  </table>
                </center>
              </div>
            </>
          })}
        </div>
      </div>
    </>
  )
}

export default Compareproject