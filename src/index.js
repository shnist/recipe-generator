var errorDictionary = require('./error_dictionary');

module.exports = function createRecipeFrom (ingredients) {
    if(!(ingredients instanceof Array)) throw new Error(errorDictionary.NOT_AN_ARRAY);
    if (ingredients.length > 2) throw new Error(errorDictionary.MORE_THAN_TWO_INGREDIENTS);
    if (ingredients.length < 2) throw new Error(errorDictionary.LESS_THAN_TWO_INGREDIENTS);




};