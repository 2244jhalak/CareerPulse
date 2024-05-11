import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobsCard from '../JobsCard/JobsCard';

const JobCategories = ({jobs}) => {
   
    return (
        <div className='my-10'>
            <h3 className='text-center text-3xl font-semibold'>Our Jobs List</h3>
            <div>
            <Tabs>
    <TabList className='flex items-center justify-center'>
      <Tab>All Jobs</Tab>
      <Tab>On-Site Job</Tab>
      <Tab>Remote Job</Tab>
      <Tab>Hybrid</Tab>
      <Tab>Part-Time</Tab>
      
    </TabList>

    <TabPanel className="container mx-auto my-5">
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
        {
          jobs.map(job=><JobsCard key={job._id} job={job}></JobsCard>)
        }
      </div>
    </TabPanel>
    <TabPanel className="container mx-auto">
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
        {
          jobs.filter(j=>j.Category==='On-Site Job').map(job=><JobsCard key={job._id} job={job}></JobsCard>)
        }
      </div>
      
    </TabPanel>
    <TabPanel className="container mx-auto my-5">
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
        {
          jobs.filter(j=>j.Category==='Remote Job').map(job=><JobsCard key={job._id} job={job}></JobsCard>)
        }
      </div>
      
    </TabPanel>
    <TabPanel className="container mx-auto my-5">
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
        {
          jobs.filter(j=>j.Category==='Hybrid').map(job=><JobsCard key={job._id} job={job}></JobsCard>)
        }
      </div>
      
    </TabPanel>
    <TabPanel className="container mx-auto my-5">
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
        {
          jobs.filter(j=>j.Category==='Part-Time').map(job=><JobsCard key={job._id} job={job}></JobsCard>)
        }
      </div>
      
    </TabPanel>
  </Tabs>
            </div>
            
        </div>
    );
};

JobCategories.propTypes = {
    
    jobs: PropTypes.array
    
}

export default JobCategories;