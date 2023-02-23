// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all",true)
// request.send()
// request.onload=function()
// {
//     var data = request.response
//     var result = JSON.parse(data)
//      for(var obj of result)
//      {
//          console.log(obj.name.common , obj.region, obj.subregion ,
//             obj.population);
//      }
// }
// var request = new XMLHttpRequest();
//  request.open("GET","https://restcountries.com/v3.1/all",true)
// request.send()
//  request.onload=function()
// {
//    var data = request.response
//    var result = JSON.parse(data)
//     for(var obj of result)
//     {
//       console.log(obj.name.common , obj.flags.png);
//     }
// }

var a = {name:"Person 1", age:5};
var b = {age:5, name:"Person 1"};

console.log(JSON.stringify(a)===JSON.stringify(b));