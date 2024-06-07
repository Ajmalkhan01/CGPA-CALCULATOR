function calculateCGPA(event) {
    event.preventDefault();
    
    let english = document.getElementById('english').value;
    let telugu = document.getElementById('telugu').value;
    let mathsA = document.getElementById('mathsA').value;
    let mathsB = document.getElementById('mathsB').value;
    let physics = document.getElementById('physics').value; 
    let chemistry = document.getElementById('chemistry').value;
    let IT = document.getElementById('IT').value;
    let chemistryLab = document.getElementById('chemistryLab').value;
    let physicsLab = document.getElementById('physicsLab').value;
    
    if(english=='Ex'){
        english = 10;
    }else if(english=='A'){
        english = 9;
    }else if(english=='B'){
        english = 8;
    }else if(english=='C'){
        english = 7;
    }else if(english=='D'){
        english = 6;
    }else if(english=='P'){
        english = 5;
    }else if(english=='R'){
        english = 0;
    }
    
    if(telugu=='Ex'){
        telugu = 10;
    }else if(telugu=='A'){
        telugu = 9;
    }else if(telugu=='B'){
        telugu = 8;
    }else if(telugu=='C'){
        telugu = 7;
    }else if(telugu=='D'){
        telugu = 6;
    }else if(telugu=='P'){
        telugu = 5;
    }else if(telugu=='R'){
        telugu = 0;
    }

    if(mathsA=='Ex'){
        mathsA= 10;
    }else if(mathsA=='A'){
        mathsA= 9;
    }else if(mathsA=='B'){
        mathsA= 8;
    }else if(mathsA=='C'){
        mathsA= 7;
    }else if(mathsA=='D'){
        mathsA= 6;
    }else if(mathsA=='P'){
        mathsA= 5;
    }else if(mathsA=='R'){
        mathsA= 0;
    }
    
    if(mathsB=='Ex'){
        mathsB= 10;
    }else if(mathsB=='A'){
        mathsB= 9;
    }else if(mathsB=='B'){
        mathsB= 8;
    }else if(mathsB=='C'){
        mathsB= 7;
    }else if(mathsB=='D'){
        mathsB= 6;
    }else if(mathsB=='P'){
        mathsB= 5;
    }else if(mathsB=='R'){
        mathsB= 0;
    }
    
    if(physics =='Ex'){
        physics = 10;
    }else if(physics =='A'){
        physics = 9;
    }else if(physics =='B'){
        physics = 8;
    }else if(physics =='C'){
        physics = 7;
    }else if(physics =='D'){
        physics = 6;
    }else if(physics =='P'){
        physics = 5;
    }else if(physics =='R'){
        physics = 0;
    }
    
    if(chemistry =='Ex'){
        chemistry = 10;
    }else if(chemistry =='A'){
        chemistry = 9;
    }else if(chemistry =='B'){
        chemistry = 8;
    }else if(chemistry =='C'){
        chemistry = 7;
    }else if(chemistry =='D'){
        chemistry = 6;
    }else if(chemistry =='P'){
        chemistry = 5;
    }else if(chemistry =='R'){
        chemistry = 0;
    }
    
    if(IT =='Ex'){
        IT = 10;
    }else if(IT =='A'){
        IT = 9;
    }else if(IT =='B'){
        IT = 8;
    }else if(IT =='C'){
        IT = 7;
    }else if(IT =='D'){
        IT = 6;
    }else if(IT =='P'){
        IT = 5;
    }else if(IT =='R'){
        IT = 0;
    }
    
    if(chemistryLab =='Ex'){
        chemistryLab = 10;
    }else if(chemistryLab =='A'){
        chemistryLab = 9;
    }else if(chemistryLab =='B'){
        chemistryLab = 8;
    }else if(chemistryLab =='C'){
        chemistryLab = 7;
    }else if(chemistryLab =='D'){
        chemistryLab = 6;
    }else if(chemistryLab =='P'){
        chemistryLab = 5;
    }else if(chemistryLab =='R'){
        chemistryLab = 0;
    }
    
    if(physicsLab =='Ex'){
        physicsLab = 10;
    }else if(physicsLab =='A'){
        physicsLab = 9;
    }else if(physicsLab =='B'){
        physicsLab = 8;
    }else if(physicsLab =='C'){
        physicsLab = 7;
    }else if(physicsLab =='D'){
        physicsLab = 6;
    }else if(physicsLab =='P'){
        physicsLab = 5;
    }else if(physicsLab =='R'){
        physicsLab = 0;
    }

    let EN201 = english * 3;
    let TE202 = telugu * 3;
    let MA203 = mathsA * 4;
    let MA204 = mathsB * 4;
    let PH205 = physics * 4;
    let CY206 = chemistry * 4;
    let CS207 = IT * 3;
    let CY801 = chemistryLab * 2;
    let PH801 = physicsLab * 2;


    var totalMarks = EN201 + TE202 + MA203 + MA204 + PH205 + CY206 + CS207 + CY801 + PH801;
    var cgpa = totalMarks / 29;

    document.getElementById('result').innerText = "Your CGPA is: " + cgpa.toFixed(2);
}
