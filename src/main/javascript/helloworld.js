/**
 * Created by kenneth on 2/20/16.
 */
function helloWorld(){
    return "Hello World!";
};

function numSum ( x , y ) {
    return x + y;
};

function pTheorem( a , b ){
    if(a <= 0) {
        throw "Invalid Input"
    }
    else if(b <= 0){
        throw "Invalid Input"
    }
    else if(a = NaN){
        throw "Missing Value"
    }
    else if(b = NaN){
        throw "Missing Value"
    }
    var missingSide = (a * a) + (b * b);
    var answer = Math.sqrt(missingSide);
    return answer;

};