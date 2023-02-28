import React from "react";
import Moment from 'react-moment';
import 'moment/locale/ar'

function JobCard(props)
{
    return(
        <div className="jobCard" dir="rtl">
            <div className="logoTableColumn">{props.cardShowLogo ? (<img className="companyLogo" src={props.companyLogo} alt="Company Logo" />):(<img className="companyLogo" src={generateAvatar(props.companyName, 100)} alt="Company Logo" />)}</div>
           <div className="CompanyNameAndJobTitleContainer">
               <p className="jobTitle">{props.jobTitle}</p>
               <p className="companyName">{props.companyName}</p>
               <div className="locationAndSalaryContainer">{props.jobSalary !== null ? (<p className="salary" dir="rtl"><span role="img" aria-label="emoji">💰 </span>{props.jobSalary}</p>) :null}<p className="jobLocation"><span role="img" aria-label="emoji">🌏 </span>{props.jobLocation}</p></div>
           </div>
           <div className="filterTags"><p className="filter1">{props.filter1}</p>{props.filter2 !== null ? (<p className="filter2">{props.filter2}</p>) :null}</div>
           <div className="ApplyButtonTableColumn"><div className="applyButton">تقديم</div></div>
           <div className="timePosted"><Moment fromNow ago>{props.timePosted}</Moment></div>
           {props.cardFixed > 0 ? (<span className="pin" role="img" aria-label="emoji">📌</span>):null}
        </div>
      )
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