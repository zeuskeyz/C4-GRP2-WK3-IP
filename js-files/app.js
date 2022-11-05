const majibu = document.querySelectorAll("input[type='radio']");
const maliza = document.querySelector("#finished");
const matokeo = document.querySelector("#results");
const alama = document.querySelector("#score");

let marks = 0;
let totalMarks = 0;

//adds all the possible values in the answer options to create a total
majibu.forEach(function(jibu) {

    if(parseInt(jibu.value) > 0) {totalMarks += parseInt(jibu.value);}
    else{totalMarks = totalMarks;}
});

//adds an event listener to the finish-quiz button 
maliza.addEventListener("click",function(e){

    //loops through the answer options to check for the values of the selected options once the click event is fired and add them to the marks variable
    majibu.forEach(function(jibu) {
        if(jibu.checked){
            marks += parseInt(jibu.value);
        }
    })    
    
    let percentage = (marks/totalMarks)*100; //turns the marks into percentage form
    let level = "";


    if (percentage > 80){
        level += "Excellently Passed";
    }

    else if(percentage >= 50 && percentage >= 80 ){
        level += "Fairly Passed";
    }

    else{
        level += "\nPoor performance, Please retake test.";

    }
    alama.textContent = "You have scored: " + percentage +"%"+level;
    //percentage-=percentage; //prevents the submit button from continuing to double on subsequent clicks
    //
});


$("#finished").click(function(){
    
    $("#results").removeClass("d-none");
    $("#finished").text("QUIZ SUBMITTED!");
    
    majibu.forEach(function(jibu) {

        $("input[type='radio']").attr("disabled",true)
 
    });
    
});

