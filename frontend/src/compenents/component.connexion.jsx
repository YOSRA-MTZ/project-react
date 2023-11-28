import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../main.css";
import imgSrc from "../images/img-01.png";

export function Connexion() {
  return (
    <>

      <div className="limiter ">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src={imgSrc} alt="IMG" />
            </div>

            <form className="login100-form validate-form">
              <span className="login100-form-title">Member Login</span>

              <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input100" type="text" name="email" placeholder="Email"  />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                
                </span>
              </div>

              <div className="wrap-input100 validate-input" data-validate="Password is required">
              <input className="input100" type="text" name="pass" placeholder="Password"  />
             
                <span className="focus-input100"></span>
                <span className="symbol-input100">
               
                </span>
              </div>

              <div className="container-login100-form-btn">
                <button className="login100-form-btn">Login</button>
              </div>

              <div className="text-center p-t-12">
                <span className="txt1">Forgot</span>
                <a className="txt2" href="#">
                  Username / Password?
                </a>
              </div>

              <div className="text-center p-t-136">
                <a className="txt2" href="#">
                  Create your Account
                 <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i> 
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
