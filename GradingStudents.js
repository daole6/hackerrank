function gradingStudents(grades) {
    return grades.map(n => { 
       let round = 5 - (n % 5);                                                
       if(round < 3 && n >= 38){
           n += round;      
       } 
       return n;
    });
}   
