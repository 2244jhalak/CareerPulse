
import Banner from "../Banner/Banner";
import Candidates from "../Candidates/Candidates";
import JobCategories from "../JobCategories/JobCategories";
import Notification from "../Notification/Notification";


const Home = () => {
    
    
    return (
        <div>
            <Banner></Banner>
            <JobCategories></JobCategories>
            <Candidates></Candidates>
            <Notification></Notification>
            
        </div>
    );
};

export default Home;