missile = require("./index");
async = require("async");

async.series([
missile.turnLeftDegrees(),
missile.turnRightDegrees()
]);