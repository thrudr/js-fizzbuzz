
let multiplesTree = "Fizz";
let multiplesFive = "Buzz";
let multiplesTreeAndFive = "FizzBuzz";

for(let i= 1; i < 101; i++) {
    if(i%3==0 && i%5==0){
        console.log(multiplesTreeAndFive);
        document.getElementById("box-square").innerHTML +=`
        
        `;

    } else if(i%5==0){
        console.log(multiplesFive);
        document.getElementById("box-square").innerHTML +=`
       
        `;

    } else if(i%3==0) {
        console.log(multiplesTree);
        document.getElementById("box-square").innerHTML +=`
       
        `;

    } else {
        console.log(i);
        document.getElementById("box-square").innerHTML +=`
       
        `;
    }
}

