import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowBack } from "react-icons/io";

function Download() {
  return (
    <div className='container my-5'>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Download Resume History</h2>
        <Link to={'/resume-details'}><IoMdArrowBack />Back</Link>
      </div>
      <p className='mt-3'>Total Downloaded Resumes is <span className='fw-bolder'>10</span></p>
      <div className="row my-5">
      {/* duplicate according to download resume count */}
        <div className="col-lg-4 mb-3">
          <div style={{height:'400px'}} className="shadow p-3 rounded">
            <div className="d-flex justify-content-between align-items-center">
              <h6>Review at: timeStamp</h6>
              
            </div>
            <div className='mt-3 text-center'>
              <Link to={'/resumes/id'}><img className='w-100' height={'300px'} src="https://www.resumetemplates.com/wp-content/uploads/2025/03/3590975-restaurant-server-job-description-resume-example.pdf.jpeg" alt="downloaded cv" /></Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Download