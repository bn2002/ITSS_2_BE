const authRouter = require("./auth.route");
const jobRouter = require("./job.route");

function route(app) {
    app.use("/api", jobRouter);
    app.use("/api", authRouter);
}

module.exports = route;
