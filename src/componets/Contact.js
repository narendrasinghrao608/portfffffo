import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import img1 from '../img/hb.jfif'
import img2 from '../img/cr.jfif'
function Contact() {
  useEffect(()=>{
    document.querySelector('.cross').style.display='none'
    document.querySelector('.hamburger').addEventListener('click',()=>{
        if(document.querySelector('.sidebar').classList.contains('sidebargo')){
            document.querySelector('.ham').style.display='none'
            setTimeout(() => {                    
                document.querySelector('.cross').style.display='inline'
            }, 500);
        }

        else{
            setTimeout(() => {                    
                document.querySelector('.ham').style.display='inline'
            }, 500);
            document.querySelector('.cross').style.display='none'
        }
    })
},[])
const [isactive,setisactive]=useState(true);
const toggle=()=>{
    setisactive(!isactive)
}
  return (
    <div className="container">
      <div className={isactive?'sidebargo sidebar':'sidebar'} >
        <nav>
          <ul>
            <li>
              {" "}
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/intro">Divine Intro</Link>
            </li>
            <li>
              <Link to="/contro">Contribution in whole world</Link>
            </li>
            <li>
              <Link to="/pastimes">Pastimes</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="main">
      <div className="hamburger" onClick={toggle}>
                <img className='ham' src={img1} alt="" style={{width:'29px'}}/>
                <img className='cross' src={img2} alt="" style={{width:'29px'}}/>
            </div>
        <div className="contactform">
          <h1>Contact to ISKCON</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="clientemail"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Phone Number
              </label>
              <input
                type="phone"
                className="form-control"
                id="client"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Enter Your Name
              </label>
              <input
                type="name"
                className="form-control"
                id="client"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Enquiry
              </label>
              <input
                type="name"
                className="form-control"
                id="client"
              />
            </div>
            <button  type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
