const express = require("express");
const app = express();

app.get("/jobs", (req,res)=>{
    res.json({"jobs": ["job1", "job2", "job3"]})
})

app.listen(5000, ()=>{console.log("Server started on port 5000...")})