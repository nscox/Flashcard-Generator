var ClozeCard = require('ClozeCard')

function BasicCard(front, back) {
    this.front = front
    this.back = back
}

var historyCard = new BasicCard('who is president', 'Shorty da Pimp')

console.log(historyCard.front)
console.log(historyCard.back)

module.exports = BasicCard