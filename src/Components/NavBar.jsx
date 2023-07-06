import React from "react";
import logoicon from "./images/bajajLogo (1).svg";
import searchicon from "./images/searchicon.png";
import { Form, Link, Outlet } from "react-router-dom";
import emilogo from "./images/emicard_icon.png";
import alertimg from './images/alert.png';
import cartimage from './images/cartlogo.png';
import Accountimage from './images/account.png'
import Partnersimage from './images/partnersimage.png';
import offcanvaimage from './images/offcanvasimage.svg';
import inneraccountlogo from './images/inneraccountlogo.png';
import feed from './images/feed.png';
import downloadapp from './images/download-app-img.webp';
import rghtarro from './images/right-arrowhead-in-a-circle.png';



const NavBar = () => {
  return (
    <div>
      <nav className="bothmains">
      <div className="mainnavbar">
        <div className="butandlogo">
        <button class="offcanvas-bt" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><img src={offcanvaimage} className="canvaimg" /></button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel"> Menu</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div className="menumyaccount">
      <div className="accdiv"><img src={inneraccountlogo} className="acclog" /></div>
      <div className="textindiv">
      <h6>MY ACCOUNT</h6>
      <p className="accpara">Make loan payment,drawdown funds <br />explore personalised offers,earn rewards <br />and more</p>
      </div>
      <img src={rghtarro} className="rightarrow" />
    </div>
   
    
  </div>
</div>
          <Link to="/">
            <img src={logoicon} className="logoicon" />
          </Link>
        </div>
        <div className="place">
          <input
            className="inputplace"
            placeholder="Search Bajajfinserve.in"
            type="text"
          />
          <img src={searchicon} className="searchicon" />
        </div>
        <div className="carts">

        <div >
          <Link className="emicard" to="Emi">
              <img src={emilogo} alt="" />
              EMI CARD </Link>
            </div>
         

          <div >
          <Link className="alertdiv" to="Alert">
            <img src={alertimg} className="alertimg" />
             ALERT MESSAGE</Link>
            </div>
         
          <div >
           <Link className="cartdiv" to='Cart'>
              <img src={cartimage} className="cartimag" />
              CART</Link>
            </div>
           


           <div >
           <Link className="MyAccountdiv" to='MyAccount'>
          
              <img src={Accountimage} className="Accountimage" />
              MY ACCOUNTS </Link>
            </div>
          
           <div>
           <Link  className="Partnersdiv" to='Partners'>
            
              <img src={Partnersimage} className="Partnersimage" />
              PARTNERS</Link>
            </div>
           
        </div>

      </div>
      
      </nav>
      <nav className="dropdownmain">
        <div className="drop">
      <nav className="dropdown">
  <button className="bootsrap-drop-bt" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Loans
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">All Loans</a></li>
    <li><a className="dropdown-item" href="#">Personal Loans</a></li>
    <li><a className="dropdown-item" href="#">Insta Personal Loan</a></li>
    <li><a className="dropdown-item" href="#">Business Loan</a></li>
    <li><a className="dropdown-item" href="#">Gold loan</a></li>
    <li><a className="dropdown-item" href="#">Loan for Doctors</a></li>
    <li><a className="dropdown-item" href="#">Medical Equipment Finance</a></li>
    <li><a className="dropdown-item" href="#">Loans for CAs</a></li>
    <li><a className="dropdown-item" href="#">Commercial Lending</a></li>
    <li><a className="dropdown-item" href="#">Home loan</a></li>

  </ul>
</nav>
<nav className="dropdown">
  <button className="bootsrap-drop-bt" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   All On Emi
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Electronics</a></li>
    <li><a className="dropdown-item" href="#">Two wheelers</a></li>
    <li><a className="dropdown-item" href="#">Lifestyle</a></li>
    <li><a className="dropdown-item" href="#">Travel</a></li>
    <li><a className="dropdown-item" href="#">Offers and promotion</a></li>
    <li><a className="dropdown-item" href="#">Shop on e commerce</a></li>



  </ul>
</nav>
<nav className="dropdown">
  <button className="bootsrap-drop-bt" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Bajaj Mall
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Air conditioners</a></li>
    <li><a className="dropdown-item" href="#">Smartphones</a></li>
    <li><a className="dropdown-item" href="#">Air cooler</a></li>
    <li><a className="dropdown-item" href="#">Refrigerators</a></li>
    <li><a className="dropdown-item" href="#">Two-wheelers</a></li>
    <li><a className="dropdown-item" href="#">LED TVs</a></li>
    <li><a className="dropdown-item" href="#">Washing mechines</a></li>
    <li><a className="dropdown-item" href="#">Smatwatches</a></li>
    <li><a className="dropdown-item" href="#">Water purifiers</a></li>
    <li><a className="dropdown-item" href="#">Mattrssess</a></li>
    <li><a className="dropdown-item" href="#">Furniture</a></li>
    <li><a className="dropdown-item" href="#">Cycle</a></li>
    <li><a className="dropdown-item" href="#">Laptops</a></li>
    <li><a className="dropdown-item" href="#">Kitchen Appliance</a></li>
    <li><a className="dropdown-item" href="#">Fitness Equipments</a></li>
    <li><a className="dropdown-item" href="#">Watches</a></li>
    <li><a className="dropdown-item" href="#">Audio Devices</a></li>
    <li><a className="dropdown-item" href="#">Camera Accesories</a></li>

  </ul>
</nav>
<nav className="dropdown">
  <button className="bootsrap-drop-bt" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Cards
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">All Cards</a></li>
    <li><a className="dropdown-item" href="#">Insta Emi card</a></li>
    <li><a className="dropdown-item" href="#">Health Emi Net Card</a></li>
    <li><a className="dropdown-item" href="#">Bajaj finserv RBL bank supercard</a></li>
    <li><a className="dropdown-item" href="#">Bajaj finserv DBS bank Creditcard</a></li>

  </ul>
</nav>
<nav className="dropdown">
  <button className="bootsrap-drop-bt" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Investments
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</nav>   <nav className="dropdown">
  <button className="bootsrap-drop-bt" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Insurance
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</nav>   <nav className="dropdown">
  <button className="bootsrap-drop-bt" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Payments
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</nav>   <nav className="dropdown">
  <button className="bootsrap-drop-bt" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Offers
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</nav>   <nav className="dropdown">
  <button className="bootsrap-drop-bt" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Locate Us
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</nav>   <nav className="dropdown">
  <button className="bootsrap-drop-bt" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Service
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</nav>
</div>
<div className="feedbackdiv">
  <img src={feed} className="feedimg" />
  <span>Feedback</span>
  
</div>
<div className="download-appdiv">
  <img src={downloadapp} alt="" />
  <span>Download the app</span>
</div>


      </nav>

      <Outlet />
    </div>
  );
};

export default NavBar;
