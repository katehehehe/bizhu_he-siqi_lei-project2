import words from "./words.txt";


export const generateWordSet = async () => {
  const response = await fetch(words);
  const result = await response.text();
  const wordArray = result.split("\n");
  //const todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
  const wordSet = new Set(wordArray);
  return { wordSet, wordArray };
};