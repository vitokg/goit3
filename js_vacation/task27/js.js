/**
 Represent a small bilingual lexicon as a Javascript object in the following
 fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott",
 "new":"nytt", "year":"år"} and use it to translate your Christmas cards
 from English into Swedish.
 */

var christmasCard = {
    "Merry": "God",
    "Christmas": "Jul",
    "and": "och",
    "happy": "gott",
    "New": "Nytt",
    "Year": "er"
}
console.log(christmasCard.Merry+" "+christmasCard.Christmas+" "+christmasCard.and+" "+christmasCard.happy+" "+christmasCard.New+" "+christmasCard.Year);