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
    async changeJobInfo(req, res) {
        try {
            const { newDetail, _id } = req.body;

            // Kiểm tra xem _id và newDetail có hợp lệ không
            if (!_id || !newDetail) {
                return res.status(400).json({ message: "Invalid request body" });
            }
            console.log("newDetail: ", newDetail);

            // Cập nhật thông tin công việc
            const job = await JobModel.updateOne({ _id }, { $set: newDetail });

            // Kiểm tra nếu không có tài liệu nào được cập nhật
            if (job.nModified === 0) {
                return res.status(404).json({ message: "Job not found or no changes made" });
            }

            res.status(200).json({ message: "Job updated successfully", job });
        } catch (err) {
            console.error("Error updating job:", err);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}

module.exports = new JobController();
