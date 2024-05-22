
const express = require('express')
const fs = require('fs')
require('dotenv').config();

const app = express();
// const port = 3000;
const port = process.env.PORT

app.get('/createFile', (req, res) => {
    const currentDate = new Date();
    const fileName = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)}-${currentDate.getDate()} ${currentDate.getHours()}-${currentDate.getMinutes()}-${currentDate.getSeconds()}.txt`;
    const filePath = fileName;
    const fileContent = currentDate.toString();
  
    fs.writeFile(filePath, fileContent, (err) => {
      if (err) {
        console.error('Error creating file:', err);
        res.status(500).send('Error creating file');
      } else {
        console.log('File created successfully:', filePath);
        res.status(200).send('File created successfully');
      }
    });
});

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})