import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import './App.css';
const App = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res.metadata);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <>
     <nav class="navbar navbar-light bg-light justify-content-between">
    <href class="text1 text3"><b>RealtyAi</b></href>
  </nav>
  <div>
  <div class="row">
    <div class="col">
    <img style={{height:"500px"}} src="https://about.fb.com/wp-content/uploads/2018/03/screen-2x1.png?fit=1376%2C928" alt="signup"></img>
    </div>
    <div class="app1 col flex h-screen">
    <div style={{marginLeft:"4rem", marginTop:"5rem", marginRight:"4rem"}}class="card">
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <h2 style={{marginLeft:"2rem",marginTop:"4rem"}}className="font-medium text-2xl">
            Login Successful
            <br/><br/><br/><br/>
          </h2>
        ) : (
          <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
            <h2>
             SignUp-Login
            </h2>
            {showOTP ? (
              <>
                <label
                  htmlFor="otp"
                  className="font-bold text-xl"
                >
                  <br/><br/>
                  <br/><br/>
                  Enter your OTP
                  <br/>
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
                <br/>
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
                  style={{paddingBottom:"5rem;"}}
                >
                  Please enter your mobile number to <br/>recieve a One Time Password
                </label>
                <div>
                <PhoneInput style={{marginTop:"3rem"}} country={"in"} value={ph} onChange={setPh} />
                <br/>
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

export default App;