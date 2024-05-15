import { useContext,  useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const JobDetails = () => {
    
    const [startDate, setStartDate] = useState(new Date());
    const {user}=useContext(AuthContext);
    const job=useLoaderData();
    
    const {_id,Name,Category,Title,Deadline,Salary,Applicants,Image,email,Description} = job;
    
    
   
   
    
    
    const handleSubmit =async e=>{
        e.preventDefault();
        if(email===user?.email){
            return toast('You can not apply for your own job');
        }
        if(startDate>new Date(Deadline)){
            return toast('Deadline is over dude');
        }
        toast('Successfully Applied');
        
        
        const form=e.target;
        const userName=form.name.value;
        const userEmail=form.email.value;
        const jobId=_id;
        const title=Title;
        const companyName=Name;
        const companyEmail=email;
        const category=Category;
        
        const jobsDeadline=Deadline;
        const myDeadline=startDate
        const salary=Salary;
        const applicants=Applicants;
        const img=Image;
        const description=Description;
        const status='Pending';
        const appliedData={
            userName,userEmail,category,jobId,title,companyName,companyEmail,jobsDeadline,myDeadline,salary,applicants,img,description,status
        }
        try{
            const {data}=await axios.post(`${import.meta.env.VITE_API_URL}/applied`,appliedData);
            console.log(data);

        }catch(err){
            console.log(err);

        }
    }
    
    
   

  
    return (
        <div>    
            

    <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg space-y-3">
               
            <h2 className='text-3xl font-semibold text-green-600'>{Title}</h2>
            <h4 className='text-xl font-semibold'>{Description}</h4>
            <p>Salary : {Salary}</p>
            <p>Applicants : {Applicants}</p>
            {/* Modal start */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn btn-outline dark:text-white px-5" onClick={()=>document.getElementById('my_modal_1').showModal()}>Apply</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
  <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Application settings</h2>

    <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200" >Username</label>
                <input id="username" type="text" name="name" defaultValue={user?.displayName} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" disabled/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" >Email Address</label>
                <input id="emailAddress" name="email" defaultValue={user?.email} type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" disabled/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200" >Deadline</label>
                <DatePicker selected={startDate} className="border-2 px-2 rounded-md dark:bg-black" onChange={(date) => setStartDate(date)} />
                
            </div>

           
        </div>
        <ToastContainer></ToastContainer>

        <div className="flex justify-end mt-6">
            <input className="py-2.5 px-5 text-center cursor-pointer leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" type="submit" value="Submit"/>
        </div>
    </form>
</section>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
            
            {/* Modal end */}
            </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img className="object-cover w-full h-full max-w-2xl rounded-md" src={Image} alt="content photo"/>
        </div>
    </div>

            
        </div>
    );
};

export default JobDetails;