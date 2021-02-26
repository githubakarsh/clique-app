import {useState} from 'react';
import { regexChecker } from '../../utils/regex-checker';

const JournalLogin = ({ otpNumber }) => {

    const [pageState, setPageState] = useState([]);

    const phoneNumberChange = (value) => {
        const isValid = regexChecker('phoneNumber', value);
        (value.length <= 10 && isValid) && setPageState({...pageState, phoneNumber: value})
    }

    const emailChange = (value) => {
        const isValid = regexChecker('email', value);
        isValid && setPageState({...pageState, emailAddress: value});
    }
    const passwordChange = (value) => {
        const isValid = regexChecker('password', value);
        isValid && setPageState({...pageState, password: value});
    }
  return (
    <div className="journal-login">
        <div className="journal-container">
      <form>
        <div className="email-address-container">
          <div className="title">
            <label>Login</label>
          </div>
          <div className="journal-input-container">
            <input placeholder="Email" className="journal-login-input" />
          </div>
          <div className="journal-input-container">
            <input placeholder="Password" className="journal-login-input" />
          </div>
          <div className="journal-button-container">
            <button className="journal-login-button">Login</button>
          </div>
          <div className="journal-anchor-container">
            <a href="#" className="journal-login-anchor">
              Forgot Password
            </a>
          </div>
        </div>

        <div className="phonenumber-container">
          <div className="journal-input-container">
            <input placeholder="Phone Number" id="j-phonenumber" value={pageState.phoneNumber}
            className="journal-login-input" onChange={(e) => phoneNumberChange(e.target.value)}/>
          </div>
          <div className="journal-button-container">
            <button className="journal-login-button">Send OTP</button>
          </div>
          {otpNumber && (
            <div className="journal-input-container">
              <input placeholder="otp" className="journal-login-input" />
            </div>
          )}
        </div>
      </form>
      </div>
    </div>
  );
};

export default JournalLogin;
