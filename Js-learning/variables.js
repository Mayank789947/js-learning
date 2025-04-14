const accountId = 12469
let accountEmail = "one@one.com"
var accountPassword = "12345"
accountCity = "Indore"


// accountId = 34598  Not allowed to change const variables value

accountEmail = "two@two.com"
accountPassword = "67890"
accountCity = "Delhi"

console.log(accountId);

/*
  Prefer not to use Var keyword
  because of issue in block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity])
