const fs = require("fs");
const generatePage = require("./src/generate-portfolio");

const profileDataArr = process.argv.slice(2, process.argv.length);
// profileDataArr.forEach(profileItem => console.log(profileItem));

const firstName = profileDataArr[0];
const github  = profileDataArr[1];

fs.writeFile("index.html", generatePage(firstName, github), err => {
    if (err) throw err;

    console.log("Portfolio complete! Check out index.html to see the output!");
})