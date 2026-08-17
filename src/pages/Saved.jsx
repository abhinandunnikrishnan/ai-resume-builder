import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBackward, FaForward, FaTrash } from "react-icons/fa";
import { deleteResumeAPI, getAllResumeAPI } from '../services/apiService';
import { FaSearch } from "react-icons/fa";

function Saved() {
  const[allResumes,setAllResumes]=useState([])
  const [searchKey,setSearchKey]=useState("")
  const [dummyResumes,setDummyResumes]=useState([])
  const[currentpage,setCurrentPage]=useState(1)
  const rowsPerPage=4
  const lastIndexOfCurrentPage=currentpage * rowsPerPage
  const firstIndexOfCurrentPage=lastIndexOfCurrentPage-rowsPerPage
  const currentResumes=allResumes.slice(firstIndexOfCurrentPage,lastIndexOfCurrentPage)
  const totalPages=Math.ceil(allResumes.length/rowsPerPage)
  // console.log(searchKey);

  useEffect(()=>{
    getAllResumes()
  },[])

  useMemo(()=>{
    setAllResumes(dummyResumes.filter(item=>item.job.toLowerCase().includes(searchKey.toLowerCase())))
  },[searchKey])

  
  
  const getAllResumes=async()=>{
    const response=await getAllResumeAPI()
    if(response.status==200){
      setAllResumes(response.data)
      setDummyResumes(response.data)
    }
  }

  const removeResume=async(id)=>{
    if(confirm("do you want to delete the resume?")){
      const response=await deleteResumeAPI(id)
    if(response.status==200){
      getAllResumes()
    }
    }
  
}

  return (
    <div className='my-5 container d-flex justify-content-center align-items-center flex-column'>
      <h1>All Saved Resumes</h1>
      <p style={{textAlign:'justify'}}>All resumes submitted to the platform in one place, allowing administrators or recruiters to efficiently view, search, filter, and manage candidate profiles. It provides a quick overview of available candidates and their key details, making the recruitment and candidate-selection process more organized and efficient.</p>
      <div className="d-flex justify-content-center align-items-center w-50">
        <input onChange={(e)=>{setSearchKey(e.target.value);setCurrentPage(1);}} type="text" placeholder='Search candidate by there job role' className='form-control' />
        <FaSearch style={{marginLeft:"-30px"}}/>
      </div>
      <table className="my-5 table table-hover table-stripped">
        <thead>
          <tr className="table-dark">
            <th>#</th>
            <th>Resume</th>
            <th>Job Role</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {
            currentResumes?.length>0?
            currentResumes?.map((resume,index)=>(
              <tr key={resume?.id}>
            <td>{index+1}</td>
            <td> <Link to={`/resumes/${resume?.id}`}>{resume?.fullName.toUpperCase()}</Link> </td>
            <td>{resume?.job.toUpperCase()}</td>
            <td><button onClick={()=>removeResume(resume?.id)} className='btn text-danger'><FaTrash /></button></td>
          </tr>
            ))
            :
            <p className='text-center' >No resumes added yet</p>
          }
        </tbody>
      </table>
      <div className="d-flex align-items-center">
        <button className="btn" onClick={()=>setCurrentPage(currentpage-1)} disabled={currentpage==1}>
          <FaBackward/>
        </button>

          {currentpage} of {totalPages}

          <button className='btn' onClick={()=>setCurrentPage(currentpage+1)} disabled={currentpage==totalPages || totalPages==0}>
            <FaForward/>
          </button>
      </div>
    </div>
  )
}

export default Saved