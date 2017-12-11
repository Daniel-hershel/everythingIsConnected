
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

 const randomThing = function (){
    // for (let i=0; i < 3; i++){}
      let allCategories = corpora.getCategories()
      let randomCategory = allCategories[Math.floor(Math.random() * allCategories.length)];
      let allDocuments = corpora.getFiles(randomCategory)
      // let randomDocument = allDocuments[1]
      let randomDocument = allDocuments[Math.floor(Math.random()* allDocuments.length)]
      let randomDocumentName = randomDocument.name
      // here write code so that if randomDocument has a description property pass it and if it doesn't then run randomDocument again to make sure whatever is passed can be counted to the correct field to find the actual entries. There seems to be no naming standard between the title of the lists and the field where the entries actually are
      // console.log(randomDocumentName)
      // 
      // if they do have a description then the items can be found in randomDocument[1], where description is randomDocument[0]
      let allItems = corpora.getFile(randomCategory, randomDocumentName)
      ///I need to figure out how to select just one entry to pass to the route and then in sketch js use that json entry to make a dom element from
      // console.log(randomItem[randomDocumentName])
      // console.log(allItems)
     

      // console.log(categories[2])
      console.log(randomDocumentName)
      let holder = { 
        "title": randomDocumentName,
        "data": allItems
      }
    
      return holder
    }
app.get('/random', showRandom);


function showRandom(req, res){

 
      res.send(randomThing())
}

app.get('/all', showAll);

function showAll(req, res) {
  // If you have an object called wordcounts with all the data
  res.send(corpusData);
}

app.post('/path/to/post', gotData);
function gotData(req, res) {
let theFunction = randomThing()

  // Look at the "body" of a POST to get
  // data, not the "params" like with a GET
  var name = req.body.name;
  var password = req.body.password;



  var reply = {
    message: "thank you"
  }
      res.send(theFunction)
  // res.send(randomThing());
  // res.send(theFunction);
}
// module.exports = corpora