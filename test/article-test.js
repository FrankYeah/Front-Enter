var assert = chai.assert;
var expect = chai.expect;
chai.should();

//test

before(function(done) {
    setTimeout(function(){
        done();
    }, 1500)
});

// querySelector (lib.js)

describe('mocha tests one', function () {
    it('query selector is ok.', function() {
        expect(app.get('#alertHere')).to.equal(document.querySelector('#alertHere'));
        expect(app.get('#testHere')).to.equal(document.querySelector('#testHere'));
        expect(app.get('#boxHere')).to.equal(document.querySelector('#boxHere'));
    });
})

// create element (lib.js)

describe('mocha tests two', function () {
    before(function() {
        app.createElement('div', 'classOne', 'idOne', 'mainId', 'how are you', '');
    });
    it('element can be create.', function() {
        expect(app.get('#idOne').nodeName).to.equal('DIV');
        expect(app.get('#idOne').className).to.equal('classOne');
        expect(app.get('#idOne').id).to.equal('idOne');
        expect(app.get('#idOne').textContent).to.equal('how are you');
        expect(app.get('#idOne').parentNode.id).to.equal('mainId');
    });
})

//  database exist (article.js)

describe('mocha tests three', function(done){
    it("database exist.", function(done){
        expect(getAllData).to.be.an('object');
        expect(database).to.be.an('object');
        expect(storage).to.be.an('object');
        done();
    });
});

//  require data (article.js)

describe('mocha tests four', function(done){
    it("get values from firebase.", function(done){
        expect(allData.name).to.be.equal('UXabc');
        expect(allData.city).to.be.equal('台北');
        expect(allData.classType).to.be.equal('小班制');
        expect(allData.skill).to.be.equal('前端');
        expect(allData.teachWay).to.be.equal('手把手教制');
        expect(allData.teacherNum).to.be.equal('1');
        done();
    });
});

//  store photo (article.js)

describe('mocha tests five', function(done){
    it("photo have stored.", function(done){
        expect(storePhoto).to.be.an('array');
        expect(storePhoto).to.have.lengthOf(9);
        done();
    });
});




 

// const should = require('should');
// var assert = require('assert');
// var jsdom = require('mocha-jsdom');
// var expect = require('chai').expect;

// it('1 + 2 = 3', () => {
//   expect(lib(1, 2)).to.equal(3);
// });

// it('should be equal', function() {
//   assert('foo' === 'foo', 'foo is not bar');
// });

// it('should return the average of array', done => {
//   var avg = average([1, 2, 3, 4])
//   avg.should.equal(2.5)
//   done()
// })