let q=0, score=0;

const questions = [
{
q:"सिंधु घाटी सभ्यता के लोग किस देवता की पूजा करते थे?",
a:"पशुपति",
b:"इंद्र",
c:"अग्नि",
d:"वरुण",
ans:"A"
}
];

function load(){
document.getElementById("question").innerText=questions[q].q;
optA.innerText=questions[q].a;
optB.innerText=questions[q].b;
optC.innerText=questions[q].c;
optD.innerText=questions[q].d;
}
load();

function next(){ q++; if(q<questions.length) load(); }

function submitTest(){
alert("Test Submitted");
}
