const sentences = [
  { english: 'The cricket match was cancelled.', sinhala: '01. ක්‍රිකට් තරගය අවලංගු කරන ලදී.' },
  { english: 'He spent thirty thousand rupees on music instruments purchase.', sinhala: '02. සංගීත භාණ්ඩ මිලදී ගැනීමට ඔහු 30000 ක මුදලක් වියදම් කළා.' },
  { english: 'Are you going to break the door?', sinhala: '03. ඔබ දොර කඩන්නද හදන්නෙ?' },
  { english: 'How long have you lived in this city?', sinhala: '04. ඔබ කොච්චර කාලයක් මේ නගරයේ ජීවත් වෙලා තිබුනද?' },
  { english: 'Do you know the reason why the_shop is closed today?', sinhala: '05. ඔබ දන්නවද අද කඩේ වහපු හේතුව?' },
  { english: 'This is the dress which Nayana sew.', sinhala: '06. මේක තමයි නයනා මහපු ඇඳුම.' },
  { english: 'I know the baby whom sits next to you.', sinhala: '07. ඔබට එහා පැත්තෙන් ඉන්න ළමයව මම දන්නවා.' },
  { english: 'This is the boy whom I met in France.', sinhala: '08.  මේ තමයි මට ප්‍රංශයේදී මුනගැසුන පිරිමි ළමයා.' },
  { english: 'I didn\'t hear what you said.', sinhala: '09. ඔබ කියූ දේ මට ඇසුනේ නෑ.' },
  { english: 'The writer who wrote this book is Sri Lankan.', sinhala: '10. මේ පොතේ කතුවරයා ශ්‍රීලාංකිකයෙක්.' }
];

let currentSentence = 0;
let shuffledWords = [];
let selectedWords = [];

// Get the sentence and shuffle the words
function newSentence() {
selectedWords = [];
const sentence = sentences[currentSentence];
const english = sentence.english;
const sinhala = sentence.sinhala;
document.querySelector('.sentence .english').textContent = english;
document.querySelector('.sentence .sinhala').textContent = sinhala;

// Shuffle the words
shuffledWords = english.split(' ').sort(() => Math.random() - 0.5);
document.querySelector('.words').innerHTML = '';
shuffledWords.forEach(word => {
const div = document.createElement('div');
div.className = 'word';
div.textContent = word;
div.addEventListener('click', selectWord);
document.querySelector('.words').appendChild(div);
});
}

// Select a word and add it to the selected words array
function selectWord() {
if (!selectedWords.includes(this.textContent)) {
selectedWords.push(this.textContent);
this.style.backgroundColor = '#7286D3';
this.style.color = 'white';
}
}

// Check the answer and display the result
function checkAnswer() {
const sentence = sentences[currentSentence];
const english = sentence.english;
const selected = selectedWords.join(' ');
if (selected === english) {
document.querySelector('.result').textContent = 'Correct! ✔';
document.querySelector('.result').style.color = '#4CAF50';
currentSentence++;
if (currentSentence === sentences.length) {
document.querySelector('.game').style.display = 'none';
document.querySelector('.result').textContent = 'Congratulations, you have completed the game!';

document.querySelector('.congrats').style.display = 'block';

} else {
setTimeout(newSentence, 1000);
}
} else {
document.querySelector('.result').textContent = 'Incorrect ✖, please try again.';
document.querySelector('.result').style.color = '#FF0000';
selectedWords = [];
shuffledWords.forEach(word => {
const div = document.createElement('div');
div.className = 'word';
div.textContent = word;
div.addEventListener('click', selectWord);
document.querySelector('.words').appendChild(div);
});
}
}

// Start the game
newSentence();
const restartBtn = document.getElementById("restart-btn");

restartBtn.addEventListener("click", function() {
  location.reload();
});

const nextBtn = document.getElementById("next-btn");

nextBtn.addEventListener("click", function() {
  // Replace "https://example.com" with the URL you want to open
  window.location.href = "https://learnenglishsinhala.blogspot.com/2023/04/test.html";
});
