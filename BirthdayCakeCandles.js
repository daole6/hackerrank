function birthdayCakeCandles(candles) {
    
    let max = Math.max(...candles);
    let numArr= candles.filter(num => max===num);
    return numArr.length;
}