(function(){
    "use strict";
    console.log("reading js");

    const myForm = document.querySelector("#myform");
    const madlib = document.querySelector("#madlib");

    myForm.addEventListener("submit", function(event){
        event.preventDefault();
        const noun1 = document.querySelector("#noun1").value;
        const noun2 = document.querySelector("#noun2").value;
        const adj = document.querySelector("#adj").value;
        const verb = document.querySelector("#verb").value;
        const adverb = document.querySelector("#adverb").value;
        const face = document.querySelector("#face").value;
        
        let myText;

        if (noun1 && noun2 && adj && verb && adverb && face){
            myText = `On hump day Wednesday, ${noun1} had to skip the first lecture because a ${adj} elephant escaped from the ${noun2} and ${verb} his/her homework. ${noun1} told Professor Snoop that he/she ${adverb} redid the assignment. Professor Snoop looks ${face}.`;
        }else{
            myText = "Please pick a word from the dropdown menu so I can make your Mad Lib!"
        }

        madlib.innerHTML = myText;

        if (face === "impressed"){
            document.getElementById("worm").className="showing";
        }

        if (face === "irritated"){
            document.getElementById("sad").className="showing";
        }

    });

    document.getElementById("redo").addEventListener("click", function(){
        madlib.innerHTML="";
        document.getElementById("worm").className="hidden";
        document.getElementById("sad").className="hidden";
    });

}());