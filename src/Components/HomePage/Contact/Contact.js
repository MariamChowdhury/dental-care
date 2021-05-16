import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
   <section className="contact-section text-center">
<h5 className='gray-font py-3'>Contact</h5>
<h1 className='text-white'>Always connect with us</h1>
<div className='container mt-3'>
<form>
<div class="m-5">
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder='Your Name' />
  </div>
  <div class="m-5">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Email' />
  </div>
  <div class="m-5">
  <textarea class="form-control" placeholder="Leave your message here" ></textarea>
</div>
  <button type="submit" class="btn green-color mt-3 mb-5 text-white">Submit</button>
</form>
</div>
   </section>
  );
};

export default Contact;