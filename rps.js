function RPS(){
    
var user=document.getElementById("userInput").value.toLowerCase();
document.getElementById("userOutput").innerHTML="User chose" + user;
var computer=Math.floor(Math.random()*3)+1;
if(computer==1){
    computer="rock";
}else if(computer==2){
    computer="paper";
}else{
    computer="scissors";
}
document.getElementById("computerOutput").innerHTML="Computer chose" + computer;
if(computer==user){
    document.getElementById("rpsOutput").innerHTML="It was a Tie";
}else if((user=="rock" && computer=="scissors")||(user=="paper" && computer=="rock")||(user=="scissors" && computer=="paper")){
    document.getElementById("rpsOutput").innerHTML="You win!";
}else{
    document.getElementById("rpsOutput").innerHTML="Computer Wins.";
}
}
