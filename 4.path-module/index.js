const path = require("path"); //this the module name

console.log("Directory name :", path.dirname(__filename));

console.log("File name", path.basename(__filename));

console.log("file extension", path.extname(__filename));

//combined all path

const joinPath = path.join("/user", "documents", "node", "projects");

console.log("Joined path", joinPath);

//resolve path

const resolvePath = path.resolve("/user", "documents", "node", "projects");
console.log("Resolve path", resolvePath);

//Normalized path

const normalizedPath = path.normalize('/user/.documents/../node/project')

console.log('Normalized path',normalizedPath);

