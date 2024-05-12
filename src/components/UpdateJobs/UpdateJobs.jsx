import { useContext} from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import Swal from 'sweetalert2'



const UpdateJobs = () => {
    const {user}=useContext(AuthContext);
    const job=useLoaderData();
    const {Name,Title,Deadline,Category,Salary,Applicants,Image,date,Description,_id} = job;
    const handleUpdate=async e=>{
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
        const deadline=form.deadline.value;
        const updateJobs={
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
        console.log(updateJobs);
        try{
            const {data}=await axios.put(`${import.meta.env.VITE_API_URL}/job/${_id}`,updateJobs);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Succeess!',
                    text: 'Successfully Updated',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
              }
            console.log(data);
            

        }catch(err){
            console.log(err);

        }

    }
   

    return (
        <div className="my-10">
            <h3 className="text-3xl font-semibold text-center">Update Job</h3>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Update Job settings</h2>

    <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200">Username</label>
                <input defaultValue={Name} name="name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" disabled/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200">Email Address</label>
                <input type="email" defaultValue={user?.email} name="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" disabled/>
            </div>
            <div className="relative">
                <label className="text-gray-700 dark:text-gray-200">Job Category</label>
                <input name="category" type="text" defaultValue={Category} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200">Description</label>
                <input type="text" name="description" defaultValue={Description} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200">Applicants</label>
                <input type="number" name="applicants" defaultValue={Applicants} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200">Salary</label>
                <input type="text" name="salary" defaultValue={Salary} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200">Image</label>
                <input type="url" name="image" defaultValue={Image} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200">Title</label>
                <input type="text" name="title" defaultValue={Title} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200">Date</label>
                <input type="text" name="date" defaultValue={date} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            
        </div>
        <div>
                <label className="text-gray-700 dark:text-gray-200">Deadline</label>
                <input type="text" name="deadline" defaultValue={new Date(Deadline).toLocaleDateString()} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                
        </div>

        <div className="flex justify-end mt-6">
            <input className="py-2.5 px-5 text-center cursor-pointer leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" type="submit" value="Update"/>
        </div>
    </form>
</section>
            
        </div>
    );
};

export default UpdateJobs;