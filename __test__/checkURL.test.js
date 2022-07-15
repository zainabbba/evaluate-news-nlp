import { checkForName } from '/Users/zainab/Desktop/evaluate-news-nlp/src/client/js/checkURL.js'

// Import the js file to test
import { checkURL } from "../src/client/js/checkURL"

describe("Testing the  vaild url functionality", () => {
  test("should return true", () => {  
  const string="https://www.bbc.com/news/world-africa-58321580";
  expect(checkURL(string)).toBe(true);
  expect(string).toBeDefined();
});



  test("should return false", () => {  
  const string2="";
  expect(checkURL(string2)).toBe(false);
  expect(string2).toBeDefined();
});


test("should return false", () => {  
  const string3=":htt//.bbc.com/news/world-africa-58321580";
  expect(checkURL(string3)).toBe(false);
  expect(string3).toBeDefined();
});

});