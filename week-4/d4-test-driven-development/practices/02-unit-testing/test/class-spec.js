const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      //create Word instances
      let word1 = new Word("wow");
      let word2 = new Word("aiyaaah");

      //check if word property exists or if its undefined
      expect(word1.word).exist;
      expect(word2.word).exist;
    });

    it('should set the "word" property when a new word is created', function () {
      //create Word instances
      let word1 = new Word("wow");
      let word2 = new Word("aiyaaah");

      //check if word property exists or if its undefined
      expect(word1.word).to.equal("wow");
      expect(word2.word).to.equal("aiyaaah");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      //create Word instances
      let word1 = new Word("wow");
      let word2 = new Word("aiyaaah");

      //check if word property exists or if its undefined
      expect(word1.removeVowels()).to.equal("ww");
      expect(word2.removeVowels()).to.equal("yh");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      //create Word instances
      let word1 = new Word("wow");
      let word2 = new Word("aiyaaah");

      //check if word property exists or if its undefined
      expect(word1.removeConsonants()).to.equal("o");
      expect(word2.removeConsonants()).to.equal("aiaaa");
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      //create Word instances
      let word1 = new Word("wow");
      let word2 = new Word("keyboard");

      //check if word property exists or if its undefined
      expect(word1.pigLatin()).to.equal("owway");
      expect(word2.pigLatin()).to.equal("eyboardkay");
    });
  });
});
