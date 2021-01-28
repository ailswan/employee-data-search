import $ from 'jquery'

var searchName= (name, callback) => {
    console.log("api");
    $.get('/searchName', {name:name})
    .done(result => {
      // console.log(result);
      callback(result);
    })
    .fail(({responseJSON}) => {
      console.log(responseJSON);
    });
};

export default searchName;
