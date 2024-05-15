import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const AllJobs = () => {
    const [jobs,setJobs]=useState([]);
    useEffect(()=>{
        const getData=async()=>{
            const {data}=await axios(`${import.meta.env.VITE_API_URL}/jobs`);
            setJobs(data);
          }
          getData();
    },[])
    const handleSearch=async e=>{
        e.preventDefault();
        const search=document.getElementById("search");
        
        const getData=async()=>{
            const {data}=await axios(`${import.meta.env.VITE_API_URL}/jobs`);
            setJobs(data.filter(d=>d.Title===search.value));
          }
          getData();
    }

    return (
        <div className="my-10">
            <h3 className="text-3xl font-semibold my-5 text-center">All Jobs {jobs.length}</h3>
            <div className="flex items-center justify-center mb-5">
            
                 <input id="search" type="text" placeholder="Search here" className="input input-bordered w-full max-w-xs dark:text-black" />
                 <button onClick={handleSearch} className="btn btn-primary text-white font-semibold">Search</button>
 


            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th className="dark:text-white">Job Title</th>
        <th className="dark:text-white">Job Posting Date</th>
        <th className="dark:text-white">Application Deadline</th>
        <th className="dark:text-white">Salary Range</th>
        
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        jobs.map(job=>
            <tr key={job._id}>
        
        
        <td>{job.Title}</td>
        <td>{job.date}</td>
        <td>{new Date(job.Deadline).toLocaleDateString()}</td>
        <td>{job.Salary}</td>
        <Link to={`/job/${job._id}`}><button className='btn btn-outline dark:text-white'>View Details</button></Link>
        

      </tr>
        )
      }
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default AllJobs;