import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import img1 from '../img/hb.jfif'
import img2 from '../img/cr.jfif'
function Pastimes() {
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
        <div className="blogcontainer">
          <h1> Jalduta diary</h1>
          <div className="blogitem">
            <h2>when prabhupad reach new York</h2>
            <p>
              April 1965: While approaching the Scindia Steam Navigation Company
              in Bombay to sponsor his passage to America, Srila Prabhupada
              received one of their complimentary diaries. He used it at first
              as an appointment book. Once his voyage to America on the Jaladuta
              began in August of that year, he made regular entries in the diary
              to record the events of the journey. Subsequently, the diary was
              kept in the safe of the New York temple until 1972, when Srila
              Prabhupada requested Bali−mardana dasa, the temple president, to
              take personal care of it. Today it is still in the care of
              Bali−mardana dasa, and he is arranging for its permanent display
              and preservation
            </p>
            <button className="btn ">Read More</button>
          </div>
          <div className="blogitem">
            <h2>when prabhupad reach new York</h2>
            <p>
              April 1965: While approaching the Scindia Steam Navigation Company
              in Bombay to sponsor his passage to America, Srila Prabhupada
              received one of their complimentary diaries. He used it at first
              as an appointment book. Once his voyage to America on the Jaladuta
              began in August of that year, he made regular entries in the diary
              to record the events of the journey. Subsequently, the diary was
              kept in the safe of the New York temple until 1972, when Srila
              Prabhupada requested Bali−mardana dasa, the temple president, to
              take personal care of it. Today it is still in the care of
              Bali−mardana dasa, and he is arranging for its permanent display
              and preservation
            </p>
            <button className="btn">Read More</button>
          </div>
          <div className="blogitem">
            <h2>when prabhupad reach new York</h2>
            <p>
              April 1965: While approaching the Scindia Steam Navigation Company
              in Bombay to sponsor his passage to America, Srila Prabhupada
              received one of their complimentary diaries. He used it at first
              as an appointment book. Once his voyage to America on the Jaladuta
              began in August of that year, he made regular entries in the diary
              to record the events of the journey. Subsequently, the diary was
              kept in the safe of the New York temple until 1972, when Srila
              Prabhupada requested Bali−mardana dasa, the temple president, to
              take personal care of it. Today it is still in the care of
              Bali−mardana dasa, and he is arranging for its permanent display
              and preservation
            </p>
            <button className="btn ">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pastimes;
