import React from 'react'
import { Link } from 'react-router-dom'
import Preview from '../components/Preview'
import { FaFileDownload } from "react-icons/fa";
import Edit from '../components/Edit';
import { MdTextSnippet } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import { AiFillBackward } from "react-icons/ai";


function View() {
  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/* navigation icons */}
          <div className="d-flex justify-content-center align-items-center">
            {/* download */}
            <bubtton style={{color:'#714a2f'}} className="btn  me-2"><FaFileDownload  className='fs-3'/> Download CV</bubtton>
            {/* edit */}
            <Edit/>
            {/* all resumes */}
            <Link to={'/all-resumes'} style={{color:'#714a2f'}} className='btn mx-2'><MdTextSnippet className='fs-3'/>ALL Resumes</Link>
            {/* download history */}
            <Link to={'/downloads'} style={{color:'#714a2f'}} className='btn me-2'><IoMdRefresh className='fs-3' />Downlaod History</Link>
            {/* back */}
            <Link to={'/resume-details'} style={{color:'#714a2f'}} className='btn '><AiFillBackward className='fs-3'/>Home</Link>
          </div>
          {/* preview component */}
          <div className="p-5">
            <Preview/>
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  )
}

export default View