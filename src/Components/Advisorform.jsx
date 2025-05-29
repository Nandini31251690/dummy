import React from 'react';
import './Advisorform.css'; // Import the CSS file

const Advisorform = () => {
  return (
    <div className="advisor-container">
      <div className="advisor-image">
        <img 
          src="https://th.bing.com/th/id/OIP.ZKbOB4BmKvIiKy-fHieivAHaHa?rs=1&pid=ImgDetMain" 
          alt="Advisor"
        />
        <div className="advisor-info">
          <h1>Talk to our Advisor</h1>
          <ul>
            <li>Personalized Suggestions</li>
            <li>Free Access to Events</li>
          </ul>
        </div>
      </div>
      <div className="form-container">
        <h1>Talk to our Advisor!</h1>
        <form>
          <label>
            Your Topic of Interest*
            <select required>
              <option value="">Select Product</option>
              <option value="Monitors">Monitors</option>
              <option value="LED screens">LED screens</option>
            </select>
          </label>
          <label>
            Enter Name
            <input type="text" placeholder="Enter Name" required />
          </label>
          <label>
            Enter Email
            <input type="email" placeholder="Enter Email" required />
          </label>
          <label>
            Enter Phone
            <input type="tel" placeholder="Enter Phone" required />
          </label>
          <button type="submit" className="continue-button">CONTINUE</button>
        </form>
      </div>
    </div>
  );
};

export default Advisorform;
