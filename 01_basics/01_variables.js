const accountId = 144553;
let accountEmail = "xyz@gmail.com";
var accountPassword = "12345"; //prefer not to use because of issue in block scope and functional scope
accountCity = "Jaipur"; //js defines intself
let accountState; //undefined

//accountId = 2; //not allowed as the type in const
accountEmail = "hc@gg.com"
accountPassword = "2121";
accountCity = "Delhi";

//console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);