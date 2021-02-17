function AppleAndOrange(s, t, a, b, apple, orange){
    
    let countApple = apple.filter(value => (value + a) >= s && (value + a) <= t ).length;
    let countOrange =orange.filter(value => (value + b) >= s && (value + b) <= t).length;
    
    console.log(countApple);
    console.log(countOrange);
}

AppleAndOrange(7,11,5,15,[-2,2,1],[5,-6]);