function birthdayCakeCandles(candles) {

    var numArr= candles.filter(num => Math.max(...candles)===num);
    return numArr.length;
}
