function Resume({ formData, onClick }) {
  return (
    <div>
      <div className="resume">
        <div className="header">
          <h1>{formData.name}</h1>
          <div className="header-info">
            <p>
            <i class="ri-mail-fill"></i> {formData.email}
            </p>
            <p>
              <i className="ri-phone-fill"></i> {formData.number}
            </p>
            <p>
              <i className="ri-map-pin-fill"></i> {formData.address}
            </p>
          </div>
        </div>

        <div className="info-container">
          <div className="education-section">
            <h2>Education</h2>
            {formData.education.map((edu, index) => (
              <div className="education-info" key={index}>
                <div className="left-info">
                  <p>
                    {edu.eduStartDate} - {edu.eduEndDate}
                  </p>
                  <p>{edu.eduLocation}</p>
                </div>
                <div className="right-info">
                  <p>
                    <strong>{edu.school}</strong>
                  </p>
                  <p>{edu.degree}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="experience-section">
            <h2>Experience</h2>
            {formData.experience.map((exp, index) => (
              <div className="experience-info" key={index}>
                <div className="left-info">
                  <p>
                    {exp.expStartDate} - {exp.expEndDate}
                  </p>
                  <p>{exp.expLocation}</p>
                </div>
                <div className="right-info">
                  <p>
                    <strong>{exp.companyName}</strong>
                  </p>
                  <p>{exp.title}</p>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="clear-btn-container">
        <button onClick={onClick}>
          <i className="ri-delete-bin-fill"></i> Reset Resume
        </button>
      </div>
    </div>
  );
}

export default Resume;
