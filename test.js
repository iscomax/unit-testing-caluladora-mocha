const assert = require('assert')
const calc = require('./calc')

describe("result multiplication", function(){
    it("should test multiplication 3*5",function(){
        var expected =15;
        var actual  = calc.multiply(3, 5);
        assert.equal(actual, expected);
    });

    it("should test multiplication 5*3",function(){
        var expected =15;
        var actual = calc.multiply(5, 3);
        assert.equal(actual, expected);
    });

    it("should test multiplication -2*3",function(){
        var expected =-6;
        var actual = calc.multiply(-2, 3);
        assert.equal(actual, expected);
    });

});

describe("result suma", function(){
    it("should test suma 30+20 ", function(){
        var expected = 50;
        var actual = calc.suma(30,20) ;
        assert.equal(actual, expected);
    })

    it("should test suma 20+30 ", function(){
        var expected = 50;
        var actual = calc.suma(20,30) ;
        assert.equal(actual, expected);
    });

    it("should test suma -20+30 ", function(){
        var expected = 10;
        var actual = calc.suma(-20,30) ;
        assert.equal(actual, expected);
    });
    it("should test suma 20-30 ", function(){
        var expected = -10;
        var actual = calc.suma(20,-30) ;
        assert.equal(actual, expected);
    });
});


describe("result division ", function(){
    it("should test division", function(){
        var expected = 10;
        var actual = calc.division(100,10);
        assert.equal(actual, expected);
    
    });
    it("should test division -100/10", function(){
        var expected = -10;
        var actual = calc.division(-100,10);
        assert.equal(actual, expected);
    
    });
    it("should test division 100/-10", function(){
        var expected = -10;
        var actual = calc.division(100,-10);
        assert.equal(actual, expected);
    
    });
  
   
});

