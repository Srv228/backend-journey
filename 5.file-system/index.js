const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
}

console.log("data folder created");

const filePath = path.join(dataFolder, "example.txt");

//synchronous way of creating the file

fs.writeFileSync(filePath, "hello from node js");

console.log("file created succesfully");

const readContentFromFile = fs.readFileSync(filePath, "utf8");

console.log("file content ", readContentFromFile);

fs.appendFileSync(filePath, "\nThis is a new line added to that file");
console.log("new file content added");

//Async way of creating the file

const asyncFilePath = path.join(dataFolder, "async-example.txt");

fs.writeFile(asyncFilePath, "Hello Async nodejs", (err) => {
  if (err) throw err;
  console.log("Async file is create succesfully");
});

fs.readFile(asyncFilePath, "utf8", (err, data) => {
  if (err) throw err;
  console.log("Async file content", data);

  fs.appendFile(asyncFilePath,'\nThis is another line added',(err)=>{
if (err) throw err;
console.log('New line added to async file');

fs.readFile(asyncFilePath,'utf8',(err,updatedData)=>{
    if (err) throw err;
    console.log('Updated File Content',updatedData);
    
})
  })





});
