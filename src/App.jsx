import React from "react";
import Jobs from "./components/Jobs/Jobs.jsx";
import JobDetailsPage from "./components/JobDetailsPage/JobDetailsPage.jsx";
import JobApplication from './components/JobApplication/JobApplication.jsx';
import { Routes, Route, Navigate} from "react-router-dom";
import NewJobPost from "./components/NewJobPost.jsx";

function App()
{
  return(

      <Routes>
        <Route exact path={"/jobs"} element={<Jobs />} />
        <Route exact path="/jobs/id=12345" element={<JobDetailsPage />} />
        <Route exact path="/jobs/id=12345/application" element={<JobApplication />} />
        <Route exact path="/jobs/new-job-post" element={<NewJobPost />} ></Route>
      </Routes>

  )
}

export default App;