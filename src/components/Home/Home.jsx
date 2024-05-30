import { motion } from "framer-motion";
import Banner from "../Banner/Banner";
import Candidates from "../Candidates/Candidates";
import JobCategories from "../JobCategories/JobCategories";
import Notification from "../Notification/Notification";

import Resume from "../Resume/Resume";




const Home = () => {
    
    
    return (
        <div>
            <Banner></Banner>
            
            
            
            <JobCategories></JobCategories>
            
            <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 5 }}
    >
      <Candidates></Candidates>
      
    </motion.div>
    
    <Notification></Notification>
    <Resume></Resume>
    
            
            
            
            
        </div>
    );
};

export default Home;