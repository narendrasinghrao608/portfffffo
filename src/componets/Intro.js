import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import img from '../img/about.jfif'
import img1 from '../img/hb.jfif'
import img2 from '../img/cr.jfif'
function Intro() {
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
            <h1>About  Saviour Of Whole World ISKCON Founder Aachary Jagad Guru Shrill Prabhupadji</h1>
        <div className="info">
          <div className="devinfo">
            <p>
              His Divine Grace A. C. Bhaktivedanta Swami Prabhupada was born in
              1896 in Calcutta, India. He first met his spiritual master, Srila
              Bhaktisiddhanta Sarasvati Gosvami, in Calcutta in 1922.
              Bhaktisiddhanta Sarasvati, a prominent devotional scholar and the
              founder of sixty-four branches of Gaudiya Mathas (Vedic
              institutes), liked this educated young man and convinced him to
              dedicate his life to teaching Vedic knowledge in the Western
              world. Srila Prabhupada became his student, and eleven years later
              (1933) at Allahabad, he became his formally initiated disciple. At
              their first meeting, in 1922, Srila Bhaktisiddhanta Sarasvati
              Thakura requested Srila Prabhupada to broadcast Vedic knowledge
              through the English language. In the years that followed, Srila
              Prabhupada wrote a commentary on the Bhagavad-gita and in 1944,
              without assistance, started an English fortnightly magazine.
              Recognizing Srila Prabhupada's philosophical learning and
              devotion, the Gaudiya Vaisnava Society honored him in 1947 with
              the title "Bhaktivedanta." In 1950, at the age of fifty-four,
              Srila Prabhupada retired from married life, and four years later
              he adopted the vanaprastha (retired) order to devote more time to
              his studies and writing. Srila Prabhupada traveled to the holy
              city of Vrndavana, where he lived in very humble circumstances in
              the historic medieval temple of Radha-Damodara. There he engaged
              for several years in deep study and writing. He accepted the
              renounced order of life (sannyasa) in 1959. At Radha-Damodara,
              Srila Prabhupada began work on his life's masterpiece: a
              multivolume translation and commentary on the 18,000-verse
              Srimad-Bhagavatam (Bhagavata Purana). He also wrote Easy Journey
              to Other Planets. After publishing three volumes of Bhagavatam,
              Srila Prabhupada came to the United States, in 1965, to fulfill
              the mission of his spiritual master. Since that time, His Divine
              Grace has written over sixty volumes of authoritative
              translations, commentaries and summary studies of the
              philosophical and religious classics of India. In 1965, when he
              first arrived by freighter in New York City, Srila Prabhupada was
              practically penniless. It was after almost a year of great
              difficulty that he established the International Society for
              Krishna Consciousness in July of 1966. Under his careful guidance,
              the Society has grew within a decade to a worldwide confederation
              of almost one hundred asramas, schools, temples, institutes and
              farm communities. In 1968, Srila Prabhupada created New Vrndavana,
              an experimental Vedic community in the hills of West Virginia.
              Inspired by the success of New Vrndavana, then a thriving farm
              community of more than one thousand acres, his students founded
              several similar communities in the United States and abroad. In
              1972, His Divine Grace introduced the Vedic system of primary and
              secondary education in the West by founding the Gurukula school in
              Dallas, Texas. The school began with three children in 1972, and
              by the beginning of 1975 the enrollment had grown to one hundred
              fifty. Srila Prabhupada also inspired the construction of a large
              international center at Sridhama Mayapur in West Bengal, India,
              which is also the site for a planned Institute of Vedic Studies. A
              similar project is the magnificent Krsna-Balarama Temple and
              International Guest House in Vrndavana, India. These are centers
              where Westerners can live to gain firsthand experience of Vedic
              culture.
            </p>
          </div>
          <img src={img}  alt="" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
