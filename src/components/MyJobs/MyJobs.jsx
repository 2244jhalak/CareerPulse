
import { FaEdit ,FaTrash} from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";


const MyJobs = () => {
    const {user}=useContext(AuthContext);
    const [jobs,setJobs]=useState([]);
    useEffect(()=>{
        const getData=async()=>{
            const {data}=await axios(
                `${import.meta.env.VITE_API_URL}/jobs/${user?.email}`
            )
            setJobs(data);
        }
        getData();
    },[user])
    console.log(jobs);
    return (
        <div className="my-10">
            <h3 className="text-3xl font-semibold text-center my-5">Welcome to my jobs</h3>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Post Name</th>
        <th>Company</th>
        <th>Category</th>
        <th>Salary</th>
        <th>Applicants</th>
        <th>Published Date</th>
        <th>Deadline</th>
        <th>Email</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        jobs.map(job=>
            <tr key={job._id}>
        
        <td className="flex items-center gap-x-1"><img className="h-10 w-10 rounded-[50%]" src={job.Image} alt="" title={job.Description} /><span>{job.Title}</span></td>
        <td>{job.Name}</td>
        <td>{job.Category}</td>
        <td>{job.Salary}</td>
        <td>{job.Applicants}</td>
        <td>{job.date}</td>
        <td>{job.Deadline}</td>
        <td>{job.email}</td>
        <td><FaTrash className="cursor-pointer" title="Delete"></FaTrash></td>

        <td><FaEdit className="cursor-pointer" title="Edit"></FaEdit></td>

      </tr>
        )
      }
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default MyJobs;