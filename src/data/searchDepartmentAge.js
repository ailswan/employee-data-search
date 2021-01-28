import employeeData from './employeeData.js';

var searchDepartmentAge = (department,age, callback) => {
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
    console.log(age);
    let ages = age.split('-');
    for(let i = 0; i < employeeData.length; i++) {
      if(ages[0] < employeeData[i].age && employeeData[i].age < ages[1] && employeeData[i].department === department) {
        result.push(employeeData[i]);
      }
    }
  }
    callback(result,department,age);
};


export default searchDepartmentAge;

