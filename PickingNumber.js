function pickingNumbers(a) {

    let max = 0;
    a.forEach( elem => { 
        let subarray = a.filter( subElem  => Math.abs(elem - subElem) <= 1);
        max = Math.max(max, subarray.length);
    });
    return max;
    

}
pickingNumbers([4,6,5,3,3,1]);