import employeeData from './employeeData.js';

var searchData = (name,callback) => {
  let result = [];
  for(let i=0; i < employeeData.length; i++) {
    if(employeeData[i].name === name) {
      result.push(employeeData[i]);
    }
  }
    callback(result);
};

export default searchData;
