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

// Récupérer la valeur d'un input text par son id
const getValue = () => {
  let myText = document.getElementById("original").value;
  return myText;
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
  return result.join(" ");
};

// Il est préférable de séparer la fonction qui encode avec la fonction qui affiche le résultat de cet encodage.
const displayEncode = (text) => {
  let result = encode(text);
  document.getElementById("theResult").innerHTML =
    "Voici la traduction en Morse " + `<strong>${result}</strong>`;
  console.log(sentence);
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
  return result.join(" ");
};

// On décorèle l'affichage de la fonction qui décode. Ce sera + simple pour les dev front et les dev back pour bien séparer les tâches.
const displayResult = (sign) => {
  let result = decode(sign);
  console.log(result);
  document.getElementById("theResult").innerHTML =
    "Voici la traduction depuis le Morse " + `<strong>${result}</strong>`;
};

// Ci-dessous les exports sur les fonctions choisies pour les tester avec Mocha
exports.encode = encode;
exports.decode = decode;
