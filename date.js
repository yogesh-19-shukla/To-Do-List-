//jshint esversion: 6


module.exports.getDate =  getDate;

function getDate(){
let today = new Date();

//an object to get the full date like thursday,March 25.
let options ={
 weekday: "long",
 day: "numeric",
 month: "long"
};

let day = today.toLocaleDateString("en-US",options);
return day;
}

/////////////multiple modules can be written as it is just like an object ///////////////////////

module.exports.getDay = getDay;


function getDay(){
let today = new Date();

//an object to get the full date like thursday,March 25.
let options ={
 weekday: "long",

};

let day = today.toLocaleDateString("en-US",options);
return day;
}
