function myFunction() {
    console.log("Hello World");
}
var=sum;

function addNums(num1,num2) {
    sum = num1 + num2;
    console.log(sum);
    return sum;
}


var numClicks = 0;
$("h1").click(function() {
    //do stuff
    $("body").css("background-color","blue");
    numClicks++; 
    
    var times;
    if (numClicks <2) {
        times = "time"
    } else {
        times = "times.";
    }
    
    $("h1").html(phrase);
    $("h1").html("numClicks");

})


//so it replaces h1 with you clicked it after the body's background-color changes blue. 
//so javascript enables the relation of h1 and body.. 

