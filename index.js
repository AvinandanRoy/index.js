function tallestPerson(numbers){
    
    for(var i = 1 ; i < numbers.length ; i++){
        if(numbers[0] < numbers[i]){
            numbers[0] = numbers[i];
        }
    }
    return numbers[0];
}


var numbers = [20,30,40,50,60,70,80];
var tallest = tallestPerson(numbers);
console.log("tallest person is " , tallest);