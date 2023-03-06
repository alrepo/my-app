import React from "react";
import Jobs from "./Jobs.jsx";
import JobPage from "./JobPage.jsx";
import JobApplication from './JobApplication.jsx';
import { Routes, Route, Navigate} from "react-router-dom";
import NewJobPost from "./NewJobPost.jsx";

function App()
{
  return(

      <Routes>
        <Route exact path={"/jobs"} element={<Jobs />} />
        <Route exact path="/jobs/id=12345" element={<JobPage />} />
        <Route exact path="/jobs/id=12345/application" element={<JobApplication />} />
        <Route exact path="/jobs/new-job-post" element={<NewJobPost />} ></Route>
      </Routes>

  )
}

export default App;