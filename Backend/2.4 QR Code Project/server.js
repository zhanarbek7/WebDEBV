/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import fs from "fs";
import qr from 'qr-image';




inquirer.prompt([{
    name: 'url',
    message: 'What is the Website url?',
},
{
    name: "text",
    message: "your message:"
}])
.then((answers) => {
    const url = answers.url;
    const qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr-code.png'));

    console.log('QR code generated and saved as qr-code.png');
    console.log(answers.text)
    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });

})
.catch((error)=> {
    if(error.isTtyError){
        console.log("Prompt couldn't be rendered");
    }
    else{
        console.log("Something else went wrong");
    }
});