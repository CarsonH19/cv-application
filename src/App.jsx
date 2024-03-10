import { useState } from "react";
import PersonalDetailsForm from "./components/personal";
import EducationForm from "./components/education";
import ExperienceForm from "./components/experience";
import Resume from "./components/resume";
import "./App.css";

function App() {
  const [submittedData, setSubmittedData] = useState({
    name: "John Doe",
    email: "johndoe@email.com",
    number: "(123) 456-7890",
    address: "123 Rocket Blvd, Space City, Universe",
    education: [
      {
        school: "University of Space Science",
        degree: "Ph.D. in Aerospace Engineering",
        eduStartDate: "2017",
        eduEndDate: "2021",
        eduLocation: "Space City, Universe",
      },
      {
        school: "University of Space Science",
        degree: "M.S. in Aerospace Engineering",
        eduStartDate: "2015",
        eduEndDate: "2017",
        eduLocation: "Space City, Universe",
      },
      {
        school: "University of Space Science",
        degree: "B.S. in Mechanical Engineering",
        eduStartDate: "2011",
        eduEndDate: "2015",
        eduLocation: "Space City, Universe",
      },
    ],
    experience: [
      {
        companyName: "SpaceX",
        title: "Senior Rocket Scientist",
        expStartDate: "2021",
        expEndDate: "Present",
        expLocation: "Mars Base Alpha, Mars",
        description:
          "Lead the design and development of next-generation rocket propulsion systems, including liquid fuel engines and reusable rocket stages.",
      },
      {
        companyName: "NASA",
        title: "Aerospace Engineer",
        expStartDate: "2017",
        expEndDate: "2021",
        expLocation: "Kennedy Space Center, Earth",
        description:
          "Contributed to the development of the Space Launch System (SLS) by analyzing propulsion system performance and conducting simulations.",
      },
    ],
  });

  const handlePersonalSubmit = (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...submittedData,
      name: e.target.name.value,
      email: e.target.email.value,
      number: e.target.number.value,
      address: e.target.address.value,
    };
    setSubmittedData(updatedFormData);
  };

  const handleEducationSubmit = (e) => {
    e.preventDefault();
    const newEducation = {
      school: e.target.school.value,
      degree: e.target.degree.value,
      eduStartDate: e.target.eduStartDate.value,
      eduEndDate: e.target.eduEndDate.value,
      eduLocation: e.target.eduLocation.value,
    };
    const updatedFormData = {
      ...submittedData,
      education: [...submittedData.education, newEducation],
    };
    setSubmittedData(updatedFormData);
  };

  const handleExperienceSubmit = (e) => {
    e.preventDefault();
    const newExperience = {
      companyName: e.target.companyName.value,
      title: e.target.title.value,
      expStartDate: e.target.expStartDate.value,
      expEndDate: e.target.expEndDate.value,
      expLocation: e.target.expLocation.value,
      description: e.target.description.value,
    };
    const updatedFormData = {
      ...submittedData,
      experience: [...submittedData.experience, newExperience],
    };
    setSubmittedData(updatedFormData);
  };

  const onEducationDelete = (index) => {
    const updatedEducation = [...submittedData.education];
    updatedEducation.splice(index, 1);
    setSubmittedData({ ...submittedData, education: updatedEducation });
  };

  const onExperienceDelete = (index) => {
    const updatedExperience = [...submittedData.experience];
    updatedExperience.splice(index, 1);
    setSubmittedData({ ...submittedData, experience: updatedExperience });
  };

  const resetResume = () => {
    setSubmittedData({
      name: "John Doe",
      email: "johndoe@email.com",
      number: "(123) 456-7890",
      address: "123 Rocket Blvd, Space City, Universe",
      education: [
        {
          school: "University of Space Science",
          degree: "Ph.D. in Aerospace Engineering",
          eduStartDate: "2017",
          eduEndDate: "2021",
          eduLocation: "Space City, Universe",
        },
        {
          school: "University of Space Science",
          degree: "M.S. in Aerospace Engineering",
          eduStartDate: "2015",
          eduEndDate: "2017",
          eduLocation: "Space City, Universe",
        },
        {
          school: "University of Space Science",
          degree: "B.S. in Mechanical Engineering",
          eduStartDate: "2011",
          eduEndDate: "2015",
          eduLocation: "Space City, Universe",
        },
      ],
      experience: [
        {
          companyName: "SpaceX",
          title: "Senior Rocket Scientist",
          expStartDate: "2021",
          expEndDate: "Present",
          expLocation: "Mars Base Alpha, Mars",
          description:
            "Lead the design and development of next-generation rocket propulsion systems, including liquid fuel engines and reusable rocket stages.",
        },
        {
          companyName: "NASA",
          title: "Aerospace Engineer",
          expStartDate: "2017",
          expEndDate: "2021",
          expLocation: "Kennedy Space Center, Earth",
          description:
            "Contributed to the development of the Space Launch System (SLS) by analyzing propulsion system performance and conducting simulations.",
        },
      ],
    });
  };

  return (
    <div className="container">
      <div className={"forms"}>
        <PersonalDetailsForm onSubmit={handlePersonalSubmit} />
        <EducationForm onSubmit={handleEducationSubmit} />
        <ExperienceForm onSubmit={handleExperienceSubmit} />
      </div>
      <Resume
        formData={submittedData}
        onClick={resetResume}
        onEducationDelete={onEducationDelete}
        onExperienceDelete={onExperienceDelete}
      />
    </div>
  );
}

export default App;
