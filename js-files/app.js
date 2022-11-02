/*const answ = document.querySelector(".correct");
const majibu = document.querySelectorAll("input[name='options']");
var marks = 0;

majibu.forEach(function(jibu) {

    jibu.addEventListener("change",function(e){

        if (e.target.checked && jibu.classList.contains("correct")){

            marks += 2
        }

        else{
            marks = marks;
        }

        alert(marks)
    })

    
})*/

const majibu = document.querySelectorAll("input[name='options']");
const maliza = document.querySelector("#finished");
const matokeo = document.querySelector("#results")
const alama = document.querySelector("#score")
let marks = 0;
let totalMarks = 0;

majibu.forEach(function(jibu){
    if(parseInt(jibu.value) > 0) {totalMarks += parseInt(jibu.value);}
    else{totalMarks = totalMarks}
    jibu.addEventListener("change",function(e){
        marks += parseInt(e.target.value);
    })    

})

maliza.addEventListener("click",function(e){

    let percentage = (marks/totalMarks)*100;
    majibu.forEach(function(jibu){
       jibu.setAttribute("disabled", "true")
    }) 
    
    alama.textContent = "You have scored: " + percentage +"%";
    matokeo.classList.remove("d-none");
})
