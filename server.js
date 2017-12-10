
//express to run server
var express = require('express');

//start up an instance of app. This needs to go before any of the things below which are attached to the app
var app = express();
//connecting app to website folder which has index.html and sketch.js to run a website connected to this server/app

app.use(express.static('website'));

//cors for cross origin aloowance
var cors = require('cors');
app.use(cors());

//requring the node file read in system
var fs = require('fs')

var corpora = require('corpora-project');

// corpusCreator(corpus, specify){}


//body-parser to work with json files
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Set up the server
var server = app.listen(process.env.PORT || 8000, listen);
// var server = app.listen(process.env.PORT || 3030, listen);

//callback to debug
function listen(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://' + host + ':' + port);
      if (process.send) {
        process.send('online');
    }
}

const corpus = "materials";
const specify ="gemstones";

const corpusData = corpora.getFile(corpus, specify);


app.get('/random', showRandom);


function showRandom(req, res){

  let randomThing = function (){
    // for (let i=0; i < 3; i++){}
      let allCategories = corpora.getCategories()
      let randomCategory = allCategories[Math.floor(Math.random() * allCategories.length)];
      let allDocuments = corpora.getFiles(randomCategory)
      // let randomDocument = allDocuments[1]
      let randomDocument = allDocuments[Math.floor(Math.random()* allDocuments.length)]
      let randomDocumentName = randomDocument.name
      // console.log(randomDocumentName)
      let allItems = corpora.getFile(randomCategory, randomDocumentName)
      ///I need to figure out how to select just one entry to pass to the route and then in sketch js use that json entry to make a dom element from
      // console.log(randomItem[randomDocumentName])
      // console.log(allItems)
     

      // console.log(categories[2])
    
      return allItems
    }
      res.send(randomThing())
}

app.get('/all', showAll);

function showAll(req, res) {
  // If you have an object called wordcounts with all the data
  res.send(corpusData);
}


// module.exports = corpora