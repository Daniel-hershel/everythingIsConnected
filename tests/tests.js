const {assert} = require('chai');
const myCode = require('../rd');
const theThing = myCode.theThing;
const randomThingGenerator = myCode.randomThingGenerator;
// const app = require('../server');

// describe('Connecting Two Random THINGS', () => {
//   it('creates a dom element from a corpus element', ()=>{
//   })
// })
describe('Gathering Corpus', () => {
    it('takes 1 or 2 arguments for the corpora getFile() method and returns the first 15 elements from the returned array ', () => {
      // browser.url('/');
      //setup
      // let animals = theThing
      // console.log(animals.typeOf)
      // let corpus = "color";
      // let specific = "crayola";
      //exercise
      // let animalsLength = reasonableAnimals.length

      //verify
      assert.isBelow(theThing.corpusCreator("materials", "gemstones"), 15, "too long")
      // assert.isBelow(theThing.corpusCreator("words", "nouns"), 15, "too long")
      // assert.equal(browser.getText('#messages'),'');
    });
  });


describe("Random Thing Generator", () => {
  it("takes one argument and runs a function to return a random item from a random file from a random categoriy in corpora", ()=>{
      // Setup
      let checker = anyWord_howTocheck

      // Exercise

      // Verify
      assert.includes(randomThingGenerator.randomThingCreator(2))

      
  })
})

