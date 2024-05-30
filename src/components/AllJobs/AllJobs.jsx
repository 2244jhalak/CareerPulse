/* eslint-disable no-unused-vars */

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VoiceSearch from "../VoiceSearch/VoiceSearch";


const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [query, setQuery] = useState('');
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`);
      setJobs(data);
      setFilteredJobs(data); // Initialize filtered jobs with all jobs
    }
    getData();
  }, []);

  const handleSearch = async (e) => {
    if (e) e.preventDefault();
    const searchValue = document.getElementById("search").value.toLowerCase();

    const filtered = jobs.filter(d => d.Title.toLowerCase().includes(searchValue));
    setFilteredJobs(filtered);
    setNoData(filtered.length === 0);
  }

  const handleVoiceSearch = async (transcript) => {
    const filtered = jobs.filter(d => d.Title.toLowerCase().includes(transcript.toLowerCase()));
    setFilteredJobs(filtered);
    setNoData(filtered.length === 0);
  }

  return (
    <div className="my-10">
      <h3 className="text-3xl font-semibold my-5 text-center">All Jobs {filteredJobs.length}</h3>
      <div className="flex lg:flex-row md:flex-row flex-col items-center justify-center mb-5">
       
        <input
          id="search"
          type="text"
          placeholder="Search here"
          className="input input-bordered w-full max-w-xs dark:text-black"
        />
        <button onClick={handleSearch} className="btn btn-primary text-white font-semibold my-3">
          Search
        </button>
       
        <VoiceSearch onSearch={handleVoiceSearch} />
      </div>
      <div className="overflow-x-auto">
        {noData ? (
          <p className="text-center text-red-500">NO DATA FOUND</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th className="dark:text-white">Job Title</th>
                <th className="dark:text-white">Job Posting Date</th>
                <th className="dark:text-white">Application Deadline</th>
                <th className="dark:text-white">Salary Range</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredJobs.map(job => (
                <tr key={job._id}>
                  <td>{job.Title}</td>
                  <td>{job.date}</td>
                  <td>{new Date(job.Deadline).toLocaleDateString()}</td>
                  <td>{job.Salary}</td>
                  <td>
                    <Link to={`/job/${job._id}`}>
                      <button className='btn btn-outline dark:text-white'>View Details</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AllJobs;
