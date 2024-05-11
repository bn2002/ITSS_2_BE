const { JobModel } = require("../models/job");
const { UserInfoModel } = require("../models/user");

class JobController {
    async getAllJob(req, res) {
        try {
            const { limit, skip } = req.body;

            const allJob = await JobModel.find({}).limit(limit).skip(skip);
            res.status(200).json(allJob);
        } catch (err) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
    async getJobInfo(req, res) {
        try {
            const { slug } = req.body;

            const job = await JobModel.findOne({ slug });
            res.status(200).json(job);
        } catch (err) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
}

module.exports = new JobController();
