const dollarAmount = .50;

var penny = dollarAmount/.01;
var nickel = dollarAmount/.05;
var dime = dollarAmount/.1;
var quarter = dollarAmount/.25;

const piggyBank = [quarter, dime, nickel, penny];


var num = 0;

for (var i = 0; i < piggyBank.length; i += 1) {

    if (quarter % 1 === 0) {
        num += quarter;
        console.log("quarter", quarter);
    } else if (dime % 1 === 0) {
        num += dime;
        console.log("dime", dime);
    } else if (nickel % 1 === 0) {
        num += nickel;
        console.log("nickel", nickel);
    } else if (penny % 1 === 0) {
        num += penny;
        console.log("penny", penny);
    }
};


function amountTocoins(amount, coins) 
{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        left = (amount - coins[0]);
        return [coins[0]].concat( amountTocoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return amountTocoins(amount, coins);
        }
    }
} 
console.log(amountTocoins(46, [25, 10, 5, 2,1]));



