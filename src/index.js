var errorDictionary = require('./error_dictionary')
var phraseDictionary = require('./phrase_dictionary')

module.exports = function recipe () {
    var seneca = this;

    seneca.add({role: 'recipe', cmd: 'generate'}, function (args, callback) {
        var ingredients = args.ingredients;

        if(!(ingredients instanceof Array)) callback(errorDictionary.NOT_AN_ARRAY, null)
        if (ingredients.length > 2) callback(errorDictionary.MORE_THAN_TWO_INGREDIENTS, null)
        if (ingredients.length < 2) callback(errorDictionary.LESS_THAN_TWO_INGREDIENTS, null)

        var recipeString = ''

        recipeString += phraseDictionary.firstPhrase
        recipeString += ' '
        recipeString += ingredients.join(' and ')
        recipeString += ' '
        recipeString += addRandomPhraseFrom(phraseDictionary.phrases)
        recipeString += phraseDictionary.lastPhrase

        callback(null, recipeString)
    })
}

function addRandomPhraseFrom(phraseDictionary) {
    return phraseDictionary[Math.floor(Math.random()*phraseDictionary.length)]
}