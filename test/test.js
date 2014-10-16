var expect = require('chai').expect
var seneca = require('seneca')
var errorDictionary = require('../src/error_dictionary')
var phraseDictionary = require('../src/phrase_dictionary')

describe('recipe generator module', function () {
    var si;

    before(function () {
        si = seneca({log:'silent'})
                .use('../src/index')
    })

    describe('when I have inputted more than two ingredients', function () {
        var ingredients = ['apples', 'bananas', 'pears']

        it('should return an error', function () {
            var errorMessage = errorDictionary.MORE_THAN_TWO_INGREDIENTS
            si.act({role: 'recipe', cmd: 'generate', ingredients: ingredients}, function (err, result) {
                expect(err).to.eql(errorMessage)
            })
        })
    })

    describe('when I have inputted less than two ingredients', function () {
        var ingredients = ['apple']

        it('should return an error', function () {
            var errorMessage = errorDictionary.LESS_THAN_TWO_INGREDIENTS
            si.act({role: 'recipe', cmd: 'generate', ingredients: ingredients}, function (err, result) {
                expect(err).to.eql(errorMessage)
            })
        })
    })

    describe('when I do not pass in an array', function () {
        var ingredients = 'apples and bananas'

        it('should return an error', function () {
            var errorMessage = errorDictionary.NOT_AN_ARRAY
            si.act({role: 'recipe', cmd: 'generate', ingredients: ingredients}, function (err, result) {
                expect(err).to.eql(errorMessage)
            })
        })
    })

    describe('when I pass in valid parameters', function () {
        var ingredients

        beforeEach(function () {
            ingredients = ['apples', 'bananas']
        })

        it('should return a recipe string', function () {
            si.act({role: 'recipe', cmd: 'generate', ingredients: ingredients}, function (err, result) {
                expect(result).to.be.a('string')
            })
        })

        it('should include the ingredients in the recipe', function () {
            si.act({role: 'recipe', cmd: 'generate', ingredients: ingredients}, function (err, result) {
                expect(result).to.contain(ingredients[0])
                expect(result).to.contain(ingredients[1])
            })
        })

        it('should include the starting phrase', function () {
            si.act({role: 'recipe', cmd: 'generate', ingredients: ingredients}, function (err, result) {
                expect(result).to.contain(phraseDictionary.firstPhrase)
            })
        })

        it('should include the ending phrase', function () {
            si.act({role: 'recipe', cmd: 'generate', ingredients: ingredients}, function (err, result) {
                expect(result).to.contain(phraseDictionary.lastPhrase)
            })
        })
    })
})