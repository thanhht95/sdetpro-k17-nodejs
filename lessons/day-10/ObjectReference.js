let teo = {
    name: "Teo",
    age: 18,
    // nested object
    bankAccounts: {
        checking: {
            acountNumber: '123456789'
        },
        saving: {
            acountNumber: '987654321'
        }
    }
}


// Trying to clone data from teo object
// let tun = teo; // = đang chỉ tới vùng nhớ của teo đang đứng, reference (quy chiếu tới vùng nhớ) chứ không phải tạo ra một vùng nhớ mới
// tun.name = "Tun";
// tun.age = 17;
// tun.bankAccounts.checking.acountNumber = '1234567891';
// tun.bankAccounts.saving.acountNumber = '9876543211';

// Shallow copy using spread syntax
// nếu mà bên trong có nested object thì nó không bảo vệ được, vì bất kỳ object nào bên trong cũng là kiểu reference
// nên cẩn thận nếu dùng muốn work theo ý mình thì chỉ One level object, không có nested bên trong
let tun = { ...teo };
tun.name = "Tun";
//tun.bankAccounts.saving.acountNumber = '9876543211'; //teo's checking accNum cũng bị thay đổi theo

// Shallow copy - handle nested objects
let ti = JSON.parse(JSON.stringify(teo));
ti.name = "Ti";
ti.bankAccounts.saving.acountNumber = '9876543211';
console.log(teo);
console.log(ti);
console.log(tun);
