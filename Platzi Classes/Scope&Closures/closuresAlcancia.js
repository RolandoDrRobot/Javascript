// const moneyBox = (coins) =>{
//     var saveCoins = 0;
//     saveCoins += coins;
//console.log(`Money box: $${saveCoins}`)
// } No funciona

const moneyBox = (coins) =>{
  var saveCoins = 0;
  const countCoins = (coins) =>{
      saveCoins += coins;
      console.log(`MoneyBox: $${saveCoins}`)
  }
  return countCoins;
}

let myMoneyBox = moneyBox();

// Con la misma funcion y variables que tiene dentro, podemos crear diferentes contextos
myMoneyBox(5)
myMoneyBox(10)