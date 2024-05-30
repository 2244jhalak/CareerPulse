/* eslint-disable no-unused-vars */
import  {  useState } from 'react';
import './ResumeBuilder.css'; // Assuming you have some basic styling
import backgroundImage from '../../../src/assets/images/pngtree-my-resume-background-material-image_177383.jpg'; // Ensure you have a background image in your project


function ResumeBuilder() {
    
  const [resumeData, setResumeData] = useState({
    firstName: '',
    lastName: '',
    fName:'',
    mName:'',
    email: '',
    phone: '',
    dob:'',
    cAddress: '',
    pAddress:'',
    status:'',
    skills: '',
    education: [],
    experience: [],
    
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setResumeData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAddEducation = (e) => {
    e.preventDefault();
    setResumeData(prevData => ({
      ...prevData,
      education: [...prevData.education, { institution: '', degree: '', graduationYear: '' }]
    }));
  };

  const handleAddExperience = (e) => {
    e.preventDefault();
    setResumeData(prevData => ({
      ...prevData,
      experience: [...prevData.experience, { company: '', position: '', startDate: '', endDate: '' }]
    }));
  };

  // Function to download resume as image
  const downloadResumeAsImage = (e) => {
    e.preventDefault();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions (you can adjust these as needed)
    canvas.width = 800;
    canvas.height = 1000;

    // Load background image
    const bgImage = new Image();
    bgImage.src = backgroundImage;
    bgImage.onload = () => {
      // Draw background image
      ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

      // Text styling
      ctx.font = '24px Arial';
      ctx.fillStyle = '#000000';

      // Define margins
      const leftMargin = 130;
      const topMargin = 150;  // This is the added top margin

      // Draw resume data
      let yPosition = topMargin;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      ctx.fillText(`Name: ${resumeData.firstName} ${resumeData.lastName}`, leftMargin, yPosition);
      yPosition += 40;
      ctx.fillText(`Father's Name: ${resumeData.fName}`, leftMargin, yPosition);
      yPosition += 40;
      ctx.fillText(`Mother's Name: ${resumeData.mName}`, leftMargin, yPosition);
      yPosition += 40;
      ctx.fillText(`Email: ${resumeData.email}`, leftMargin, yPosition);
      yPosition += 40;
      ctx.fillText(`Phone: ${resumeData.phone}`, leftMargin, yPosition);
      yPosition += 40;
      ctx.fillText(`Date Of Birth: ${resumeData.dob}`, leftMargin, yPosition);
      yPosition += 40;
      ctx.fillText(`Current Address: ${resumeData.cAddress}`, leftMargin, yPosition);
      yPosition += 40;
      ctx.fillText(`Permanent Address: ${resumeData.pAddress}`, leftMargin, yPosition);
      yPosition += 40;
      ctx.fillText(`Marital Status: ${resumeData.status}`, leftMargin, yPosition);
      yPosition += 40;

      // Draw education section
      ctx.font = '20px Arial';
      yPosition += 60;
      ctx.fillText('Education:', leftMargin, yPosition);
      yPosition += 30;
      resumeData.education.forEach((edu, index) => {
        ctx.fillText(`${edu.degree} in ${edu.institution}, Graduated ${edu.graduationYear}`, leftMargin + 20, yPosition);
        yPosition += 30;
      });

      // Draw experience section
      yPosition += 30;
      ctx.fillText('Experience:', leftMargin, yPosition);
      yPosition += 30;
      resumeData.experience.forEach((exp, index) => {
        ctx.fillText(`${exp.position} at ${exp.company}, ${exp.startDate} - ${exp.endDate}`, leftMargin + 20, yPosition);
        yPosition += 30;
      });

      // Draw skills section
      yPosition += 30;
      ctx.fillText('Skills:', leftMargin, yPosition);
      yPosition += 30;
      ctx.fillText(resumeData.skills, leftMargin + 20, yPosition);

      // Create image URL and trigger download
      const image = canvas.toDataURL('image/jpeg');
      const link = document.createElement('a');
      link.download = 'resume.jpg';
      link.href = image;
      link.click();
      setResumeData({
        firstName: '',
    lastName: '',
    email: '',
    fName:'',
    mName:'',
    phone: '',
    dob:'',
    cAddress: '',
    pAddress:'',
    status:'',
    skills: '',
    education: [],
    experience: [],
      });
    };
  };

  return (
    <div className="App my-10">
      <header className="App-header text-center text-3xl font-semibold my-5">
        <h1>Resume Builder</h1>
      </header>
      <div className="container">
        <div className="editor">
          
          <form className='flex flex-col space-y-5 mx-20 w-3/5'>
            <label>First Name:</label>
            <input className='border border-black' type="text" name="firstName" value={resumeData.firstName} onChange={handleChange} />

            <label>Last Name:</label>
            <input className='border border-black' type="text" name="lastName" value={resumeData.lastName} onChange={handleChange} />
            <label>Fathers Name:</label>
            <input className='border border-black' type="text" name="fName" value={resumeData.fName} onChange={handleChange} />
            <label>Mothers Name:</label>
            <input className='border border-black' type="text" name="mName" value={resumeData.mName} onChange={handleChange} />

            <label>Email:</label>
            <input className='border border-black' type="email" name="email" value={resumeData.email} onChange={handleChange} />

            <label>Phone:</label>
            <input className='border border-black' type="tel" name="phone" value={resumeData.phone} onChange={handleChange} />
            <label>Date Of Birth:</label>
            <input className='border border-black' type="text" name="dob" value={resumeData.dob} onChange={handleChange} />

            <label>Current Address:</label>
            <textarea className='border border-black' name="cAddress" value={resumeData.cAddress} onChange={handleChange} />
            <label>Permanent Address:</label>
            <textarea className='border border-black' name="pAddress" value={resumeData.pAddress} onChange={handleChange} />
            <label>Skills:</label>
            <textarea className='border border-black' name="skills" value={resumeData.skills} onChange={handleChange} />
            <label>Marital Status:</label>
            <textarea className='border border-black' name="status" value={resumeData.status} onChange={handleChange} />

            <h3>Education</h3>
            {resumeData.education.map((edu, index) => (
              <div key={index}>
                <input type="text" placeholder="Institution" value={edu.institution} onChange={(e) => {
                  const updatedEducation = [...resumeData.education];
                  updatedEducation[index].institution = e.target.value;
                  setResumeData(prevData => ({
                    ...prevData,
                    education: updatedEducation
                  }));
                }} />
                <input type="text" placeholder="Degree" value={edu.degree} onChange={(e) => {
                  const updatedEducation = [...resumeData.education];
                  updatedEducation[index].degree = e.target.value;
                  setResumeData(prevData => ({
                    ...prevData,
                    education: updatedEducation
                  }));
                }} />
                <input type="text" placeholder="Graduation Year" value={edu.graduationYear} onChange={(e) => {
                  const updatedEducation = [...resumeData.education];
                  updatedEducation[index].graduationYear = e.target.value;
                  setResumeData(prevData => ({
                    ...prevData,
                    education: updatedEducation
                  }));
                }} />
              </div>
            ))}
            
            <button className='btn btn-outline' onClick={handleAddEducation}>Add Education</button>

            <h3>Experience</h3>
            {resumeData.experience.map((exp, index) => (
              <div key={index}>
                <input type="text" placeholder="Company" value={exp.company} onChange={(e) => {
                  const updatedExperience = [...resumeData.experience];
                  updatedExperience[index].company = e.target.value;
                  setResumeData(prevData => ({
                    ...prevData,
                    experience: updatedExperience
                  }));
                }} />
                <input type="text" placeholder="Position" value={exp.position} onChange={(e) => {
                  const updatedExperience = [...resumeData.experience];
                  updatedExperience[index].position = e.target.value;
                  setResumeData(prevData => ({
                    ...prevData,
                    experience: updatedExperience
                  }));
                }} />
                <input type="text" placeholder="Start Date" value={exp.startDate} onChange={(e) => {
                  const updatedExperience = [...resumeData.experience];
                  updatedExperience[index].startDate = e.target.value;
                  setResumeData(prevData => ({
                    ...prevData,
                    experience: updatedExperience
                  }));
                }} />
                <input type="text" placeholder="End Date" value={exp.endDate} onChange={(e) => {
                  const updatedExperience = [...resumeData.experience];
                  updatedExperience[index].endDate = e.target.value;
                  setResumeData(prevData => ({
                    ...prevData,
                    experience: updatedExperience
                  }));
                }} />
              </div>
            ))}
            <button className='btn btn-outline' onClick={handleAddExperience}>Add Experience</button>

            

            <button className='btn btn-primary text-white' onClick={downloadResumeAsImage}>Download Resume as Image</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;
