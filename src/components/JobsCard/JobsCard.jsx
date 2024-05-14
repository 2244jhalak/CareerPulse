import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const JobsCard = ({job}) => {
    const {_id,Name,Title,date,Deadline,Salary,Applicants} = job;
    return (
        <div className='border-2 p-5 rounded-lg'>
            <h2 className='text-2xl font-semibold text-green-600'>{Title}</h2>
            <h4 className='text-xl font-semibold'>{Name}</h4>
            <p>Salary : {Salary}</p>
            <p>Applicants : {Applicants}</p>
            <div>
                <p>Published Date : {date}</p>
                <p className='font-semibold'>Deadline : {new Date(Deadline).toLocaleDateString()}</p>
            </div>
            <div className='text-right'>
                <Link to={`/job/${_id}`}><button className='btn btn-outline dark:text-white'>View Details</button></Link>
            </div>   
            
        </div>
    );
};
JobsCard.propTypes = {
    
    job: PropTypes.object
    
}

export default JobsCard;