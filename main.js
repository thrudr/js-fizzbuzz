
let multiplesTree = "Fizz";
let multiplesFive = "Buzz";
let multiplesTreeAndFive = "FizzBuzz";

for(let i= 1; i < 101; i++) {
    if(i%3==0) {
        console.log(multiplesTree);

    } else if(i%5==0){
        console.log(multiplesFive);

    } else if(i%3==0 && i%5==0){
        console.log(multiplesTreeAndFive);
    } else {
        console.log(i);
    }
}