// const express = require('express');
var corpora = require('corpora-project');


exports.theThing = {
corpusCreator(corpus, specify){
// console.log(corpus)
let particular = specify
// const whichCorpus = corpus.toString()
// const moreSpecific = specify.toString()
const corpusData = corpora.getFile(corpus, specify);
// console.log(corpusData)
console.log(corpusData[specify])
let theCorpus = corpusData[specify]
// console.log(theCorpus)
//exercise
let reasonableCorpus = theCorpus.slice(0, 14)
return reasonableCorpus.length
}
}

exports.randomThingGenerator = {
  randomThingCreator(x){
    console.log('test')
    for (let i=2; i > 0; i--){
      let everything = corpora.getCategories()
      console.log(getCategories)
    }
  }

}



// module.exports = randomThingGenerator;
