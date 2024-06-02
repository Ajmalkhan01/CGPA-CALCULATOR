function calculateCGPA(event) {
    event.preventDefault();
    
    var english = parseFloat(document.getElementById('english').value);
    var telugu = parseFloat(document.getElementById('telugu').value);
    var mathsA = parseFloat(document.getElementById('mathsA').value);
    var mathsB = parseFloat(document.getElementById('mathsB').value);
    var physics = parseFloat(document.getElementById('physics').value);
    var chemistry = parseFloat(document.getElementById('chemistry').value);
    var IT = parseFloat(document.getElementById('IT').value);
    var chemistryLab = parseFloat(document.getElementById('chemistryLab').value);
    var physicsLab = parseFloat(document.getElementById('physicsLab').value);

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
