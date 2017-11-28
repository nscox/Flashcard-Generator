function ClozeCard(text, cloze) {
    if (!text.includes(cloze)) return console.error("text doesn'\t contain cloze")
    this.cloze = cloze
    this.partial = text.replace(cloze, '...')
    this.fullText = text
}

ClozeCard.prototype.giveAnswers = function() {
    console.log('here\'s your answer cheater ', this.fullText);
}

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");
    console.log('cloze', firstPresidentCloze.cloze);
    console.log('partial', firstPresidentCloze.partial);
    console.log('full text', firstPresidentCloze.fullText);

firstPresidentCloze.giveAnswers()

// change everything to lower case or use == to compare values

// if answer == ClozeCard.cloze  return correct otherwise return try again

// create form to make new clozecards

// create area / input to test all the cloze cards 
/* new ClozeCard( clozeCardStorage[i].text, clozeCardStorage[i].cloze)
var clozeCardStorage = {
    {
        text: ,
        cloze:
    },
    {
        text: ,
        cloze:
    },
    {
        text: ,
        cloze:
    },
} */

module.exports = ClozeCard