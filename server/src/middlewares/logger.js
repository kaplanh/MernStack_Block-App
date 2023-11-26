const morgan = require("morgan");
const fs = require("node:fs");

const now = new Date();
const today = now.toISOString().split("T")[0];

module.exports = morgan(
    'IP:remote-addr TIME:[:date[clf]] REQ:":method :url HTTP/:http-version" RES::status :res[content-length] APP:":user-agent"',
    { stream: fs.createWriteStream(`./logs/${today}.log`) },
    { flags: "a+" }
);
