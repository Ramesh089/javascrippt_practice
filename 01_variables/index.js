const accountnNo = 1233
let accountholder = "Ramesh"
const accountcity = "Bangalore"
var accountbalance = 1000

console.log(accountnNo, accountholder, accountcity, accountbalance)

// accountnNo = 4567 // TypeError: Assignment to constant variable.
accountholder = "Suresh" // This is allowed since accountholder is declared with let
// accountcity = "Mumbai" // TypeError: Assignment to constant variable.
// accountbalance = 2000 // This is allowed since accountbalance is declared with var
// let accountholder = "Suresh" // SyntaxError: Identifier 'accountholder' has already been declared

if (true) {
   let acoountholder = "Sureshaaa"
   console.log(acoountholder) // Suresh
}



