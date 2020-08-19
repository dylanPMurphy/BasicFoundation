//Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

var count255 = function(){
    var out = [];
    for(var i = 0; i <=254;i++){
        out[i] = i+1;
    }
    return out;
}

//Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
var sumEvenTo1000 = function(){
    var sum = 0;
    for(var i = 0; i <=1000;i++){
        if(i%2==0){
            sum+=i;
        }
    }
    return sum;
}

//Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
var sumOddTo5000 = function(){
    var sum = 0;
    for(var i = 1; i<=5000; i+=2){

        sum += i;
    }
    return sum;
}


//Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
var iterateAnArrayAndSum = function (inputArray){
    var sum = 0;
    for(var i = 0; i < inputArray.length; i++){
        sum += inputArray[i];
    }
    return sum;
}





//Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
var findMaxInArray = function(inputArray){
    var max = 0;
    for(var i = 0; i<inputArray.length; i++){
        if(inputArray[i] > max){
            max = inputArray[i];
        }
    }
    return max;
}


//Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
var findAvgInArray = function(inputArray){
    var avg = 0;
    for(var i = 0; i<inputArray.length; i++){
            avg += inputArray[i];
    }
    return avg/inputArray.length;
}

//Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
var arrayOdd = function(){
    var output = [];
    for(var i =1; i<50; i+=2){
        output.push(i);
    }
    return output;
}

//Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
var greaterThanY = function(inputArray, y){
    countGreaterThanY = 0;
    for(var i = 0; i < inputArray.length; i++){
        if(inputArray[i] > y){
            countGreaterThanY++;
        }
    }
    return countGreaterThanY;
}

//Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
var arraySquares = function (inputArray){
    for(var i = 0; i < inputArray.length; i++){
        inputArray[i] *= inputArray[i];
    }
    return inputArray;
}

//Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])


//Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])


//Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).


//Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].




/*
--------------------------------------------------------
--------------------TESTING-----------------------------
--------------------------------------------------------
*/
var testArray = [23,52,4,3,13,5];

console.log(count255()); //valid

console.log(sumEvenTo1000()); //250500

console.log(sumOddTo5000());//6250000

console.log(iterateAnArrayAndSum(testArray)); //100

console.log(findMaxInArray(testArray));

console.log(findAvgInArray(testArray));

console.log(arrayOdd());

console.log(arraySquares(testArray));