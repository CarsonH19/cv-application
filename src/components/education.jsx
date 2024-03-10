function EducationForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <h3>
        <i className="ri-book-open-fill"></i> Education
      </h3>
      <label htmlFor="school">School</label>
      <input
        type="text"
        name="school"
        id="school"
        
        placeholder="University of Space Science"
      />
      <label htmlFor="degree">Degree</label>
      <input
        type="text"
        name="degree"
        id="degree"
        
        placeholder="Aerospace Engineering"
      />
      <label htmlFor="edu-start-date">Start Date</label>
      <input
        type="text"
        name="edu-start-date"
        id="edu-start-date"
        
        placeholder="Enter Start Date"
      />
      <label htmlFor="edu-end-date">End Date</label>
      <input
        type="text"
        name="edu-end-date"
        id="edu-end-date"
        
        placeholder="Enter End Date"
      />
      <label htmlFor="edu-location">Location</label>
      <input
        type="text"
        name="edu-location"
        id="edu-location"
        
        placeholder="Space City, Universe"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default EducationForm;