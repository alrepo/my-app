import React from "react";
import Moment from 'react-moment';
import { useNavigate } from "react-router-dom";
import 'moment/locale/ar';
import { JobCardDiv, LogoTableColumn, CompanyLogo } from "./job-card.styled.js";

function JobCard(props) {
  const navigate = useNavigate();

  function handleButtonClick(event) {
    event.stopPropagation(); // Stop the event from propagating to the parent div
    navigate('/jobs/id=12345/application');
  }

  function handleCardClick() {
    navigate('/jobs/id=12345');
  }

  return (
    <JobCardDiv dir="rtl" onClick={handleCardClick}>
      <LogoTableColumn>
        {props.cardShowLogo ? (
          <CompanyLogo src={props.companyLogo} alt="Company Logo" />
        ) : (
          <CompanyLogo className="companyLogo" src={generateAvatar(props.companyName, 100)} alt="Company Logo" />
        )}
      </LogoTableColumn>
      <div className="CompanyNameAndJobTitleContainer">
        <p className="jobTitle">{props.jobTitle}</p>
        <p className="companyName">{props.companyName}</p>
        <div className="locationAndSalaryContainer">
          {props.jobSalary !== null ? (
            <p className="salary" dir="rtl">
              <span role="img" aria-label="emoji">
                💰{' '}
              </span>
              {props.jobSalary}
            </p>
          ) : null}
          <p className="jobLocation">
            <span role="img" aria-label="emoji">
              🌏{' '}
            </span>
            {props.jobLocation}
          </p>
        </div>
      </div>
      <div className="filterTags">
        <p className="filter1">{props.filter1}</p>
        {props.filter2 !== null ? <p className="filter2">{props.filter2}</p> : null}
      </div>
      <div className="ApplyButtonTableColumn">
        <div className="applyButton" role="button" onClick={handleButtonClick}>
          تقديم
        </div>
      </div>
      <div className="timePosted">
        <Moment fromNow ago>
          {props.timePosted}
        </Moment>
      </div>
      {props.cardFixed > 0 ? (
        <span className="pin" role="img" aria-label="emoji">
          📌
        </span>
      ) : null}
    </JobCardDiv>
  );
}

function generateAvatar(username, size) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = size;
  canvas.height = size;
  context.fillStyle = '#FFFFFF'; // Background color
  context.fillRect(0, 0, size, size);
  context.font = Math.floor(size / 2) + 'px Arial'; // Font size
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillStyle = '#FF0000'; // Text color
  context.fillText(username.charAt(0).toUpperCase(), size / 2, size / 2);
  // Draw a circle
  context.beginPath();
  context.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI);
  return canvas.toDataURL();

}

export default JobCard;