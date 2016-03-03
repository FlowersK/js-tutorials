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
        throw "Invalid Input";
    }
    else if(b <= 0){
        throw "Invalid Input";
    }
    else if(isNaN(a)){
        throw "Missing Value or Invalid Input";
    }
    else if(isNaN(b)){
        throw "Missing Value or Invalid Input";
    }
    var missingSide = (a * a) + (b * b);
    var answer = Math.sqrt(missingSide);
    return answer;
};
