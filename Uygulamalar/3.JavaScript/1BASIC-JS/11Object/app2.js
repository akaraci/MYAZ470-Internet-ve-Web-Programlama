
//module.exports ile export edilen modüllerin import edilmesi
//1. yöntem
const {programmer:p,backend_developer:b} = require("./app.js");
console.log(p.email);
console.log(b[0]);

//2. yöntem
// const data = require("./app.js");
// console.log(data.programmer.email); 
// console.log(data.backend_developer[0]);

//exports.yyyy şeklinde export edilen modüllerin import edilmesi //app1.js dosyasına bakın
//1. yöntem
// const {programmer:p,backend_developer:b} = require("./app1.js");
// console.log(p.email);
// console.log(b[0]);

//2. yöntem
// const data = require("./app1.js");
// console.log(data.programmer.email);
// console.log(data.backend_developer[0]);