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
      <label htmlFor="eduStartDate">Start Date</label>
      <input
        type="text"
        name="eduStartDate"
        id="edu-start-date"
        placeholder="Enter Start Date"
      />
      <label htmlFor="eduEndDate">End Date</label>
      <input
        type="text"
        name="eduEndDate"
        id="edu-end-date"
        placeholder="Enter End Date"
      />
      <label htmlFor="eduLocation">Location</label>
      <input
        type="text"
        name="eduLocation"
        id="edu-location"
        placeholder="Space City, Universe"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default EducationForm;
