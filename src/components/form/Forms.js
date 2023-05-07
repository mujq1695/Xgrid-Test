import React from "react";
import { useState } from "react";
import "./form.css";

const Forms = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [goals, setGoals] = useState("");
  const [subscribe, setSubscribe] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleCompanySizeChange = (e) => {
    setCompanySize(e.target.value);
  };

  const handleGoalsChange = (e) => {
    setGoals(e.target.value);
  };

  const handleSubscribeChange = (e) => {
    setSubscribe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container1">
        <div className="form-row1">
          <div className="form-column">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              className="form-input"
              placeholder="Enter First Name Here"
            />

            <label htmlFor="email">Business Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="form-input"
              placeholder="Enter Buisness Email Here"
            />

            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              value={companyName}
              onChange={handleCompanyNameChange}
              className="form-input"
              placeholder="Enter Compoany Name Here"
            />
          </div>

          <div className="form-column">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
              className="form-input"
              placeholder="Enter Last Name Here"
            />

            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              className="form-input"
              placeholder="Enter Title Here"
            />

            <label htmlFor="companySize">Company Size</label>
            <select
              id="companySize"
              value={companySize}
              onChange={handleCompanySizeChange}
              className="form-input"
              placeholder="Select"
            >
              <option value=""></option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>

        <div className="form-column form-col-3">
          <label htmlFor="goals">What are your goals to learn about?</label>
          <textarea
            id="goals"
            rows={5}
            placeholder="Write about your goals ...."
            value={goals}
            onChange={handleGoalsChange}
            className="form-inputT"
          />

          <div className="form-checkbox">
            <input
              type="checkbox"
              id="subscribe"
              checked={subscribe}
              onChange={handleSubscribeChange}
            />
            <label htmlFor="subscribe">
              I would like to receive an email for future webinars
            </label>
          </div>

          <button type="submit" className="form-button">
            Register for this event
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
