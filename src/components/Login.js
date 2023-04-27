import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import MyContext from './context/Createcontext'
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [otp, setOtp] = useState("");
    const [ph, setPh] = useState("");
    const [imagebg, setImagebg] = useState("cuate.png");
    const [loading, setLoading] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const mycontext=useContext(MyContext);
    const [user, setUser] = useState();
    const {getKey,fetchingdata,fetchfunction,projectdata,setprojectdata}=mycontext
    var Airtable = require('airtable');
    var base = new Airtable({ apiKey: 'pathtvro7iNxp5yYN.69817a21c94ed77c049dca2361983216550ee535881f255333ebde130d41f299' }).base('appmLtIK7oUkAerdO');


    //const { fetchingdata, fetchfunction} = mycontext
    const histroy = useNavigate();

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
    const navigating = () => {
        if (localStorage.getItem('token')) {
            handlechanges();
            histroy("/display");
        }
    }

    const handleSubmit = async (phonenumber) => {
        base('Table 1').create([
            {
                "fields": {
                    Name: phonenumber,
                    Product1: "01/01/2020",
                    Product2: "01/01/2020",
                    Product3: "01/01/2020",
                    Product4: "01/01/2020",
                    Product5: "01/01/2020"
                }
            }
        ], function (err, records) {
            if (err) {
                console.error(err);
                return;
            }
            records.forEach(function (record) {
                console.log(record.getId());
            });
        });
    }

    const serachrecord = async (phonenumber) => {
        base('Table 1').select({
            filterByFormula: `FIND('${phonenumber}', {Name}) = 1`
        }).firstPage(async (err, records) => {
            if (err) {
                console.error(err);
                return;
            }
            if (records.length > 0) {
                console.log(records)
                console.log(records[0].fields.Product1)
                var today = new Date();
                var birthDate = new Date(records[0].fields.Product1);
                var age = today.getFullYear() - birthDate.getFullYear();
                var m = today.getMonth() - birthDate.getMonth();
                var da = today.getDate() - birthDate.getDate();
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                if (m < 0) {
                    m += 12;
                }
                if (da < 0) {
                    da += 30;
                }
                if (age >= 1) {
                    localStorage.setItem('Verify', 'NotPaid')
                }
                else {
                    localStorage.setItem('Verify', 'Paid')
                }
                return true
            } else {
                await handleSubmit(phonenumber)
                localStorage.setItem('Verify', 'NotPaid')
                return false
            }
        });
    }

    function onCaptchVerify() {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
                "recaptcha-container",
                {
                    size: "invisible",
                    callback: (response) => {
                        onSignup();
                    },
                    "expired-callback": () => { },
                },
                auth
            );
        }
    }

    function onSignup() {
        localStorage.setItem('content', JSON.stringify([]))
        localStorage.setItem('image', JSON.stringify([]))
        setLoading(true);
        onCaptchVerify();

        const appVerifier = window.recaptchaVerifier;

        const formatPh = "+" + ph;

        signInWithPhoneNumber(auth, formatPh, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                setLoading(false);
                setImagebg("cuate1.png");
                setShowOTP(true);
                toast.success("OTP sent successfully!");
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                if (error.code === "auth/invalid-phone-number") {
                    toast.error("Enter a valid mobile number!");
                }
            });
    }

    function onOTPVerify() {
        setLoading(true);
        window.confirmationResult
            .confirm(otp)
            .then(async (res) => {
                console.log(typeof (res._tokenResponse.phoneNumber));
                setUser(res._tokenResponse.phoneNumber);

                console.log("hello11")
                console.log(user)
                if ((serachrecord(res._tokenResponse.phoneNumber)) === false) {
                    handleSubmit(res._tokenResponse.phoneNumber)
                    localStorage.setItem('Verify', 'NotPaid')
                }
                //handleSubmit(res._tokenResponse.phoneNumber)
                localStorage.setItem('token', res.user.accessToken)
                console.log(typeof (res.user.accessToken))
              //  handlechanges();
                setLoading(false);

            })
            .catch((err) => {
                console.log(err);
                toast.error("Invalid OTP Entered!");
                setLoading(false);
            });
    }

    return (
        <>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <h1 className="text1 text3"><b>RealtyAi</b></h1>
            </nav>
            <div className="App">
                <div className="row">
                    <div className="col">
                        <center><img style={{ width: "26rem", marginTop: "10%", height: 'auto' }} src={imagebg} alt="signup" /></center>
                    </div>
                    <div className="app1 col flex h-screen">
                        <div style={{ marginTop: "5rem", marginBottom: "5rem", marginRight: "10%", width: "80%", marginLeft: "10%", minWidth: "20rem", opacity: "0.8" }} className="card">
                            {/* <Toaster toastOptions={{
                                duration: 4000,
                                success: { style: { background: 'green', color: 'white' } },
                                error: { style: { background: '#cc0000', color: 'white' } }
                            }} /> */}
                            <ToastContainer autoClose={4000} position="top-center" pauseOnHover={false} closeOnClick theme="colored" />
                            <div id="recaptcha-container"></div>
                            {user ? (
                                <h2 style={{ marginLeft: "2rem", marginTop: "4rem" }} className="font-medium text-2xl">
                                    {navigating()}
                                    <br /><br /><br /><br />
                                </h2>
                            ) : (
                                <div className="w-80 flex flex-col gap-4 rounded-lg p-4" style={{ marginLeft: "5%", marginTop: "5%" }}>
                                    <h2>
                                        SignUp-Login
                                    </h2>
                                    {showOTP ? (
                                        <>
                                            <label
                                                htmlFor="otp"
                                                className="font-bold text-xl"
                                            >
                                                <br /><br />
                                                <br /><br />
                                                <br /><br />
                                                <br /><br />
                                                Enter your OTP
                                                <br />
                                            </label>
                                            <OtpInput
                                                value={otp}
                                                onChange={setOtp}
                                                OTPLength={6}
                                                otpType="number"
                                                disabled={false}
                                                autoFocus
                                                className="opt-container "
                                            ></OtpInput>
                                            <br /><br /><br />
                                            <button
                                                onClick={onOTPVerify}
                                                className="btn btn1 btn-outline-info center"
                                            >
                                                {loading && (
                                                    <CgSpinner size={20} className="mt-1 animate-spin" />
                                                )}
                                                <span>Verify OTP</span>
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <label
                                                htmlFor=""
                                                className="font-bold text-xl"
                                                style={{ paddingBottom: "1rem" }}
                                            >
                                                Please enter your mobile number to <br />recieve a One Time Password
                                            </label>
                                            <div>
                                                <PhoneInput style={{ marginTop: "3rem", height: "50%" }} country={"in"} value={ph} onChange={setPh} />
                                                <br /><br /><br /><br /><br /><br /><br />
                                                <button
                                                    onClick={onSignup}
                                                    className="btn btn1 btn-outline-info center"
                                                >
                                                    {loading && (
                                                        <CgSpinner size={20} className="mt-1 animate-spin" />
                                                    )}
                                                    <span>Send OTP</span>
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;






