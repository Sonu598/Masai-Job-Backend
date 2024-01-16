const express=require("express");
const jobRouter=express.Router();
const { JobModel } = require('../models/jobmodel');

jobRouter.get("/allJobs", async (req,res)=>{
    try {
      let job = await JobModel.find();
      res.status(200).send(job);
      let query = {};
  
        if (req.query.role) {
            query.role = req.query.role;
        }

        const sort = { postedAt: -1 };
        if (req.query.techstack) {
            query.language = { $regex: new RegExp(req.query.techstack, 'i') };
        }
  
        const jobs = await Job.find(query).sort(sort);
        res.status(200).send(jobs);
    } catch (err) {
      res.status(500).send({msg: err.message});
    }
})

jobRouter.post("/jobs", async (req, res) => {
    const { Company,City,location,Role,Level,Position,Language,Contract } = req.body
    try {
        const job=new JobModel({Company,City,location,Role,Level,Position,Language,Contract})
        await job.save()
        res.send('Jobs added Successful')
    } catch (error) {
        res.status(401).send({ "msg": error.message })
    }

})

module.exports= {
    jobRouter
}