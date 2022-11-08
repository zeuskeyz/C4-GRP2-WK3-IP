const majibu = document.querySelectorAll("input[type='radio']");
const maliza = document.querySelector("#finished");
const matokeo = document.querySelector("#results");
const alama = document.querySelector("#score");
const uliko = document.querySelector("#rating")
const rudia = document.querySelector("#repeat")

let attempts = 3;
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

    else if(percentage >= 50 && percentage < 80 ){
        passLevel += "Fairly Passed";
    }

    else{
        passLevel += "Consider retaking test.";

    }
    alama.textContent = "You have scored: " + percentage +"%";
    uliko.textContent = passLevel;

    //percentage-=percentage; //prevents the submit button from continuing to double score on subsequent clicks in case we opt not todisable the submit button  
});



$("document").ready(function(){
    
    $("#finished").click(function() {
    
        $("#results").removeClass("d-none");
        $(this).text("QUIZ SUBMITTED!");
        $(this).addClass("d-none");
        $("#repeat").removeClass("d-none");
        $(".answers").attr("disabled",true);

        attempts--;
        if(attempts>=1) {
            $("#counter").text("You still have "+attempts+" attempts left.");
        }
        else{
            $("#rating").text("You have exhausted your 3 attempts!");
            $("#counter").text("");
            $("#repeat").addClass("d-none");
        }

        
    });

    $("#repeat").click(function(){

        if (attempts >= 1){

            $(this).addClass("d-none");
            $("#finished").removeClass("d-none");
            $("#finished").text("SUBMIT QUIZ");
            $(".answers").attr("disabled",false);
            $(".answers").prop("checked",false);
            $("#results").addClass("d-none");

        }


    });



    $("label").css("color", "black");
})
