const fs = require("fs");   // fs= File System
const data = fs.readFileSync("data.json", "utf-8");
const user = JSON.parse(data); 
console.log(user.skills[1]);

const user = {
    "name": "Sahib",
    "city": "Chandigarh",
    "age": 20,
    "IsLoggedIn": "false"
}
// fs.writeFileSync("data.json", JSON.stringify(user,null,2));
