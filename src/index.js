// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var count = {};
    if (currency <= 0) {
      return count;
    }
    else if (currency > 10000) {
      count.error = "You are rich, my friend! We don't have so much coins for exchange";
      return count; 
    }
    else {
      
        if (currency >= 50) {
          count.H = Math.floor(currency/50);
          currency = currency%50;
        }  

        if (currency >= 25) {
          count.Q = Math.floor(currency/25);
          currency = currency%25;
        }  

        if (currency >= 10) {
          count.D = Math.floor(currency/10);
          currency = currency%10;
        }  

        if (currency >= 5) {

          count.N = Math.floor(currency/5);
          currency = currency%5;

        }  

        if (currency > 0) {
        count.P = Math.floor(currency/1);
        }

    }

    return count;

  }
