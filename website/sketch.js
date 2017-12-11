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

const theMaker = function (allItems, title){

      // if (allItems.hasOwnProperty(title)){
    console.log('working')
    let theThings = allItems[title]
  console.log(theThings.length)
  let thingsLength = theThings.length

  let randomizer = Math.floor(Math.random()* thingsLength)
  console.log(randomizer)
  let theThing = theThings[randomizer];
  console.log(theThing)
  // console.log(randomEntry)
  /* DOTHIS */

    let thing = $("<div class = 'thing'>"+ theThing + "</div>")
    let category = $("<div class = 'category'>" + title + "</div>")

    $('body').append(category)
    $('body').append(thing)
    // document.body.append(category);
    // document.body.append(thing);
  


}

$.getJSON("/random", function(json) {
  let allItems = json.data
  let title = json.title
  if (title in allItems){
    theMaker(allItems, title)
  }
  else {
     console.log('need a diferent one')
  
    var params = {
      name: "daniel",
      password: "rainb0w"
    }
    $.post('/path/to/post', params, finished);

    // Handling the result
    function finished(reply) {
    console.log(reply.data);
    if (reply.title in reply.data){
      theMaker(reply.data, reply.title)
    }
      // if  replay if (title in allItems){theMaker}
      else{ 
      $.post('/path/to/post', params, finished);
    }
    }

  }
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


