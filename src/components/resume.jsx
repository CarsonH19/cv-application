function Resume({ formData }) {
  return (
    <div>
      <div className="resume">
        <div className="header">
          <h1>{formData.name}</h1>
          <div className="header-info">
            <p>
              <i className="ri-account-circle-fill"></i> {formData.email}
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
            <div className="education-info">
              <div className="left-info">
                <p>
                  {formData.eduStartDate} - {formData.eduEndDate}
                </p>
                <p>{formData.eduLocation}</p>
              </div>
              <div className="right-info">
                <p>
                  <strong>{formData.school}</strong>
                </p>
                <p>{formData.degree}</p>
              </div>
            </div>
          </div>

          <div className="experience-section">
            <h2>Experience</h2>
            <div className="experience-info">
              <div className="left-info">
                <p>
                  {formData.expStartDate} - {formData.expEndDate}
                </p>
                <p>{formData.expLocation}</p>
              </div>
              <div className="right-info">
                <p>
                  <strong>{formData.companyName}</strong>
                </p>
                <p>{formData.title}</p>
                <p>{formData.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clear-btn-container">
        <button>
          <i className="ri-delete-bin-fill"></i> Clear Resume
        </button>
      </div>
    </div>
  );
}

export default Resume;
