function PersonalDetailsForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <h3>
        <i className="ri-account-circle-fill"></i> Personal Details
      </h3>
      <label htmlFor="name">Full Name</label>
      <input type="text" name="name" id="name" placeholder="John Doe" />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="johndoe@email.com"
      />
      <label htmlFor="number">Phone Number</label>
      <input
        type="text"
        name="number"
        id="number"
        placeholder="(123) 456-7890"
      />
      <label htmlFor="address">Address</label>
      <input
        type="text"
        name="address"
        id="address"
        placeholder="123 Rocket Blvd, Space City, Universe"
      />
      <button type="submit">Update</button>
    </form>
  );
}

export default PersonalDetailsForm;
