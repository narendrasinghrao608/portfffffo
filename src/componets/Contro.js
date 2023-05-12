import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import img0 from '../img/th.jfif'
import img1 from '../img/hb.jfif'
import img2 from '../img/cr.jfif'
function Contro() {
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
            <li> <Link to='/'> Home</Link></li>
            <li><Link to='/intro'>Divine Intro</Link></li>
            <li><Link to='/contro'>Contribution in whole world</Link></li>
            <li><Link to='/pastimes'>Pastimes</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
    </nav>
    </div>
    <div className="main">
    <div className="hamburger" onClick={toggle}>
                <img className='ham' src={img1} alt="" style={{width:'29px'}}/>
                <img className='cross' src={img2} alt="" style={{width:'29px'}}/>
            </div>
        <div className="info">
            <div className="devinfo">
                <div className="name">His Divine Grace Abhay charnavind swami shrill parbhupad</div>
                <div className="about">His Divine Grace Abhay Charanaravinda Bhaktivedanta Swami   was an Indian Gaudiya Vaishnava guru who founded ISKCON, commonly known as the "Hare Krishna movement" Members of ISKCON view Bhaktivedanta Swami as a representative and messenger of Lord Chaitanya Mahaprabhu</div>
                <div className="moreabout">
                    Vaikunta Men
                </div>
                <div className="buttons">
                    <button>Contact ISKCON</button>
                </div>
            </div>

            <div className="devpic"><img src={img0} alt="" /></div>
        </div>
    </div>
    </div>
  )
}

export default Contro
