/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */



import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../provider/AuthProvider";
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import useAxiosSecure from "../../hooks/useAxiosSecure";

// Define styles for the PDF document
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  jobItem: {
    marginBottom: 10,
  },
});

// PDF document component
// eslint-disable-next-line react/prop-types
const AppliedJobsPDF = ({ jobs }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Applied Jobs Summary</Text>
      
        {jobs.map((job) => (
          <View key={job._id} style={styles.jobItem}>
            <Text>{job.title}</Text>
            <Text>{job.userName}</Text>
            <Text>{job.userEmail}</Text>
            <Text>{new Date(job.myDeadline).toLocaleDateString()}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const axiosSecure=useAxiosSecure();
    
  const url=`/applied/${user.email}`;

const getData = async () => {
      
  await axiosSecure.get(url)
  .then(res=>{
    setJobs(res.data)
  })

};
  useEffect(() => {
    
    getData();
  }, [user]);
  const handleCategory=async filter=>{
  
    
    
    const getData=async()=>{
        const {data}=await axios(`${import.meta.env.VITE_API_URL}/applied/${user.email}`);
        setJobs(data.filter(d=>d.category===filter));
      }
      getData();
}

  return (
    <div className="my-10">
      <h3 className="text-3xl font-semibold text-center mb-5">Applied Jobs</h3>
      <PDFDownloadLink className="bg-blue-950 text-white px-2 py-2 rounded-lg" document={<AppliedJobsPDF jobs={jobs} />} fileName="applied_jobs_summary.pdf">
       
        {({ blob,url, loading, error }) =>
          loading ? 'Loading document...' : 'Download Summary PDF'
        }
      </PDFDownloadLink>
      {/* Render applied jobs list */}
      {jobs.map((job) => (
        <div key={job._id} className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
          {/* Render individual job details */}
        </div>
      ))}
      {/* Dropdown Start */}
      <div className="ml-20 my-5">
            <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">Job Category</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li onClick={()=>handleCategory('On-Site Job')}><a>On-Site Job</a></li>
    <li onClick={()=>handleCategory('Remote Job')}><a>Remote Job</a></li>
    <li onClick={()=>handleCategory('Hybrid')}><a>Hybrid</a></li>
    <li onClick={()=>handleCategory('Part-Time')}><a>Part-Time</a></li>
  </ul>
</div>
            </div>
            {/* Dropdown End */}
            
            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-y-5">
                {
                    jobs.map(job=>
                        <div key={job._id} className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
    <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{
    backgroundImage: `url(${job.img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right', // Set the background position to the right
    /* You can add more background properties here if needed */
  }}></div>

    <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{job.title}</h3>

        <div className="px-3 py-2 bg-gray-200 dark:bg-gray-700">
        <span className="font-bold text-gray-800 dark:text-gray-200">Name : {job.userName}</span><br></br>
            <span className="font-bold text-gray-800 dark:text-gray-200">Email : {job.userEmail}</span><br></br>
            <span className="font-bold text-gray-800 dark:text-gray-200">Apply Date : {new Date(job.myDeadline).toLocaleDateString()}</span>
            
        </div>
    </div>
    </div>
                    )
                }
            </div>
      
    </div>
  );
};

export default AppliedJobs;
