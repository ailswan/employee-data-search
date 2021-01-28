const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();

const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/searchName', function (req, res) {
  // console.log(req.query);
  let name = req.query.name;
  let rawdata = fs.readFileSync('data.json');
  let employeeData= JSON.parse(rawdata);
  let result = [];
  for(let i=0; i < employeeData.length; i++) {
    if(employeeData[i].name === name) {
      result.push(employeeData[i]);
    }
  }
  res.json(result);
  return;
  
})

app.get('/DepartmentAge', function (req, res) {
  // console.log(req.query);
  let department = req.query.department;
  let age = req.query.age;
  let rawdata = fs.readFileSync('data.json');
  let employeeData= JSON.parse(rawdata);
  let result = [];
  if(department === 'All' && age === 'All') {
    result = employeeData;
  } else if (department !== 'All' && age === 'All'){
    for(let i=0; i < employeeData.length; i++) {
      if(employeeData[i].department === department) {
        result.push(employeeData[i]);
      }
    }
  } else if (department === 'All' && age !== 'All'){
        let ages = age.split('-');
    for(let i = 0; i < employeeData.length; i++) {
      if(ages[0] < employeeData[i].age && employeeData[i].age < ages[1]) {
        result.push(employeeData[i]);
      }
    }
  } else if (department !== 'All' && age !== 'All'){  
    //console.log(age);
    let ages = age.split('-');
    for(let i = 0; i < employeeData.length; i++) {
      if(ages[0] < employeeData[i].age && employeeData[i].age < ages[1] && employeeData[i].department === department) {
        result.push(employeeData[i]);
      }
    }
  }
  res.json(result);
  return;
  
})


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => { console.log('listening on port: ', PORT, '.'); });
