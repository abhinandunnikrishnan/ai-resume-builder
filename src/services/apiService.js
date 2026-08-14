import axiosService from "../api/axiosService";
// save resume api :called by resumeInput component when finish button click
export const saveResumeAPI=async(resumeDetails)=>{
   return await axiosService("POST","/resumes",resumeDetails)
}

// view resume api : called by view component when page loads in browser
export const viewResumeAPI=async(resumeId)=>{
   return await axiosService("GET",`/resumes/${resumeId}`,{})
}

// get all  resume api : called by saved component when page loads in browser
export const getAllResumeAPI=async()=>{
   return await axiosService("GET",'/resumes',{})
}

// remove resume api  : called by saved component when delete btn clicked
export const deleteResumeAPI=async(resumeId)=>{
   return await axiosService("DELETE",`/resumes/${resumeId}`,{})
}

// edit resume api  : called by edit component when update btn clicked
export const editResumeAPI=async(resumeId,resumeDetails)=>{
   return await axiosService("PUT",`/resumes/${resumeId}`,resumeDetails)
}

// add resume to download api  : called by view component when download cv btn clicked
export const downloadResumeAPI=async(resumeDetails)=>{
   return await axiosService("POST",`/downloads`,resumeDetails)
}

// get all download list api  : called by download component when page open in browser
export const getAlldownloadAPI=async()=>{
   return await axiosService("GET",`/downloads`,{})
}