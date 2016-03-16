/**
 * Created by kenneth on 2/20/16.
 */
function helloWorld(){
    return "Hello World!";
};

function numSum ( x , y ) {
    return x + y;
};

function numSub ( x , y ) {
    return x - y;
};

function numMul ( x , y ){
    return x * y;
};

function numDivid (x , y ) {
    if( y= 0){
        throw "This is not possible.";
    }
    return x / y;
};

function pTheorem( a , b ){
    if(a <= 0) {
        throw "Invalid Input";
    }
    else if(b <= 0) {
        throw "Invalid Input";
    }
    //TODO: come up with functions that say if the number isGreaterThanZero
    ensureValidNumber(a);
    ensureValidNumber(b);


    var missingSide = (a * a) + (b * b);
    var answer = Math.sqrt(missingSide);
    return answer;
};

function isNumber(potentialNumber){
    if(isNaN(potentialNumber)){
        return false;
    }
    return true;
}


function ensureValidNumber(potentialNumber){
    if(isNumber(potentialNumber) === false){
        throw "Missing Value or Invalid Input"
    }
}