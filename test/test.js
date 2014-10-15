var expect = require('chai').expect;
var errorDictionary = require('../src/error_dictionary');
var generateRecipeFrom = require('../src/index');

describe('recipe generator module', function () {
    describe('when I have inputted more than two ingredients', function () {
        var ingredients = ['apples', 'bananas', 'pears'];

        it('should return an error', function () {
            var errorMessage = errorDictionary.MORE_THAN_TWO_INGREDIENTS;
            expect(function () {generateRecipeFrom(ingredients)}).to.throw(errorMessage);
        });
    });

    describe('when I have inputted less than two ingredients', function () {
        var ingredients = ['apple'];

        it('should return an error', function () {
            var errorMessage = errorDictionary.LESS_THAN_TWO_INGREDIENTS;
            expect(function () {generateRecipeFrom(ingredients)}).to.throw(errorMessage);
        });
    });

    describe('when I do not pass in an array', function () {
        var ingredients = 'apples and bananas';

        it('should return an error', function () {
            var errorMessage = errorDictionary.NOT_AN_ARRAY;
            expect(function () {generateRecipeFrom(ingredients)}).to.throw(errorMessage);
        });
    });
});