//function for countdowntimer V1 for wk1-2
function start(){
    console.log("start() function started");
    // created variable currTime set it equal to 10 seconds on the countdown
    var currTime = 10;
    console.log(currTime);
    document.getElementById("countdownStatus").innerHTML = currTime;
    //9 seconds left before blastoff
    setTimeout(function(){
        currTime = currTime -1;
        //what we do after delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 1000)
    //8 secinds left before blastoff
    setTimeout(function(){
        currTime = currTime -1;
        //what we do after delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 2000)
    //7 seconds left before blastoff
    setTimeout(function(){
        currTime = currTime -1;
        //what we do after delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 3000)
    //6 seconds left before blastoff
    setTimeout(function(){
        currTime = currTime -1;
        //what we do after delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 4000)
    //5 seconds left before blastoff
    setTimeout(function(){
        currTime = currTime -1;
        //what we do after delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 5000)
    //4 seconds left before blastoff
    setTimeout(function(){
        currTime = currTime -1;
        //what we do after delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 6000)
    //3 seconds left before blastoff
    setTimeout(function(){
        currTime = currTime -1;
        //what we do after delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 7000)
    //2 seconds left before blastoff
    setTimeout(function(){
        currTime = currTime -1;
        //what we do after delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 8000)
    //1 second left before blastoff
    setTimeout(function(){
        currTime = currTime -1;
        //what we do after delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 9000)
    //blastoff! timer has ran out of time
    setTimeout(function(){
        currTime = currTime -1;
        //what we do after delay
        document.getElementById("countdownStatus").innerHTML = "BLASTOFF!!!";
        console.log(currTime);
    }, 10000)
}
//every line of code commented on...
function playCraps(){
    console.log("playCraps() started");
        //generate variables: die1, die2, sum
        var die1;
        var die2;
        var sum;

        //roll the dice
        die1 = Math.floor(Math.random() *6)+1;
        console.log(die1);
        die2 = Math.floor(Math.random() *6)+1;
        console.log(die2);
        //determine the sum of the two dice and save it in sum 
        sum = die1 + die2;
        console.log("sum is equal to " + sum);
       
        //follow the rules of craps and tell the status in crapsStatus
        //first lose if sum of dice roll a 7 or(||) 11
        if(sum == 7 || sum == 11){
            document.getElementById("crapsStatus").innerHTML = "Craps!! You Lose!"
        } else if(die1 == die2 && die1%2 == 0){
    //this line shows that you won with even numbers that were doubled     
            document.getElementById("crapStatus").innerHTML = "Huzzah! You Win!!!"
        } else{
    // this line does not work and shows a typeError
            document.getElementById("crapStatus").innerHTML = "You did not win or lose. Please play again!"
        
   
        
    }
}
