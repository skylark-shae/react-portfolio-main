import React from 'react'
import './services.css'
import { FaCheckCircle } from "react-icons/fa";


function Services() {
  return (
    <section id='services'>
      <h5>What I Can Do For Your Business</h5>
      <h2>Services</h2>

      <div className="container services_container">

        {/* Content creation */}
        <article className='service'>
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service_list'>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Graphic design expertise and collaboration with designers.</p>
            </li>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>General web design and editing services.</p>
            </li>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Accounting skills with experience in web-based financial tools.</p>
            </li>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Dashboard and data visualization development.</p>
            </li>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Open to custom requests—please use the form below.</p>
            </li>
          </ul>
        </article>
        
        {/* Marketing and conultation */}
        <article className='service'>
          <div className="service_head">
            <h3> Marketing and Consultations</h3>
          </div>
          <ul className='service_list'>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Data analysis of business performance.</p>
            </li>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Penetration testing focused on human and data security.</p>
            </li>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Marketing plan review and target market adjustments.</p>
            </li>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>UI/UX consultations and website enhancements.</p>
            </li>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Implementation of modern client/customer strategies</p>
            </li>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Industry insights on customer-driven design.</p>
            </li>
          </ul>
        </article>
   
        {/* Web Development */}
        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Full-stack development (including PostgreSQL)..</p>
            </li>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Advanced styling and design expertise.</p>
            </li>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Customer support portal development with interactive features.</p>
            </li>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Wireframe mockups before project initiation.</p>
            </li>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Responsive designs ready for future updates</p>
            </li>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Ongoing consultations on deployed websites.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services