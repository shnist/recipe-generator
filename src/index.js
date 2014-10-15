var errorDictionary = require('./error_dictionary');

module.exports = function createRecipeFrom (ingredients) {
    if (ingredients.length > 2) throw new Error(errorDictionary.MORE_THAN_TWO_INGREDIENTS);


};