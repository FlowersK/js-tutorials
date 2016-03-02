/**
 * Created by kenneth on 2/20/16.
 */
describe("Hello World", function() {
    it("says hello" , function() {
        expect(helloWorld()).toEqual("Hello World!")
    });
});

describe("Sum", function() {
    it("adds two numbers", function(){
        var x = 5 , y = 9 , expectedResult = 14;
        expect(numSum( x , y )).toEqual(expectedResult)
    });
});

describe("pythagorean theorem", function(){
    it("can solve for a side of a right triangle", function(){
        var a = 3 , b = 4 , expectedResult = 5 ;

        expect(pTheorem( a , b )).toEqual(expectedResult)
    });
    it("cant tell if A and B <= 0",function(){
        var a = 4, b = 3 , expectedResult = 0 ;
        expect(pTheorem( a , b )).toBeGreaterThan(expectedResult)
    });
});

/* TODO = finish writing the test for the pythagorean theorem and push code to GIT. */