import React from 'react'
import llspdf from "../../assets/LLS2025.pdf"
const Resources = () => {
  return (
    <div className=' w-full flex flex-col mb-3'>
      <div className='flex flex-col items-start justify-items-start'>
        <span className="font-bold mb-3">Resources</span>
        <span className="font-bold text-4xl font-bree">Caregiver Support Resources</span>      
      </div>

      <div className='flex flex-col mt-5'>
        <span >Thank you for completing the Healthy Communication Practice Program™. <a href={llspdf} target="_blank" rel="noopener noreferrer" className='text-blue-500 underline inline'>Here is a PDF</a> that you can download or print that contains a summary of the skills taught in the program. Please see below for additional caregiver support resources from Blood Cancer United:</span>
        <ol className='list-decimal list-inside mt-3 space-y-2 ml-8'>
            <li>A FREE Caregiver Workbook that is a guide to use throughout your time as a blood cancer patient's caregiver. Caregivers may order a copy of the workbook by calling the Information Resource Center (800) 955-4572.</li>
            <li>For other caregiver resources and information, please see:  <a href="https://bloodcancerunited.org/resources/caregivers" className='text-blue-500 underline inline'>https://bloodcancerunited.org/resources/caregivers</a></li>
        </ol>
      </div>
      <span className="my-6 w-full text-sm sm:text-base rounded-xl shadow-2xl p-4 bg-white border border-gray-300">
      Next, let's explore some of the challenges caregivers face in their family relationships and how we can develop open and supportive communication skills.
</span> 
    </div>
  )
}

export default Resources