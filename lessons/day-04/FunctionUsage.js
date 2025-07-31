// Import as a module
const Util = require("../utils/UtilMethods.js");

//Destructure (Dùng TH cần 1, 2 hàm trong module thôi, sau đó có thể gọi thẳng gọn)
const {
    getInputFromKeyboard,
    getUserInputNumFnExpression
} = require("../utils/UtilMethods.js");

let userInput = getUserInputNum();
let userInputNumFnExpression = Util.getUserInputNumFnExpression();