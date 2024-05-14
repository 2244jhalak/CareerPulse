import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import DatePicker from "react-datepicker";
import Swal from 'sweetalert2'

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";


const AddJobs = () => {
    const [startDate, setStartDate] = useState(new Date());
    const {user}=useContext(AuthContext);
    const handleAdd=async e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const category=form.category.value;
        const description=form.description.value;
        const applicants=form.applicants.value;
        const salary=form.salary.value;
        const image=form.image.value;
        const title=form.title.value;
        const date=form.date.value;
        const deadline=startDate;
        const addJobs={
            Name:name,

Description:description,

Category:category,

Image:image,

Applicants:applicants,

date:date,

Deadline:deadline,

Salary:salary,

Title:title,

email:email

        }
        console.log(addJobs);
        try{
            const {data}=await axios.post(`${import.meta.env.VITE_API_URL}/job`,addJobs);
            Swal.fire({
                title: 'Succeess!',
                text: 'Successfully Added',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            console.log(data);
            

        }catch(err){
            console.log(err);

        }

    }
    return (
        <div className="my-10">
            <h3 className="text-3xl font-semibold text-center">Please Add Job</h3>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Add Job settings</h2>

    <form onSubmit={handleAdd}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200">Username</label>
                <input id="username" defaultValue={user?.displayName} name="name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" disabled/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200">Email Address</label>
                <input id="emailAddress" type="email" defaultValue={user?.email} name="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" disabled/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200">Job Category</label>
                <input id="username" name="category" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200">Description</label>
                <input id="emailAddress" type="text" name="description" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200">Applicants</label>
                <input id="username" type="number" name="applicants" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200">Salary</label>
                <input id="emailAddress" type="text" name="salary" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200">Image</label>
                <input id="password" type="url" name="image" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200">Title</label>
                <input id="passwordConfirmation" type="text" name="title" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200">Date</label>
                <input id="passwordConfirmation" type="text" name="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            
        </div>
        <div>
                <label className="text-gray-700 dark:text-gray-200" >Deadline</label>
                <DatePicker selected={startDate} className="border-2 px-2 rounded-md my-5 dark:bg-black" onChange={(date) => setStartDate(date)} />
                
        </div>

        <div className="flex justify-end mt-6">
            <input className="py-2.5 px-5 text-center cursor-pointer leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" type="submit" value="Add"/>
        </div>
    </form>
</section>
            
        </div>
    );
};

export default AddJobs;