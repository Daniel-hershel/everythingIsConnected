// const express = require('express');
// var corpora = require('corpora-project');

$.getJSON("/all", function(json) {
    // console.log(json); 
    // this will show the info it in firebug console
//       //select a random element from theCorpus
  const selector = json.gemstones
      let randomizer = selector[6]
   let corpusElement = "reride"

       // exercise
    var h = document.createElement("div")
    var t = document.createTextNode(randomizer); 
    h.appendChild(t);
    // document.body.appendChild(h);
});

$.getJSON("/random", function(json) {
  let allItems = json
  console.log(allItems)

  let randomEntry = allItems[Math.floor(Math.random()* allItems.length)]
  console.log(randomEntry)
  /* DOTHIS */
  // console.log(randomEntry[fileName])
  

  // let thing = randomEntry[OneofTheThingsRandomly]
  // console.log(allCategories[2])
  // let randomCategory = allCategories[Math.floor(Math.random() * allCategories.length)];
      // console.log(randomCategory)
      // let randomFile = corpora.
      // let randomDocument = randomCategory[random]
      // let randomItem = randomDocument[random]
  
    // var h = document.createElement("div")
    // var t = document.createTextNode(randomItem); 
    // h.appendChild(t);
    // document.body.appendChild(h);

})


// console.log()


//     let particular = specify

//    // const whichCorpus = corpus.toString()
//    // const moreSpecific = specify.toString()
     
//      const corpusData = corpora.getFile(corpus, specify);
//      // console.log(corpusData)
//     console.log(corpusData[specify])



//      let theCorpus = corpusData[specify]
//       // console.log(theCorpus)

//       //exercise
//       let reasonableCorpus = theCorpus.slice(0, 14)
      


//       // return reasonableCorpus.length

//   }

// theThing.corpusCreator("materials", "gemstones")
 
// console.log(corpusData)

   

// }
// module.exports = theThing;


