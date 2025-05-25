document.querySelector("form").onsubmit = (e) =>{
    e.preventDefault();
    const inputvalue = document.getElementById("value").value;
    if(!inputvalue){
        return;
        
    }
    const randomNumber= randomNumberGenerator();
    if(Number(inputvalue)===randomNumber){
        document.getElementById("icon").innerHTML="&#10003";
        document.getElementById("result").innerHTML= "you Guessed the right number.";
        document.getElementById("icon").style.color="Green";
    }else{
        document.getElementById("icon").innerHTML="&#10006";
        document.getElementById("result").innerHTML="you Guessed the wrong number.The Actual Number is"+randomNumber;
         document.getElementById("icon").style.color="red";
        if(Number(inputvalue) + 10 > randomNumber){
            document.getElementById("message").innerHTML="You were a near but little higher";
        }else if(Number(inputvalue) - 10 < randomNumber){
            document.getElementById("message").innerHTML="You were a near but little Lower";
        }
    }
    console.log(inputvalue);
    
};
const randomNumberGenerator = () =>{
    const number=Math.floor(Math.random()*100);
    return number;
}