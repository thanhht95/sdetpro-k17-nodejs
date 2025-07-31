const array = [1, 2, 3, 4, 5];

// FOR...OF
for(let value of array){
    console.log(value);   
}

// FOR...IN //thường dùng với Object hơn, sau này gặp lại
for (const index in array) {
    console.log(index);
}

// FOREACH
const automationUserList = [];
array.forEach(customLogic);

function customLogic(value, index, array){
    automationUserList.push(`automationUser_${value}@mydomain.com`);
}
console.log(automationUserList);
