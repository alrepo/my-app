import React from "react";
import JobCard from "./JobCard";

let jobs = [
  {
    jobTitle: "طباخ خبير",
    companyName: "مطاعم ماكدونلدز",
    companyLogo: "https://pbs.twimg.com/profile_images/1625792557291651073/GDxGcTsc_400x400.png",
    location: "الرياض",
    salary: "50-70",
    filter1: "طباخ",
    filter2: "فاين دايننق",
    cardOptions: {fixed: 0, highlight: false, showLogo: true}
  },
  {
    jobTitle: "Opration Manager",
    companyName: "Rabbit Restaurant",
    companyLogo: "https://img.freepik.com/premium-vector/rabbit-cartoon-logo-design-vector-illustration_256145-308.jpg?w=2000",
    location: "Makka",
    salary: "100k-150k",
    filter1: "Manager",
    filter2: "Fast Food",
    cardOptions: {fixed: 1, highlight: true, showLogo: true}
  },
  {
    jobTitle: "Barista",
    companyName: "Starbucks Coffee",
    companyLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/640px-Starbucks_Corporation_Logo_2011.svg.png",
    location: "Madina",
    salary: null,
    filter1: "Barista",
    filter2: "Drive Thru",
    cardOptions: {fixed: 0, highlight: false, showLogo: false}
  },
  {
    jobTitle: "طباخ خبير",
    companyName: "مطاعم ماكدونلدز",
    companyLogo: "https://pbs.twimg.com/profile_images/1625792557291651073/GDxGcTsc_400x400.png",
    location: "الرياض",
    salary: "50-70 ألف ريال",
    filter1: "طباخ",
    filter2: "فاين دايننق",
    cardOptions: {fixed: 0, highlight: false, showLogo: true}
  },
  {
    jobTitle: "طباخ خبير",
    companyName: "مطاعم ماكدونلدز",
    companyLogo: "https://pbs.twimg.com/profile_images/1625792557291651073/GDxGcTsc_400x400.png",
    location: "الرياض",
    salary: "50-70 ألف ريال",
    filter1: "طباخ",
    filter2: "فاين دايننق",
    cardOptions: {fixed: 0, highlight: false, showLogo: true}
  },
  {
    jobTitle: "طباخ خبير",
    companyName: "مطاعم ماكدونلدز",
    companyLogo: "https://pbs.twimg.com/profile_images/1625792557291651073/GDxGcTsc_400x400.png",
    location: "الرياض",
    salary: "50-70 ألف ريال",
    filter1: "طباخ",
    filter2: "فاين دايننق",
    cardOptions: {fixed: 0, highlight: false, showLogo: true}
  },
  {
    jobTitle: "طباخ خبير",
    companyName: "مطاعم ماكدونلدز",
    companyLogo: "https://pbs.twimg.com/profile_images/1625792557291651073/GDxGcTsc_400x400.png",
    location: "الرياض",
    salary: "50-70 ألف ريال",
    filter1: "طباخ",
    filter2: "فاين دايننق",
    cardOptions: {fixed: 0, highlight: false, showLogo: true}
  },
  {
    jobTitle: "طباخ خبير",
    companyName: "مطاعم ماكدونلدز",
    companyLogo: "https://pbs.twimg.com/profile_images/1625792557291651073/GDxGcTsc_400x400.png",
    location: "الرياض",
    salary: "50-70 ألف ريال",
    filter1: "طباخ",
    filter2: "فاين دايننق",
    cardOptions: {fixed: 0, highlight: false, showLogo: true}
  }
]
function creatJobCard(element)
{
  return(
    <JobCard 
      jobTitle={element.jobTitle}
      companyName={element.companyName}
      companyLogo={element.companyLogo}
      jobLocation={element.location}
      jobSalary={element.salary}
      filter1={element.filter1}
      filter2={element.filter2}
      cardFixed={element.cardOptions.fixed}
      cardHighlighted={element.cardOptions.cardHighlighted}
      cardShowLogo={element.cardOptions.showLogo}
    />
  )
}
function App()
{
  return(
    <div>
      <div className="postButton">أنشر إعلان وظيفي</div>
      <div className="cardsContainer">
        {jobs.map(creatJobCard)}
      </div>
    </div>
  )
}

export default App;