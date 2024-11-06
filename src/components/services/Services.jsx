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
            <h3> Content Creation</h3>
          </div>
          <ul className='service_list'>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Experience in graphic design and ease in working with designers.</p>
            </li>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>General editing and webdign services.</p>
            </li>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Accounting experince and experience with web-based fincial tools.</p>
            </li>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Generating dashboard and data-visualization tools.</p>
            </li>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Custom requests accepted, please use the form below.</p>
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
            <p>Conduct data analyses on pre-existing business performance.</p>
            </li>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Conduct general penitation testing with a focus on human and data security failures.</p>
            </li>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Survey current marketing plan and adjust for target market.</p>
            </li>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>UI/UX consultations and subsequent website improvements.</p>
            </li>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Implement modern strategies to for clients and customers.</p>
            </li>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Provide industry knowledge on customer driven design.</p>
            </li>
          </ul>
        </article>
   
        {/* Web Development */}
        <article className='service'>
          <div className="service_head">
            <h3> Web Development</h3>
          </div>
          <ul className='service_list'>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Front to back-end development (with PostgreSQL experience).</p>
            </li>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Layered styling and design experience.</p>
            </li>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Customer Support Portals: Developing customer service portals with interactive forms, chat support features, and knowledge base integration, ensuring a seamless user experience.</p>
            </li>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Joint mockup, via wireframe, of website prior to the start of project.</p>
            </li>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Responsive web-design with a focus on future change and development.</p>
            </li>
            <li><FaCheckCircle className='service_list-icon'/>
            <p>Consultations and check-ins on structure and design of website.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services