var errorDictionary = require('./error_dictionary');
var phraseDictionary = require('./phrase_dictionary');

module.exports = function createRecipeFrom (ingredients) {
    if(!(ingredients instanceof Array)) throw new Error(errorDictionary.NOT_AN_ARRAY);
    if (ingredients.length > 2) throw new Error(errorDictionary.MORE_THAN_TWO_INGREDIENTS);
    if (ingredients.length < 2) throw new Error(errorDictionary.LESS_THAN_TWO_INGREDIENTS);

    var recipeString = '';

    recipeString += phraseDictionary.firstPhrase;
    recipeString += ' ';
    recipeString += ingredients.join(' and ');
    recipeString += ' ';
    recipeString += addRandomPhraseFrom(phraseDictionary.phrases);
    recipeString += phraseDictionary.lastPhrase;

    return recipeString;
};

function addRandomPhraseFrom(phraseDictionary) {
    return phraseDictionary[Math.floor(Math.random()*phraseDictionary.length)]
}