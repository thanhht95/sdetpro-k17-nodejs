const { logger } = require("appium/support");

let teoName = "Teo";
let teoAge = 21;
let teoGender = "M";

// Office stuff -> Box(Office stuff): Pen, notebook, eraser
// CREATE an object - literal
let teoInfo = {
    name: "Teo",
    age: 21,
    "my gender": "M", //exception, thường sẽ không gặp, vd TH draw data - lấy data về từ 1 bên thứ 3, không xác định được có khoảng trắng không

    // không dùng Object literal để chứa function, khi cần 1 function cho 1 object nào đó thì mình sẽ dùng lập trình hướng đối tượng để tạo ra
    // tuy nhiên synctax js ngày xưa đến giờ vẫn có thể làm được cái này
    // sayHello: function(){
    //     console.log("Hello");
    // },
    //// có thể chứa bất cứ thứ gì nhưng hiện tại keep it simple
    // anotherNestedObject: {
    //     anotherInfo: ""
    // }
}

// READ | Dot notation to get value from a property
console.log(`Teo's name: ${teoInfo.name}`); // ${teoInfo["name"]} van lay ra duoc name
console.log(`Teo's gender: ${teoInfo["my gender"]}`);

// Destructure
// const name = teoInfo.name;
// const age = teoInfo.age;
const { age, name, ["my gender"]: gender } = teoInfo;

console.log(`Teo's name: ${name}`);
console.log(`Teo's gender: ${gender}`);

//UPDATE
teoInfo.age = 22;
console.log(teoInfo);

//DELETE
delete teoInfo["my gender"];
teoInfo.gender = "M";
console.log(teoInfo);
