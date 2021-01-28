import $ from 'jquery'

var searchDepartmentAge= (department='All',age='All', callback) => {
    // console.log("api2&3");
    $.get('/DepartmentAge', {department:department,age:age})
    .done(result => {
      // console.log(result);
      callback(result);
    })
    .fail(({responseJSON}) => {
      console.log(responseJSON);
    });
};

export default searchDepartmentAge;
