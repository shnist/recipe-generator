var expect = require('chai').expect;
var errorDictionary = require('../src/error_dictionary');
var generateRecipeFrom = require('../src/index');

describe('recipe generator module', function () {


    describe('when I have inputted more than two recipes', function () {
        var ingredients = ['apples', 'bananas', 'pears'];

        it('should return an error', function () {
            var errorMessage = errorDictionary.MORE_THAN_TWO_INGREDIENTS;
            expect(function () {generateRecipeFrom(ingredients)}).to.throw(errorMessage);
        });
    });
});