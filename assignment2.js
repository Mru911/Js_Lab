function tablE() {
    let num = parseInt(document.getElementById("Given").value);
    let sentence = "";
    for (let i = 1; i <= 10; i++) {
    let final = num * (i);
    sentence += ` \n ${num} *  ${i} = ${final} <br/>`;
    }
    document.getElementById("displayf").innerHTML = sentence
    
}
function tablW() {
    let num = parseInt(document.getElementById("Given").value);
    let sentence = "";
    let i = 1;
    while (i <= 10) {
    let final = num * (i);
    sentence += ` \n ${num} * ${i} = ${final} <br/>`;
    i++;
    }
    document.getElementById("displayw").innerHTML = sentence
}
function tablD() {
    let num = parseInt(document.getElementById("Given").value);
    let sentence = "";
    let i = 1;
    do {
    let final = num * (i);
    sentence += ` \n ${num} X ${i} = ${final} <br/>`;
    i++;
    } while (i <= 10);
    document.getElementById("displayd").innerHTML = sentence
}