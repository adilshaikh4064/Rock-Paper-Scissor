let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissor=document.querySelector("#scissor");


let youClass=document.querySelector(".you");
let compClass=document.querySelector(".comp");


let you=youClass.querySelector("div");
let comp=compClass.querySelector("div");

let result=document.querySelector("#result");

let yourScore=0;
let compScore=0;



    rock.addEventListener("click",()=>{

        let ppr=getRandom();

        if(ppr===1){
            compScore++;
            comp.innerText=`${compScore}`;

            result.innerText="You lost, paper beats rock!";
            result.style.backgroundColor="red";
        }
        else if(ppr===-1){
            yourScore++;
            you.innerText=`${yourScore}`;

            result.innerText="You won, rock beats scissor!";
            result.style.backgroundColor="green";
        }
        else{
            result.innerText="You draw!"
            result.style.backgroundColor="black";
        }


        if(yourScore<compScore){
            you.style.color="red";
        }
        else if(yourScore>compScore){
            you.style.color="green";
        }
    })


    paper.addEventListener("click",()=>{

        let sci=getRandom();

        if(sci===1){
            compScore++;
            comp.innerText=`${compScore}`;

            result.innerText="You lost, scissor beats paper!";
            result.style.backgroundColor="red";
        }
        else if(sci===-1){
            yourScore++;
            you.innerText=`${yourScore}`;

            result.innerText="You won, paper beats rock!";
            result.style.backgroundColor="green";
        }
        else{
            result.innerText="You draw!"
            result.style.backgroundColor="black";
        }


        if(yourScore<compScore){
            you.style.color="red";
        }
        else if(yourScore>compScore){
            you.style.color="green";
        }
    })



    scissor.addEventListener("click",()=>{

        let rck=getRandom();

        if(rck===1){
            compScore++;
            comp.innerText=`${compScore}`;

            result.innerText="You lost, rock beats scissor!";
            result.style.backgroundColor="red";
        }
        else if(rck===-1){
            yourScore++;
            you.innerText=`${yourScore}`;

            result.innerText="You won, scissor beats paper!";
            result.style.backgroundColor="green";
        }
        else{
            result.innerText="You draw!"
            result.style.backgroundColor="black";
        }


        if(yourScore<compScore){
            you.style.color="red";
        }
        else if(yourScore>compScore){
            you.style.color="green";
        }
    })






const getRandom=()=>{
    let random=Math.random();

    if(random<0.33)
        return -1;
    else if(random>0.66)
        return 1;
    else 
        return 0;
}