import React from 'react'
import css from './Firstapp.css'
export default function Firstapp() {
  return (
    <div>
        <header>
  <div className="logo">
      <a href="index.html"><h1>React 1st App</h1></a>
  </div>
  <ul className="navlinks">
      <li><a href="index.html">Home</a></li>
      <li><a href="allquizes.html">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Terms</a></li>
  </ul>
  <div className="cntbtn"><button>Contact</button></div>
  <i className='bx bx-menu'></i>
</header>

<div className="mobmenu">
  <ul className="navlinks">
    <li><a href="index.html">Home</a></li>
    <li><a href="allquizes.html">Quizes</a></li>
    <li><a href="#">Pricing</a></li>
    <li><a href="#">Blog</a></li>
</ul>
<div className="mobcntbtn"><button>Contact</button></div>
  </div>

  



  
</div>

  )
}
