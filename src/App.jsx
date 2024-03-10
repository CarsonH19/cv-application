import { useState } from 'react';
import  PersonalDetailsForm  from './components/personal';
import  EducationForm  from './components/education';
import  ExperienceForm  from './components/experience';
import Resume from './components/resume';
import './App.css';

function App() {
  const [submittedData, setSubmittedData] = useState({
    name: "John Doe",
    email: "johndoe@email.com",
    number: "(123) 456-7890",
    address: "123 Rocket Blvd, Space City, Universe",
    school: "University of Space Science",
    degree: "Ph.D. in Aerospace Engineering",
    eduStartDate: "201",
    eduEndDate: "2017",
    eduLocation: "Space City, Universe",
    companyName: "SpaceX",
    title: "Senior Rocket Scientist",
    expStartDate: "2017",
    expEndDate: "Present",
    expLocation: "Mars Base Alpha, Mars",
    description: "Lead the design and development of next-generation rocket propulsion systems, including liquid fuel engines and reusable rocket stages.",
  });

  const handlePersonalSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and update formData here
    const updatedFormData = {
      name: e.target.name ? e.target.name.value : '',
      email: e.target.email ? e.target.email.value : '',
      number: e.target.number ? e.target.number.value : '',
      address: e.target.address ? e.target.address.value : '',   
    };
    setSubmittedData(updatedFormData);
    console.log(updatedFormData);
  };

  const handleEducationSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and update formData here
    const updatedFormData = {
      school: e.target.school ? e.target.school.value : '',
      degree: e.target.degree ? e.target.degree.value : '',
      eduStartDate: e.target.eduStartDate ? e.target.eduStartDate.value : '',
      eduEndDate: e.target.eduEndDate ? e.target.eduEndDate.value : '',
      eduLocation: e.target.eduLocation ? e.target.eduLocation.value : '',    
    };
    setSubmittedData(updatedFormData);
    console.log(updatedFormData);
  };

  const handleExperienceSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and update formData here
    const updatedFormData = {
      title: e.target.title ? e.target.title.value : '',
      expStartDate: e.target.expStartDate ? e.target.expStartDate.value : '',
      expEndDate: e.target.expEndDate ? e.target.expEndDate.value : '',
      expLocation: e.target.expLocation ? e.target.expLocation.value : '',
      description: e.target.description ? e.target.description.value : '',      
    };
    setSubmittedData(updatedFormData);
    console.log(updatedFormData);
  };

  return (
    <div className='container'>
      <div className={"forms"}>
        <PersonalDetailsForm onSubmit={handlePersonalSubmit}/>
        <EducationForm onSubmit={handleEducationSubmit}/>
        <ExperienceForm onSubmit={handleExperienceSubmit}/>
      </div>
      <Resume formData={submittedData} />
    </div>
  )
}

export default App;
