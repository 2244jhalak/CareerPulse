import { useLoaderData } from "react-router-dom";
import JobCategories from "../JobCategories/JobCategories";


const Home = () => {
    const jobs=useLoaderData();
    
    return (
        <div>
            <JobCategories jobs={jobs}></JobCategories>
            
        </div>
    );
};

export default Home;