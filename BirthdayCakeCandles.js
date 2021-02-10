function birthdayCakeCandles(candles) {
    
    let max = Math.max(...candles);
    let numArr= candles.filter(num => max===num);
    let num =  numArr.length;
    console.log(num);
}
birthdayCakeCandles([1,2,3,3]);

// let numArr = candles.filter(num => Math.max(...candles)===num);
// return numArr.length;