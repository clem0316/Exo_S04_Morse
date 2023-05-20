const latinToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

const morseToLatin = {
  "-": "T",
  "--": "M",
  "---": "O",
  "--.": "G",
  "--.-": "Q",
  "--..": "Z",
  "-.": "N",
  "-.-": "K",
  "-.--": "Y",
  "-.-.": "C",
  "-..": "D",
  "-..-": "X",
  "-...": "B",
  ".": "E",
  ".-": "A",
  ".--": "W",
  ".---": "J",
  ".--.": "P",
  ".-.": "R",
  ".-..": "L",
  "..": "I",
  "..-": "U",
  "..-.": "F",
  "...": "S",
  "...-": "V",
  "....": "H",
};

// Séparer les caractères d'un texte
const getLatinCharacterList = (text) => {
  let separateText = text.split("");
  return separateText;
};

// Correspondre une lettre avec interprétation Morse
const translateLatinCharacter = (char) => {
  let latinArray = latinToMorse[char];
  return latinArray;
};

// Encoder en Morse un message texte
const encode = (text) => {
  let upText = text.toUpperCase();

  let result = [];
  let sentence = getLatinCharacterList(upText);
  for (let i = 0; i < sentence.length; i++) {
    result.push(translateLatinCharacter(sentence[i]));
  }
  return result;
};

// Séparer les caractères Morse (que l'on a séparés par des espaces dans notre paramètre d'entrée)
const getMorseCharacterList = (morse) => {
  let separateMorse = morse.split(" ");
  return separateMorse;
};

// Correspondre le caractère Morse avec son équivalent en texte
const translateMorseCharacter = (sign) => {
  let morseArray = morseToLatin[sign];
  return morseArray;
};

// Décoder le message Morse en texte
const decode = (sign) => {
  let result = [];
  let sentence = getMorseCharacterList(sign);
  for (let i = 0; i < sentence.length; i++) {
    result.push(translateMorseCharacter(sentence[i]));
  }
  return result;
};
console.log(decode("-.-. --- ..- -.-. --- ..-"));
