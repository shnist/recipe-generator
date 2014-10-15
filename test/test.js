var expect = require('chai').expect;
var errorDictionary = require('../src/error_dictionary');
var phraseDictionary = require('../src/phrase_dictionary');
var createRecipeFrom = require('../src/index');

describe('recipe generator module', function () {
    describe('when I have inputted more than two ingredients', function () {
        var ingredients = ['apples', 'bananas', 'pears'];

        it('should return an error', function () {
            var errorMessage = errorDictionary.MORE_THAN_TWO_INGREDIENTS;
            expect(function () {createRecipeFrom(ingredients)}).to.throw(errorMessage);
        });
    });

    describe('when I have inputted less than two ingredients', function () {
        var ingredients = ['apple'];

        it('should return an error', function () {
            var errorMessage = errorDictionary.LESS_THAN_TWO_INGREDIENTS;
            expect(function () {createRecipeFrom(ingredients)}).to.throw(errorMessage);
        });
    });

    describe('when I do not pass in an array', function () {
        var ingredients = 'apples and bananas';

        it('should return an error', function () {
            var errorMessage = errorDictionary.NOT_AN_ARRAY;
            expect(function () {createRecipeFrom(ingredients)}).to.throw(errorMessage);
        });
    });

    describe('when I pass in valid parameters', function () {
        var ingredients;
        var result;

        beforeEach(function () {
            ingredients = ['apples', 'bananas'];
            result = createRecipeFrom(ingredients);
        });

        it('should return a recipe string', function () {
            expect(result).to.be.a('string');
        });

        it('should include the ingredients in the recipe', function () {
            expect(result).to.contain(ingredients[0]);
            expect(result).to.contain(ingredients[1]);
        });

        it('should include the starting phrase', function () {
            expect(result).to.contain(phraseDictionary.firstPhrase);
        });

        it('should include the ending phrase', function () {
            expect(result).to.contain(phraseDictionary.lastPhrase);
        });
    });
});