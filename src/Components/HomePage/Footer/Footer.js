import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGoogle,faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <section className="footer-container">
     <div className="container my-5">
     <div className="row mx-3">
        <div className="col-md-3">
          <p className='blue-font'>Treatments</p>
          <p className='gray-font'>Emergency Dental Care</p>
          <p className='gray-font'>Check Up</p>
          <p className='gray-font'>Treatment of Personal Diseases</p>
          <p className='gray-font'>Tooth Extraction</p>
          <p className='gray-font'>Check Up</p>
        </div>
        <div className="col-md-3">
        <p className='blue-font'>Treatments</p>
          <p className='gray-font'>Emergency Dental Care</p>
          <p className='gray-font'>Check Up</p>
          <p className='gray-font'>Treatment of Personal Diseases</p>
          <p className='gray-font'>Tooth Extraction</p>
          <p className='gray-font'>Check Up</p>
        </div>
        <div className="col-md-3">
        <p className='blue-font'>Treatments</p>
          <p className='gray-font'>Emergency Dental Care</p>
          <p className='gray-font'>Check Up</p>
          <p className='gray-font'>Treatment of Personal Diseases</p>
          <p className='gray-font'>Tooth Extraction</p>
          <p className='gray-font'>Check Up</p>
        </div>
        <div className="col-md-3">
          <p className='blue-font'>Our address</p>
          <p className='gray-font'>New York</p>
          <a href="#"><FontAwesomeIcon icon={faGoogle}  className=' blue-font icon'/></a>
          <a href="#"><FontAwesomeIcon icon={faFacebook}className='mx-3 blue-font icon' /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram}className=' blue-font icon' /></a>
        </div>
      </div>
      <div className="row my-5 mx-3">
        <p className="text-center"><small>Copyright 2020 All Rights Reserved</small> </p>
      </div>
     </div>
    </section>
  );
};

export default Footer;
