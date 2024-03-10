function ExperienceForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <h3>
        <i className="ri-briefcase-4-fill"></i> Experience
      </h3>
      <label htmlFor="company-name">Company Name</label>
      <input
        type="text"
        name="company-name"
        id="company-name"
        placeholder="SpaceX"
      />
      <label htmlFor="title">Position Title</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Senior Rocket Scientist"
      />
      <label htmlFor="exp-start-date">Start Date</label>
      <input
        type="text"
        name="exp-start-date"
        id="exp-start-date"
        placeholder="Enter Start Date"
      />
      <label htmlFor="exp-end-date">End Date</label>
      <input
        type="text"
        name="exp-end-date"
        id="exp-end-date"
        placeholder="Enter End Date"
      />
      <label htmlFor="exp-location">Location</label>
      <input
        type="text"
        name="exp-location"
        id="exp-location"
        placeholder="Mars Base Alpha, Mars"
      />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        placeholder="Enter Description"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ExperienceForm;
