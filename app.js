function birthdayCakeCandles(candles) {
    
    
    let numArr = candles.filter(num => Math.max(...candles)===num);
    return numArr.length;
    

}
birthdayCakeCandles([1,2,3,3]);

