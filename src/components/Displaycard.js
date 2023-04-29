import React, { useEffect } from 'react'
import MyContext from './context/Createcontext'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Projectcard from './Projectcards';
import { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { GoSearch } from 'react-icons/go';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


function Displaycard() {
  const mycontext = useContext(MyContext);
  const [searchQuery, setSearchQuery] = useState('');

  const { getKey, projectdata, setprojectdata, fetchfunction, fetchingdata } = mycontext
  //setprojectdata([])
  const [id, setid] = useState("")
  const [area, setarea] = useState(0)
  const [locality, setlocality] = useState(0)
  const [city, setcity] = useState(0)
  const [citytext, setcitytext] = useState("")
  const [areatext, setareatext] = useState("")
  const [localtext, setlocaltext] = useState("")
  const [open1, setOpen1] = useState(false);

  const handleOpen = () => setOpen1(true);
  const handleClose = () => setOpen1(false);
  //   const handlechanges = async () => {
  //       setprojectdata([])
  //       let l = await fetchingdata()
  //       console.log(l.length)
  //       console.log(l)
  //       const handlechange = () => {

  //           if (l.length !== 0) {
  //               for (var i = 0; i < l.length; i++) {
  //                   if (l[i] !== 'Field1' && l[i] !== 'ProjectName') {
  //                       fetchfunction(l[i])
  //                   }
  //               }
  //           }
  //       }
  //       handlechange()
  //   }




  useEffect(() => {
    if (projectdata.length === 0) {
      const handlechanges = async () => {
        setprojectdata([])
        let l = await fetchingdata();
        await l.sort();
        console.log(l.length);
        console.log(l);
        const handlechange = async () => {

          if (l.length !== 0) {
            for (var i = 0; i < l.length; i++) {
              if (l[i] !== 'Field1' && l[i] !== 'ProjectName') {
                await fetchfunction(l[i])
              }
            }
          }
        }
        handlechange()
      }
      handlechanges()
    }
  },
    // eslint-disable-next-line
    []
  )
  const citing = () => {
    if (city === 0) {
      setcity(1)
      // setarea(0)
      // setlocality(0)
    }
    return true;
  }
  const citingtext = (item1) => {
    console.log("city")
    setcitytext(item1)
    console.log(item1)
    setid("")
    setlocaltext("")
    setareatext("")
    handleClose()
  }
  const localitying = () => {
    if (locality === 0) {
      setlocality(1)
      //  setarea(0)
      //  setcity(0)

    }
    return true;
  }
  const localingtext = (item1) => {
    setlocaltext(item1)
    console.log("localiy")
    console.log(item1)
    setid("")

    setareatext("")
    setcitytext("")
    handleClose()
  }

  const areaingtext = (item1) => {
    console.log("area")
    setareatext(item1)
    console.log(item1)
    setid("")
    setlocaltext("")

    setcitytext("")
    handleClose()
  }
  const areaing = () => {
    if (area === 0) {
      setarea(1)
      //   setlocality(0)
      //   setcity(0)
    }
    return true;
  }



  const handle = (item1) => {
    setid(getKey(item1[0].fields))
    setlocaltext("")
    setareatext("")
    setcitytext("")
    handleClose()
  }



  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleLogout = () => {
    localStorage.setItem('token', 'null');
    window.location.reload(true);
  }

  return (
    <>
      <nav className="navbar fixed-top navbar-light bg-light justify-content-between">
        <h1 className="text1 text3"><b>RealtyAi</b></h1>
        {localStorage.getItem('token') === 'null' ? (
          <Link className="btn btn-outline-info mx-3" to="https://otp-login-b8ec1.firebaseapp.com/" role="button">Sign In</Link>
        ) : (
          <>
            <div className="d-flex align-items-center">
              {localStorage.getItem('Verify') === 'NotPaid' && (
                <Link className="btn btn-dark me-4" to="https://reality-ai-payment-page.web.app/" role="button">SUBSCRIBE NOW!!</Link>
              )}
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
            </div>
          </>
        )}
      </nav>
      <div className="App">
        <p className="text">Don't Buy Your Dream Home Without Expert Guidance</p>
        {/* <button onClick={()=>{ handlechanges()}}></button> */}
      </div>

      <div style={{ backgroundColor: "white" }}>
        <div><input style={{ width: "30%", height: "3rem", borderRadius: "10px", marginLeft: "65%" }} type="search" placeholder="Search" aria-label="Search" onClick={handleOpen} />
          <GoSearch className="search-icon" />
        </div>
        <div className="d-flex justify-content-end" style={{ marginTop: "1rem" }}>

          <div>

            <Modal style={{ color: "white" }}
              open={open1}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >

              <Box style={{ backgroundColor: "white" }} >

                <center><div className="dropdown" style={{ width: "100%" }}>
                  <input style={{ width: "90%", height: "3rem", margin: "5px", borderRadius: "10px", color: "black", fontSize: "1.5rem", paddingLeft: "1%" }} className="me-2 dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" type="search" placeholder="Search" aria-label="Search" id="myText" onChange={handleSearchQueryChange} />
                  <GoSearch className="search-icon-1" />
                  <ul style={{ width: "100%" }} className="dropdown-menu dropdown-content">
                    <ul>
                      {projectdata.filter(
                        (item1) =>
                          (getKey(item1[0].fields).toLowerCase()).includes(searchQuery.toLowerCase()) || ((item1[0].fields[getKey(item1[0].fields)].toLowerCase()).includes(searchQuery.toLowerCase()) && citing()) || ((item1[1].fields[getKey(item1[1].fields)].toLowerCase()).includes(searchQuery) && localitying()) || ((item1[2].fields[getKey(item1[2].fields)].toLowerCase()).includes(searchQuery) && areaing())
                      ).map((item1, index) => (
                        <div style={{ width: "100%" }}>
                          <li className="hover" key={index} style={{ marginLeft: "4vw", marginRight: "4vw" }} onClick={() => { handle(item1) }} >

                            <div>
                              {getKey(item1[0].fields)},
                              {item1[0].fields[getKey(item1[0].fields)]},
                              {item1[1].fields[getKey(item1[1].fields)]},
                              {item1[3].fields[getKey(item1[3].fields)]}<hr />
                            </div>
                          </li>
                        </div>
                      ))}
                    </ul>

                    <div style={{ marginLeft: "1vw", marginRight: "1vw" }}>
                      <h5 style={{ color: "rgb(53, 193, 248)", marginLeft: "3vw" }} >Recommended cities localities and areas</h5>
                      {city === 1 && projectdata.map((item2) => {
                        return <li className="hover" style={{ marginLeft: "4vw", marginRight: "4vw" }} onClick={() => { citingtext(item2[0].fields[getKey(item2[0].fields)]) }}><p>{item2[0].fields[getKey(item2[0].fields)]}</p><hr /></li>
                      })}
                      {locality === 1 && projectdata.map((item2) => {
                        return <li className="hover" style={{ marginLeft: "4vw", marginRight: "4vw" }} onClick={() => { localingtext(item2[1].fields[getKey(item2[1].fields)]) }}><p>{item2[1].fields[getKey(item2[1].fields)]}</p><hr /></li>
                      })}
                      {area === 1 && projectdata.map((item2) => {
                        return <li className="hover" style={{ marginLeft: "4vw", marginRight: "4vw" }} onClick={() => { areaingtext(item2[3].fields[getKey(item2[3].fields)]) }}><p>{item2[3].fields[getKey(item2[3].fields)]}</p><hr /></li>
                      })}

                    </div>
                  </ul>
                </div>
                </center>


              </Box>
            </Modal>
          </div>




        </div>

      </div>
      <div>
        <div className='container'>
          <div className='row'>
            {projectdata.filter(
              (item1) =>
                ((localtext === "" && areatext === "" && citytext === "") && getKey(item1[0].fields).includes(id)) || (citytext !== "" && item1[0].fields[getKey(item1[0].fields)].includes(citytext)) || (localtext !== "" && item1[1].fields[getKey(item1[1].fields)].includes(localtext)) || (areatext !== "" && item1[3].fields[getKey(item1[3].fields)].includes(areatext))
            ).map((item1, index) => {

              return <div className="col-md-4 my-3"><Projectcard data={item1} index={index} /></div>

            }
            )}
          </div>
        </div>
      </div>

    </>
  )
}

export default Displaycard;


