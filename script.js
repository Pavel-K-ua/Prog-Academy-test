
function buyBtc(youHave, btcPrice) {
  let canBuy = youHave / btcPrice;
  console.log(`You can buy ${canBuy} BTC`);
  return `You can buy ${canBuy} BTC`; 
}

buyBtc(1000, 21000)
