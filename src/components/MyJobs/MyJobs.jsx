
import { FaEdit ,FaTrash} from "react-icons/fa";

import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
    
const MyJobs = () => {
    const {user}=useContext(AuthContext);
    const [jobs,setJobs]=useState([]);
    const axiosSecure=useAxiosSecure();

    const url=`/jobs/${user.email}`;
    
    const getData = async () => {
      
      await axiosSecure.get(url)
      .then(res=>{
        setJobs(res.data)
      })
    }
  useEffect(()=>{
        
        getData();
  },[user])


    const handleDelete = async (id) => {
      try {
        const result = await Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        });
    
        if (result.isConfirmed) {
          const response = await axios.delete(`${import.meta.env.VITE_API_URL}/job/${id}`);
          
          // Check if deletion was successful based on HTTP status code
          if (response.status === 200) {
            await Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
    
            getData(); // Call your function to update data
          } else {
            // Handle unsuccessful deletion
            Swal.fire({
              title: "Error!",
              text: "An error occurred while deleting the file.",
              icon: "error"
            });
          }
        }
      } catch (error) {
        console.error(error);
        // Handle other errors, such as network issues
        Swal.fire({
          title: "Error!",
          text: "An error occurred while deleting the file.",
          icon: "error"
        });
      }
    };
    
    return (
        <div className="my-10">
            <h3 className="text-3xl font-semibold text-center my-5">Welcome to my jobs</h3>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th className="dark:text-white">Job Title</th>
        <th className="dark:text-white">Company</th>
        <th className="dark:text-white">Category</th>
        <th className="dark:text-white">Salary</th>
        <th className="dark:text-white">Applicants</th>
        <th className="dark:text-white">Published Date</th>
        <th className="dark:text-white">Deadline</th>
        <th className="dark:text-white">Email</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        jobs.map(job=>
            <tr key={job._id}>
        
        <td className="flex lg:flex-row md:flex-col flex-col items-center gap-x-1"><img className="h-10 w-10 rounded-[50%]" src={job.Image} alt="" title={job.Description} /><span>{job.Title}</span></td>
        <td>{job.Name}</td>
        <td>{job.Category}</td>
        <td>{job.Salary}</td>
        <td>{job.Applicants}</td>
        <td>{job.date}</td>
        <td>{new Date(job.Deadline).toLocaleDateString()}</td>
        <td>{job.email}</td>
        <td><button onClick={()=>handleDelete(job._id)}><FaTrash title="Delete"></FaTrash></button></td>

        <td><Link to={`/update/${job._id}`}><FaEdit title="Edit"></FaEdit></Link></td>

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