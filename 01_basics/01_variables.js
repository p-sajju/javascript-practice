const accountId = 9
let accountEmail = "sjjnptl@google.com"
var accountPassword = "Xyz@123"
accountCity = "Bhopal"

let accountState;

// accountId = 1 Assignment to the const variable is not allowed.
// Avoid using the var keyword because it has no scope.
// Javascript will considered accountState as undefined because we haven't asigned any value.

console.log("accountId")
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])