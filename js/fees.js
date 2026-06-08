function getInputValue(){

    let inputVal=document.getElementById("uid").value;
    let a=1;

    if(inputVal==23360){
        document.getElementById("demo").innerHTML ="Pratyush Kumar Sinha";
        document.getElementById("demo1").innerHTML ="10000";
    }
    else if(inputVal==23357)
    {
        document.getElementById("demo").innerHTML ="Kashish Singh";
        document.getElementById("demo1").innerHTML ="10000";  
    }
    else{
        document.getElementById("demo").innerHTML ="No Records Found";
        document.getElementById("demo1").innerHTML ="0";
    }
    
}

