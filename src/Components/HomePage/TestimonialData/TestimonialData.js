import React from 'react';
import img01 from '../../../images/Ellipse 1.png'
import img02 from '../../../images/Ellipse 2.png'
import img03 from '../../../images/Ellipse 3.png'
import Testimonial from '../Testimonial/Testimonial';
import './TestimonialData.css'

const TestimonialData = () => {
  const Data=[
    {
      name:'Winson Harry',
      location:'California',
      img:img01
  },
  {
    name:'Henry Gomez',
    location:'California',
    img:img02
},
{
  name:'Aliza Farari',
  location:'California',
  img:img03
},
]
  return (
    <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="blue-font  text-uppercase mx-3">Testimonial</h5>
                   <h1 className='mx-3  gray-font'>What Our Patients <br/> Says </h1>
               </div>
               <div className="card-group mt-5">
                    {
                        Data.map(Data => <Testimonial Data={Data}></Testimonial>)
                    }
                </div>
           </div>
       </section>
  );
};

export default TestimonialData;