const express = require("express");
const router = express.Router();

const APIConfig = require("../util/APIConfig");
const JobController = require("../app/controllers/JobController");

router.post(APIConfig.GET_ALL_JOBS, JobController.getAllJob);
router.post(APIConfig.GET_JOB_INFO, JobController.getJobInfo);

module.exports = router;
