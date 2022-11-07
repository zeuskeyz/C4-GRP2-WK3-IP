const majibu = document.querySelectorAll("input[type='radio']");
const maliza = document.querySelector("#finished");
const matokeo = document.querySelector("#results");
const alama = document.querySelector("#score");
const uliko = document.querySelector("#rating")

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
    let passLevel = "";


    if (percentage > 80){
        passLevel += "Excellently Passed";
    }

    else if(percentage >= 50 && percentage >= 80 ){
        passLevel += "Fairly Passed";
    }

    else{
        passLevel += "Consider retaking test.";

    }
    alama.textContent = "You have scored: " + percentage +"%";
    uliko.textContent = passLevel;

    //percentage-=percentage; //prevents the submit button from continuing to double score on subsequent clicks
    
});


$("#finished").click(function(){
    
    $("#results").removeClass("d-none");
    $(this).text("QUIZ SUBMITTED!");
    $(this).prop("disabled",true);
    $(this).addClass("bg-warning text-dark")
    
    majibu.forEach(function(jibu) {

        $("input[type='radio']").attr("disabled",true)
 
    });
    
});


$("document").ready(function(){
    $("label").css("color", "black");
})