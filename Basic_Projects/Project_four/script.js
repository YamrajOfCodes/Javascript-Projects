const random_Number=parseInt(Math.round(Math.random()*10+1));
console.log(random_Number);

const input_number=parseInt(document.querySelector("#inputNumber").value());
const submit_btn=document.querySelector("#submitBtn");
const guess=document.querySelector("#guess");
const attempt=document.querySelector("#attempt");
const messgaeParser=document.querySelector("#message");

const p=document.createElement("p");

const prev_arr=[];
const attempts=1;
const playgame=true;

submit_btn.addEventListener('click',(e)=>{
    e.preventDefault();
    validateguess();
})


function validateguess(guess){


if(input_number>10 || input_number<1 || isNaN(input_number)){
  displaymessage("please Enter valid number");
}else{
    checkguess(input_number);
}



}

function checkguess(guess){

if(random_Number===guess){
    displaymessage("You win the game is over");
}else{
    displayguess(guess);
}

}

function displaymessage(message){
  messgaeParser.innerHTML=message;
}

function displayguess(guess){
    if(guess>random_Number){
        displaymessage("the number is higher")
    }else{
        displaymessage("the number is lower");
    }


}

function startgame(){

}


